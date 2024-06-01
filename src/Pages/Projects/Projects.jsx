import Contact from '../../Components/Contact/Contact'
import Navbar from '../../Components/Navbar/Navbar'
import OurProjects from '../../Components/OurProjects/OurProjects'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects'> 
     <Navbar/>
     <div className="container">
        <div className="projects-card">
          <h1 className='projects-title'>
          Loyihalar
          </h1>
          <div className="projects-text">
          Kompaniyamiz nafaqat loyihalarni takomillashtirish, balki yangi imkoniyatlar uchun ham o'z eshiklarini ochadi. Davlat miqyosidagi imoratlarni barpo qilish bilan birga, istiqbol uchun ham asos solishda davom etamiz
          </div>
        </div>
        <OurProjects/>
        <Contact/>
     </div>
</div>
  )
}

export default Projects