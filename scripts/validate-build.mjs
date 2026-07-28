import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { gzipSync } from 'node:zlib';
import { pageMetadata, profile, projects } from '../src/content/index.js';

const DIST = resolve('dist');
const SITE_URL = profile.website;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function assertFile(path, minimumBytes = 1) {
  const details = await stat(resolve(DIST, path));
  assert(details.isFile(), `${path} is not a file.`);
  assert(details.size >= minimumBytes, `${path} is unexpectedly small.`);
}

const routes = [
  { path: '/', title: `${profile.name} - ${profile.title}` },
  ...Object.values(pageMetadata).map((metadata) => ({
    path: metadata.path,
    title: `${metadata.title} - ${profile.name}`,
  })),
  ...projects.map((project) => ({
    path: `/work/${project.slug}`,
    title: `${project.title} - ${profile.name}`,
    image: `${SITE_URL}${project.shareImage}`,
  })),
];

for (const route of routes) {
  const relative = route.path === '/' ? 'index.html' : `${route.path.slice(1)}/index.html`;
  const html = await readFile(resolve(DIST, relative), 'utf8');
  const canonical = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;

  assert(html.includes(`<title>${route.title}</title>`), `${route.path} has the wrong title.`);
  assert(html.includes(`rel="canonical" href="${canonical}"`), `${route.path} has the wrong canonical URL.`);
  assert(html.includes(`property="og:url" content="${canonical}"`), `${route.path} has the wrong Open Graph URL.`);
  if (route.image) {
    assert(html.includes(`property="og:image" content="${route.image}"`), `${route.path} has the wrong share image.`);
    assert(html.includes(`name="twitter:image" content="${route.image}"`), `${route.path} has the wrong Twitter image.`);
  }
}

await assertFile('404.html', 500);
await assertFile('CNAME', 10);
await assertFile(profile.resumePath.slice(1), 100_000);
await assertFile('og-image.png', 20_000);
for (const project of projects) {
  await assertFile(project.shareImage.slice(1), 20_000);
}

const cname = (await readFile(resolve(DIST, 'CNAME'), 'utf8')).trim();
assert(cname === 'jingenqi.tech', 'CNAME does not match the canonical domain.');

const rootHtml = await readFile(resolve(DIST, 'index.html'), 'utf8');
assert(!rootHtml.includes('enqijing.uk'), 'Build contains the retired domain.');
assert(!rootHtml.includes('Create React App'), 'Build contains CRA metadata.');

const assetNames = await readdir(resolve(DIST, 'assets'));
const entryName = assetNames.find((name) => /^index-.*\.js$/.test(name));
assert(entryName, 'Could not find the JavaScript entry bundle.');
const entry = await readFile(resolve(DIST, 'assets', entryName));
const gzipBytes = gzipSync(entry).byteLength;
assert(gzipBytes < 150_000, `Entry JavaScript exceeds the 150 KB gzip budget (${gzipBytes} bytes).`);

console.log(`Build integrity checks passed. Entry JavaScript: ${(gzipBytes / 1000).toFixed(1)} KB gzip.`);
