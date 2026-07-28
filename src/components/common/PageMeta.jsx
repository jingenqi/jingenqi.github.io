import { useEffect } from 'react';
import { profile } from '../../content/profile';

const SITE_NAME = profile.name;
const SITE_URL = profile.website;
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_DESCRIPTION = profile.description;

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
}

export default function PageMeta({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = DEFAULT_IMAGE,
  imageAlt = `${profile.name} - ${profile.role}`,
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} - ${SITE_NAME}` : `${SITE_NAME} - ${profile.title}`;
    const canonical = `${SITE_URL}${path}`;
    const shareImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', { name: 'description', content: description });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    setMeta('meta[property="og:image"]', { property: 'og:image', content: shareImage });
    setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: imageAlt });
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle });
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: shareImage });

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
  }, [description, image, imageAlt, path, title]);

  return null;
}
