import About from '../About/About'
import Contact from '../../Components/Contact/Contact'
import Navbar from '../../Components/Navbar/Navbar'
import News from '../../Components/News/News'
import OurProjects from '../../Components/OurProjects/OurProjects'
import OurTeam from '../../Components/OurTeam/OurTeam'
import './HomePages.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const HomePages = () => {
  const {t ,  i18n } = useTranslation()
  return (
   <>
      <Navbar/>
       <div className='homepage'>
      <div className="video-container">
        <video autoPlay muted loop className="video-bg">
          <source src="/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container">
        <div className="homepage-info">
        <h1 className="homepage-title">{t("discover")} <br /> {t("invest")}</h1>
           <p className="homepage-text">{t("perfection")} </p>
           <div className="homepage-btns">
               <div className="homepage-bottom">
                     <a href='' className="homepage-border"></a>
                     <a href='' className="homepage-border"></a>
               </div>
               <div className="homepage-top">
               <Link  to='/projects' className="homepage-btn active">{t("projects")}</Link>
            <Link to='connect' className="homepage-btn">{t("connect")}</Link>
               </div>
           </div>
        </div>
        </div>
      </div>
    </div>
    <About/>
    <OurTeam/>
    <OurProjects/>
    <News/>
    <Contact/>
   </>
  )
}

export default HomePages
