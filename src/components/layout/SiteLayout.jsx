import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

export default function SiteLayout({ children }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
