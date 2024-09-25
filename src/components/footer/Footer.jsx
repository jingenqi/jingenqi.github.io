import React from 'react'
import { FaInstagram, FaDribbble, FaGithub } from 'react-icons/fa';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Jing</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#project" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>


            </ul>

            <div className="footer__social">
            <a href="" className="home__social-icon" target="_blank">
                <FaInstagram />
            </a>

            <a href="https://dribbble.com/krooop?onboarding=true&designer=true" className="home__social-icon" target="_blank">
                <FaDribbble />
            </a>

            <a href="https://github.com/jingenqi" className="home__social-icon" target="_blank">
                <FaGithub />
            </a>

            </div>

            <span className="footer__copy">
                &#169; Enqi Jing. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer