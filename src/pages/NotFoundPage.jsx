import { Link } from 'react-router-dom';
import PageMeta from '../components/common/PageMeta';

export default function NotFoundPage() {
  return (
    <main id="main-content" className="page-shell">
      <PageMeta title="Page not found" />
      <header className="page-hero">
        <p className="page-hero__eyebrow">404</p>
        <h1 className="page-hero__title">This page does not exist.</h1>
        <p className="page-hero__lead">The address may have changed, or the page may have moved.</p>
        <Link className="button button--primary" to="/">
          Return home
        </Link>
      </header>
    </main>
  );
}
