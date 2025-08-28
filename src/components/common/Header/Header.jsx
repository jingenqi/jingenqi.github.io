import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Work' },
    { path: '/skills', label: 'About' },
    { path: '/notes', label: 'Notes' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        {/* Logo */}
        <Link to="/" className="header__logo">
          Jing
        </Link>

        {/* Desktop Navigation */}
        <div className="header__nav-container">
          <nav className="header__nav">
            {navigationItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`header__link ${
                  location.pathname === item.path ? 'header__link--active' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="header__mobile-controls">
          <ThemeToggle />
          <button
            className="header__toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`header__mobile ${isMenuOpen ? 'header__mobile--open' : ''}`}>
          {navigationItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`header__mobile-link ${
                location.pathname === item.path ? 'header__mobile-link--active' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
