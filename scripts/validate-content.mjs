import { access, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { navigation, pageMetadata, profile, projects } from '../src/content/index.js';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(profile.email === 'jingenqi724@gmail.com', 'Unexpected public email address.');
assert(profile.github === 'https://github.com/jingenqi', 'Unexpected GitHub profile.');
assert(profile.website === 'https://jingenqi.tech', 'Unexpected canonical website.');
assert(profile.resumePath === '/Enqi_Jing_Resume_File.pdf', 'Unexpected resume path.');
assert(projects.length === 3, 'The selected-work collection must contain exactly three projects.');

const slugs = new Set(projects.map((project) => project.slug));
const pagePaths = new Set(Object.values(pageMetadata).map((metadata) => metadata.path));
assert(slugs.size === projects.length, 'Project slugs must be unique.');

for (const project of projects) {
  assert(project.context && project.challenge, `${project.slug} is missing case-study context.`);
  assert(project.contribution.length > 0, `${project.slug} is missing contributions.`);
  assert(project.result.length > 0, `${project.slug} is missing outcomes.`);
  assert(Array.isArray(project.metrics), `${project.slug} is missing its evidence collection.`);
  for (const metric of project.metrics) {
    assert(metric.value && metric.label, `${project.slug} contains an incomplete metric.`);
  }
  assert(
    ['trading', 'industrial', 'trajectory'].includes(project.visual.type),
    `${project.slug} has an unsupported visual type.`,
  );
  assert(project.shareImage === `/og/${project.slug}.png`, `${project.slug} is missing its share image.`);
  await access(resolve(`public${project.shareImage}`));
}

for (const item of navigation) {
  assert(item.href.startsWith('/'), `Navigation item "${item.label}" must use an internal path.`);
  assert(pagePaths.has(item.href), `Navigation item "${item.label}" has no page metadata.`);
}
assert(pagePaths.size === navigation.length, 'Page metadata and primary navigation are out of sync.');

await access(resolve(`public${profile.resumePath}`));

const pageSources = await Promise.all(
  [
    'src/pages/HomePage.jsx',
    'src/pages/WorkPage.jsx',
    'src/pages/CaseStudyPage.jsx',
    'src/pages/ResearchPage.jsx',
    'src/pages/AboutPage.jsx',
    'src/pages/ResumePage.jsx',
    'src/pages/ContactPage.jsx',
  ].map((path) => readFile(resolve(path), 'utf8')),
);
const combinedSources = pageSources.join('\n');

assert(!combinedSources.includes('example.com'), 'Placeholder contact information is not allowed.');
assert(!combinedSources.includes('images.unsplash.com'), 'Remote stock project imagery is not allowed.');
assert(!combinedSources.includes('href="#"'), 'Placeholder links are not allowed.');

console.log('Content and route integrity checks passed.');
