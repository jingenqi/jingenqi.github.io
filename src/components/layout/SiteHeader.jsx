import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';
import { navigation } from '../../content/navigation';
import { profile } from '../../content/profile';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key === 'Tab') {
        const menuLinks = mobileMenuRef.current
          ? [...mobileMenuRef.current.querySelectorAll('a[href]')]
          : [];
        const focusable = [menuButtonRef.current, ...menuLinks].filter(Boolean);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const focusTimer = window.setTimeout(() => firstLinkRef.current?.focus(), 0);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const navClassName = ({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`;

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-brand" to="/" aria-label={`${profile.name}, home`}>
          {profile.name}
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink key={item.href} to={item.href} className={navClassName}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            className="menu-button"
            type="button"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        ref={mobileMenuRef}
        id="mobile-navigation"
        className={`mobile-menu${open ? ' is-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="mobile-menu__inner">
          {navigation.map((item, index) => (
            <NavLink
              ref={index === 0 ? firstLinkRef : undefined}
              key={item.href}
              to={item.href}
              className={navClassName}
              tabIndex={open ? 0 : -1}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
