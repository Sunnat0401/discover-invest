// import { video } from '../../assets'
import About from '../About/About'
import Contact from '../../Components/Contact/Contact'
import Navbar from '../../Components/Navbar/Navbar'
import News from '../../Components/News/News'
import OurProjects from '../../Components/OurProjects/OurProjects'
import OurTeam from '../../Components/OurTeam/OurTeam'
import './HomePages.css'
import { Link } from 'react-router-dom'

const HomePages = () => {
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
        <h1 className="homepage-title">Discover <br /> Invest</h1>
           <p className="homepage-text">Har jihatta mukammallik</p>
           <div className="homepage-btns">
               <div className="homepage-bottom">
                     <a href='' className="homepage-border"></a>
                     <a href='' className="homepage-border"></a>
               </div>
               <div className="homepage-top">
               <Link  to='/projects' className="homepage-btn active">Loyihalar</Link>
            <Link to='connect' className="homepage-btn">Aloqa</Link>
               </div>
           </div>
        </div>
          <i className=" fa-solid fa-phone homepage-modal "></i>
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
