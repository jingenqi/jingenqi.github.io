import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navigation } from '../../content/navigation';
import { profile } from '../../content/profile';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <Link className="site-footer__name" to="/">
            {profile.name}
          </Link>
          <p>{profile.role}.</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          {navigation.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-footer__social">
          {[
            { label: 'GitHub', url: profile.github },
            { label: 'LinkedIn', url: profile.linkedin },
          ].map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
              {social.label}
              <ArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ))}
        </div>
      </div>
      <div className="site-footer__legal">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built by {profile.name}.</span>
      </div>
    </footer>
  );
}
