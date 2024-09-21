import React from "react";
import { faPaperPlane, FaPlay} from 'react-icons/fa';


const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i class="bx bx-award"></i>

                <h3 className="about__title">Professional Experience</h3>
                <span className="about__subtitle">Two Intern</span>
            </div>

            <div className="about__box">
            <FaPlay />
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">10+ Projects</span>
            </div>

            <div className="about__box">
            <i class='bx bx-calendar'></i>
                <h3 className="about__title">Carrer Objective</h3>
                <span className="about__subtitle">Software Engineer </span>
                
            </div>


        </div>
    )
}

export default Info