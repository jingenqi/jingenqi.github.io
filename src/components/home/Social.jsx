import React from "react";
import './home.css'
import { FaInstagram, FaDribbble, FaGithub } from 'react-icons/fa';

const Social = () => {
    return (
        <div className="home__social">
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
    )
}

export default Social;
