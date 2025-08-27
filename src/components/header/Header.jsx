import React, { useState, useEffect, useRef } from "react";
import './header.css';
import { TfiAlignJustify } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";  // 添加关闭图标
import { useTranslation } from 'react-i18next';
import ThemeToggle from '../theme/ThemeToggle';
import LanguageToggle from '../language/LanguageToggle';

const Header = () => {
    const { t } = useTranslation();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);  // 用于菜单的引用

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    // 点击页面其他地方时自动关闭菜单
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);  // 如果点击发生在菜单外部，关闭菜单
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // 清除事件监听器，防止内存泄漏
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Jing</a>

                <div ref={menuRef} className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        {["Home", "About", "Skills", "Services", "Portfolio", "Contact"].map((section, index) => (
                            <li className="nav__item" key={index}>
                                <a href={`#${section.toLowerCase()}`} className="nav__link">
                                    <i className={`uil uil-${getIconName(section)} nav__icon`}></i> {t(`nav.${section.toLowerCase()}`)}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <i className="nav__close" onClick={toggleMenu}>
                        <TfiClose />
                    </i>
                </div>

                <div className="nav__controls">
                    <LanguageToggle />
                    <ThemeToggle />
                    <div className="nav__toggle" onClick={toggleMenu}>
                        <TfiAlignJustify />
                    </div>
                </div>
            </nav>
        </header>
    );
};

// Helper function to map section names to icon classes
const getIconName = (section) => {
    switch (section.toLowerCase()) {
        case "home": return "estate";
        case "about": return "user";
        case "skills": return "file-alt";
        case "services": return "briefcase-alt";
        case "portfolio": return "scenery";
        case "contact": return "message";
        default: return "";
    }
};

export default React.memo(Header);  // 使用React.memo提高性能
