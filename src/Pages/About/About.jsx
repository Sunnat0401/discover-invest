import React from 'react'
import './About.css'
import Advantage from '../../Components/Advantage/Advantage'
import { useTranslation } from 'react-i18next'
const About = () => {
    const {t} = useTranslation()
  return (
    <div className='about'>
        <div className="container">
     <div className="about-left">
     <h2 className="about-title">
                <span className="about-line">
 {t("discover")} {t("invest")}
                </span> <br />
                <span className='pl'>
                    {t("about1")}
                </span>
            </h2>
            <p className="about-text">
            {t("about2")}
            </p>
     </div>
                    <div className="about-right">
                    <div className="about-cards">
            <div className="about-card">
                            <h1 className='about-headline'>16</h1>
                            <p className="about-subline">{t("about4")}</p>
                        </div>
                        <div className="about-card">
                            <h1 className='about-headline'>400+</h1>
                            <p className="about-subline">{t("about6")}</p>
                        </div>
                        <div className="about-card">
                            <h1 className='about-headline'>150+</h1>
                            <p className="about-subline">{t("projects")}</p>
                        </div>
                        <div className="about-card">
                            <h1 className='about-headline'>16</h1>
                            <p className="about-subline">{t("about4")}</p>
                        </div>
                        <div className="about-card">
                            <h1 className='about-headline'>14</h1>
                            <p className="about-subline">{t("about3")} </p>
                        </div>
                        <div className="about-card">
                            <h1 className='about-headline'>250+</h1>
                            <p className="about-subline">{t("about5")} </p>
                        </div>
                        <div className="about-card active ">
                            <h1 className='about-subtext '>{t("discover")} {t("invest")} </h1>
                        </div>
                        <div className="about-card">
                            <h1 className='about-headline'>5000+</h1>
                            <p className="about-subline">{t("about6")} </p>
                        </div>
                        <div className="about-card">
                            <h1 className='about-headline'>150+</h1>
                            <p className="about-subline">{t("projects")}</p>
                        </div>
                        
            </div>
                    </div>
        </div>
        <Advantage/>
    </div>
  )
}

export default About