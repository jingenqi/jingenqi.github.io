import React from "react";
import { useTranslation } from 'react-i18next';


const Info = () => {
    const { t } = useTranslation();

    return (
        <div className="about__info grid">
            <div className="about__box">
             <i className="bx bx-award"></i>

                <h3 className="about__title">{t('about.experience.title')}</h3>
                <span className="about__subtitle">{t('about.experience.subtitle')}</span>
            </div>

            <div className="about__box">
             <i className='bx bx-briefcase-alt'></i>
                <h3 className="about__title">{t('about.projects.title')}</h3>
                <span className="about__subtitle">{t('about.projects.subtitle')}</span>
            </div>

            <div className="about__box">
             <i className='bx bx-calendar'></i>
                <h3 className="about__title">{t('about.objective.title')}</h3>
                <span className="about__subtitle">{t('about.objective.subtitle')}</span>

            </div>


        </div>
    )
}

export default Info