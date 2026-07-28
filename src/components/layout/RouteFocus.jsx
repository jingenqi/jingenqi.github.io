import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteFocus() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    const timer = window.setTimeout(() => {
      const heading = document.querySelector('main h1');
      if (heading) {
        heading.setAttribute('tabindex', '-1');
        heading.focus({ preventScroll: true });
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
