import React, { useState } from 'react'
import "./services.css"
const Services = () => {
    const [toggleState, setToggleState] = useState(0);

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
    <section className="services section" id='services'>
        <h2 className="section__title">Technology</h2>
        <span className="section__subtitle">What I master</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Product <br/> Design</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>View More
                    <i className="uil uil-arrow-right services__button-icon">
                    </i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"} onClick={closeModalOnOutsideClick}>
                        <div className="services__modal-content">
                            <i onClick = {() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title"></h3>
                            <p className="services__modal-description">
                                Provided Software consulting services to University Students.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Develop UI and Backand.</p>
                                </li>

                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page Development</p>
                                </li>

                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Post Brand Company.</p>
                                </li>

                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design the software product.</p>
                                </li>

                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Python with Django framework.</p>
                                </li>
                            </ul>

                        </div>
                    </div>
            </div>


        <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">UI/UX <br/> Design</h3>
                </div>

                <span onClick={() => toggleTab(2)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon">
                    </i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"} onClick={closeModalOnOutsideClick}>
                        <div className="services__modal-content">
                            <i onClick = {() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title"></h3>
                            <p className="services__modal-description">
                                Provided Software consulting services to University Students.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Develop UI and Backand.</p>
                                </li>

                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page Development</p>
                                </li>

                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Post Brand Company.</p>
                                </li>

                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design the software product.</p>
                                </li>

                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Python with Django framework.</p>
                                </li>
                            </ul>

                        </div>
                    </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Visual <br/> Design</h3>
                </div>

                <span onClick={() => toggleTab(3)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon">
                    </i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"} onClick={closeModalOnOutsideClick}>
                        <div className="services__modal-content">
                            <i onClick = {() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">
                                Provided Software consulting services to University Students.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Develop UI and Backand.</p>
                                </li>

                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page Development</p>
                                </li>

                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Post Brand Company.</p>
                                </li>

                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design the software product.</p>
                                </li>

                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Python with Django framework.</p>
                                </li>
                            </ul>

                        </div>
                    </div>
            </div>
        </div>

        
            
    </section>
  )
}

export default Services