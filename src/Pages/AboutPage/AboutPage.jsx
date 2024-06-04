import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import './AboutPage.css'
import AboutCompany from '../../Components/AboutCompany/AboutCompany'
import Tasks from '../../Components/Tasks/Tasks'
import AboutCards from '../../Components/AboutCards/AboutCards'
import Contact from '../../Components/Contact/Contact'
import { useTranslation } from 'react-i18next'
const AboutPage = () => {
  const {t} = useTranslation()
  return (
    <div className='aboutpage'>
        <Navbar/>
      <div className="aboutpage-wrapper">
        <div className="container">
                   <div className="aboutpage-information">
                   <h1 className="aboutpage-title">
                        {t("aboutpage1")} <br />
                        {t("aboutpage2")}
                      </h1>
                      <p className="aboutpage-subtitle">
                   {t("aboutpage3")}
                      </p>
                   </div>
                      <div className="aboutpage-buttons">
         <Link to='https://di.uz/%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F.pdf' className="aboutpage-button"></Link>
         <Link to='https://di.uz/%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F.pdf' className="aboutpage-button active ">{t("aboutcards7")} <i class="fa-solid fa-download"></i></Link>
        </div>
        </div>
      </div>
      <AboutCompany/>
      <Tasks/>
      <AboutCards/>
      <Contact/>
    </div>
  )
}

export default AboutPage