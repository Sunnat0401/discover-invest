import { Link } from 'react-router-dom'
import './AboutCompany.css'
import { AboutPage1 } from '../../assets'
import { useTranslation } from 'react-i18next'
const AboutCompany = () => {
   const {t} = useTranslation()
  return (
    <div className='company'>
      <div className="container">
      <h2 className="company-title">
                <span className="company-line">
        {t("company1")} 
                </span> <br />
                <span className='pl'>
                {t("company2")} 
                </span>
            </h2>

            <div className="company-right">
            <img src={AboutPage1} alt="img" className='company-img' />
            <p className="company-text">
            {t("company3")} 
            </p>
            <div className="company-buttons">
         <Link to='projects' className="company-button"></Link>
         <Link to='projects' className="company-button active ">{t("company4")} </Link>
        </div>
            </div>
      </div>
    </div>
  )
}

export default AboutCompany