import { useTranslation } from 'react-i18next'
import Contact from '../../Components/Contact/Contact'
import Navbar from '../../Components/Navbar/Navbar'
import OurProjects from '../../Components/OurProjects/OurProjects'
import './Projects.css'

const Projects = () => {
  const {t}  = useTranslation()
  return (
    <div className='projects'> 
     <Navbar/>
     <div className="container">
        <div className="projects-card">
          <h1 className='projects-title'>
          {t("projects1")}
          </h1>
          <div className="projects-text">
          {t("projects2")}
          </div>
        </div>
        <OurProjects/>
        <Contact/>
     </div>
</div>
  )
}

export default Projects