import React, { useState } from 'react';
import './services.css';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const closeModalOnOutsideClick = (e) => {
    if (e.target.classList.contains('services__modal')) {
      setToggleState(0);
    }
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">IT & Technology Solutions</span>

      <div className="services__container container grid">
        {/* Full-Stack Development */}
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Full-Stack <br /> Development</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? 'services__modal active-modal' : 'services__modal'} onClick={closeModalOnOutsideClick}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Full-Stack Development</h3>
              <p className="services__modal-description">
                End-to-end web applications using Django (backend), React (frontend), and PostgreSQL (database).
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">RESTful API integration with Django REST Framework (DRF)</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Backend architecture design with Django</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Frontend development with React</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Database design with PostgreSQL</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Engineering & Automation */}
        <div className="services__content">
          <div>
            <i className="uil uil-database services__icon"></i>
            <h3 className="services__title">Data Engineering <br /> & Automation</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? 'services__modal active-modal' : 'services__modal'} onClick={closeModalOnOutsideClick}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Data Engineering & Automation</h3>
              <p className="services__modal-description">
                Custom automated data pipelines and data visualization solutions using Python, PostgreSQL, and Tableau.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Automated data scraping</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Data pipelines with Python</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Data visualization using Tableau</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Database management with PostgreSQL</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cloud Deployment & Infrastructure */}
        <div className="services__content">
          <div>
            <i className="uil uil-cloud services__icon"></i>
            <h3 className="services__title">Cloud Deployment <br /> & Infrastructure</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? 'services__modal active-modal' : 'services__modal'} onClick={closeModalOnOutsideClick}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Cloud Deployment & Infrastructure</h3>
              <p className="services__modal-description">
                Scalable cloud solutions, system deployment, and server optimization using AWS, UWSGI, and Nginx.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">AWS cloud deployments</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Server optimization using UWSGI & Nginx</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Automated deployments with Ansible</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Database backups and recovery</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI & ML */}
        <div className="services__content">
  <div>
    <i className="uil uil-brain services__icon"></i>
    <h3 className="services__title">AI & ML</h3>
  </div>

  <span className="services__button" onClick={() => toggleTab(4)}>View More
    <i className="uil uil-arrow-right services__button-icon"></i>
  </span>

  <div className={toggleState === 4 ? 'services__modal active-modal' : 'services__modal'} onClick={closeModalOnOutsideClick}>
    <div className="services__modal-content">
      <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

      <h3 className="services__modal-title">AI & ML Solutions</h3>
      <p className="services__modal-description">
        Advanced artificial intelligence and machine learning solutions tailored to your business needs. Using Python and powerful ML libraries, I develop custom AI models and automation tools that help transform your data into actionable insights.
      </p>

      <ul className="services__modal-services grid">
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Data preprocessing and feature engineering</p>
        </li>
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Custom AI model development (e.g., predictive models, classification)</p>
        </li>
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Implementation of machine learning algorithms using Python and TensorFlow</p>
        </li>
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Automated model training and tuning with Python</p>
        </li>
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Data visualization and analysis using Tableau</p>
        </li>
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Model deployment and management on cloud platforms (e.g., AWS)</p>
        </li>
      </ul>
    </div>
  </div>
</div>




      </div>
    </section>
  );
};

export default Services;
