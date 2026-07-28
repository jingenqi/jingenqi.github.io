import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pageMetadata, profile, projects } from '../src/content/index.js';

const siteUrl = profile.website;
const defaultImage = `${siteUrl}/og-image.png`;
const distRoot = resolve('dist');
const source = await readFile(resolve(distRoot, 'index.html'), 'utf8');

const routes = [
  ...Object.values(pageMetadata).map((metadata) => ({
    ...metadata,
    title: `${metadata.title} - ${profile.name}`,
  })),
  ...projects.map((project) => ({
    path: `/work/${project.slug}`,
    title: `${project.title} - ${profile.name}`,
    description: project.summary,
    image: `${siteUrl}${project.shareImage}`,
    imageAlt: `${project.shortTitle} case study by ${profile.name}`,
  })),
];

function escapeAttribute(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function updateMeta(html, route) {
  const canonical = `${siteUrl}${route.path}`;
  const title = escapeAttribute(route.title);
  const description = escapeAttribute(route.description);
  const image = route.image ?? defaultImage;
  const imageAlt = escapeAttribute(
    route.imageAlt ?? `${profile.name} - ${profile.role}`,
  );

  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${description}" />`,
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${canonical}" />`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${title}" />`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${description}" />`,
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${canonical}" />`,
    )
    .replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:image" content="${image}" />`,
    )
    .replace(
      /<meta\s+property="og:image:alt"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:image:alt" content="${imageAlt}" />`,
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${title}" />`,
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${description}" />`,
    )
    .replace(
      /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:image" content="${image}" />`,
    );
}

for (const route of routes) {
  const directory = resolve(distRoot, route.path.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, 'index.html'), updateMeta(source, route), 'utf8');
}

console.log(`Generated ${routes.length} static route shells.`);
