import { Link } from 'react-router-dom'
import './OurProjects.css'
import { useTranslation } from 'react-i18next'
const OurProjects = () => {
  const {t} = useTranslation()
  return (
    <div className='ourproject'>
        <div className="container">
        <h2 className="ourproject-title">
          <span className="ourproject-line">{t("advantage1")}</span> <br />
          <span className='pl'>   {t("ourteam1")}</span>
        </h2>
        <div className="ourproject-cards">
            <div className="ourproject-card">
            <div class="overlay"></div>
             <div className="ourproject-info">
             <h3 className='ourproject-headline'>{t("ourteam2")}</h3>
              <p className="ourproject-text">
              {t("ourteam3")}
              </p>
             </div>
            </div>
            <div className="ourproject-card  background1">
            <div className="ourproject-info">
             <h3 className='ourproject-headline'>{t("ourteam4")}</h3>
              <p className="ourproject-text">
              {t("ourteam5")}
              </p>
             </div>
            </div>
        </div>
        <div className="ourproject-cards ">
            <div className="ourproject-card  background2">
            <div class="overlay"></div>
             <div className="ourproject-info">
             <h3 className='ourproject-headline'>{t("ourteam6")}</h3>
              <p className="ourproject-text">
              {t("ourteam7")}
              </p>
             </div>
            </div>
            <div className="ourproject-card  background3">
            <div className="ourproject-info">
             <h3 className='ourproject-headline'>{t("ourteam8")}</h3>
              <p className="ourproject-text">
              {t("ourteam9")}
              </p>
             </div>
            </div>
        </div>
        <div className="ourproject-cards">
            <div className="ourproject-card  background4">
            <div class="overlay"></div>
             <div className="ourproject-info">
             <h3 className='ourproject-headline'>{t("ourteam10")}</h3>
              <p className="ourproject-text">
              {t("ourtea11")}
              </p>
             </div>
            </div>
            <div className="ourproject-card  background5">
            <div className="ourproject-info">
             <h3 className='ourproject-headline'>{t("ourteam12")}</h3>
              <p className="ourproject-text">
              {t("ourteam13")}
              </p>
             </div>
            </div>
        </div>
        <div className="ourproject-buttons">
         <Link to='projects' className="ourproject-button"></Link>
         <Link to='projects' className="ourproject-button active "> {t("ourproject14")}</Link>
        </div>
        </div>
    </div>
  )
}

export default OurProjects