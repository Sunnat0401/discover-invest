import { useTranslation } from 'react-i18next'
import './AboutCards.css'

const AboutCards = () => {
    const {t} = useTranslation()
    return (
    <div className='aboutcards'>
        <div className="container">
            <div className="aboutcard">
                <h1 className="aboutcard-title">
                    14
                </h1>
                <p className="aboutcard-text">
                {t("aboutcards1")}
                </p>
            </div>
            <div className="aboutcard">
                <h1 className="aboutcard-title">
                4000+
                </h1>
                <p className="aboutcard-text">
                {t("aboutcards2")} 
                </p>
            </div>
            <div className="aboutcard">
                <h1 className="aboutcard-title">
                150+
                </h1>
                <p className="aboutcard-text">
                {t("aboutcards3")}
                </p>
            </div>
            <div className="aboutcard">
                <h1 className="aboutcard-title">
                16
                </h1>
                <p className="aboutcard-text">
                {t("aboutcards4")}
                </p>
            </div>
            <div className="aboutcard">
                <h1 className="aboutcard-title">
                250+
                </h1>
                <p className="aboutcard-text">
                {t("aboutcards5")}
                </p>
            </div>
            <div className="aboutcard">
                <h1 className="aboutcard-title">
                
9+
                </h1>
                <p className="aboutcard-text">
                {t("aboutcards6")}
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutCards