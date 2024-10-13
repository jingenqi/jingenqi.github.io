import React, { useState } from 'react'
import "./qualification.css"


const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    // Function to close the modal when clicking outside the modal content
    const closeModalOnOutsideClick = (e) => {
        if (e.target.classList.contains('services__modal')) {
            setToggleState(0);
        }
    };

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">Personal Journey</span>


        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                className={
                    toggleState === 1 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={
                    toggleState === 2
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                {/* Education */} 
                <div 
                className={
                    toggleState === 1 
                    ? "qualification__content qualification__content-active"
                    : "qualification__content"
                }
                >
                    {/* Qualification 1*/} 
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Foundation Year</h3>
                            <span className="qualification__subtitle"> University of Warwick</span>
                            <span className="qualification__title"> Computer Science</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* Qualification 2 */} 
                    <div className="qualification__data">
                        <div></div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Bachelor's (BSc)</h3>
                            <span className="qualification__subtitle"> University of Warwick</span>
                            <span className="qualification__title">Computer Science</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2023
                            </div>
                        </div>

                        
                    </div>

                    {/* Qualification 3 */} 
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Master</h3>
                            <span className="qualification__subtitle">University of Warwick </span>
                            <span className="qualification__title"> Predictive Modelling and Scientific Computing</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023 - 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                </div>


                {/* Experience */} 
                {/* Experience */} 
<div  
  className={
    toggleState === 2 
      ? "qualification__content qualification__content-active"
      : "qualification__content"
  }
>
  {/* Shangu Cyber Security Technology Co., Ltd */}
  <div className="qualification__data">
    <div>
      <h3 className="qualification__title">Data Scientist, Intern</h3>
      <span className="qualification__subtitle">Shangu Cyber Security Technology Co., Ltd</span>
      <div className="qualification__calender">
        <i className="uil uil-calendar-alt"></i> Jul. - Aug. 2023
      </div>
    </div>

    <div>
      <span className="qualification__rounder"></span>
      <span className="qualification__line"></span>
    </div>
  </div>

  {/* Saint Laurent Consulting */}
  <div className="qualification__data">
    <div></div>
    
    <div>
      <span className="qualification__rounder"></span>
      <span className="qualification__line"></span>
    </div>

    <div>
      <h3 className="qualification__title">Business Intelligence Engineer, Intern</h3>
      <span className="qualification__subtitle">Saint Laurent Consulting</span>
      <div className="qualification__calender">
        <i className="uil uil-calendar-alt"></i> Oct. 2022 - Jan. 2023
      </div>
    </div>
  </div>

  {/* Online Mentorship Management System */}
  <div className="qualification__data">
    <div>
      <h3 className="qualification__title">Backend Software Engineer</h3>
      <span className="qualification__subtitle">Online Mentorship Management System</span>
      <div className="qualification__calender">
        <i className="uil uil-calendar-alt"></i> Jan. - Mar. 2022
      </div>
    </div>

    <div>
      <span className="qualification__rounder"></span>
      <span className="qualification__line"></span>
    </div>
  </div>

  {/* E-commerce System Development */}
  <div className="qualification__data">
    <div></div>
    
    <div>
      <span className="qualification__rounder"></span>
      <span className="qualification__line"></span>
    </div>

    <div>
      <h3 className="qualification__title">Full Stack Engineer</h3>
      <span className="qualification__subtitle">E-commerce System Development</span>
      <div className="qualification__calender">
        <i className="uil uil-calendar-alt"></i> Mar. - Present
      </div>
    </div>
  </div>

</div>



            </div>
        </div>
    </section>
  )
}

export default Qualification