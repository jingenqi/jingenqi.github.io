import React from 'react'
import { FaGithub } from 'react-icons/fa';
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
             

            <a href="https://github.com/jingenqi" className="footer__social-link" target="_blank" rel="noreferrer">
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