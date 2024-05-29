import Navbar from '../../Components/Navbar/Navbar'
import './HomePages.css'

const HomePages = () => {
  return (
    <div className='homepage'>
      <Navbar/>
      <div className="video-container">
        <video autoPlay muted loop className="video-bg">
          <source src="/src/assets/videomp4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container">
           <h1 className="homepage-tit">Discover <br /> Invest</h1>
           <p className="homepage-text">Har jihatta mukammallik</p>
           <div className="homepage-btns">
            <button className="home-page-btn">Loyihalar</button>
            <button className="home-page-btn">Aloqa</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default HomePages
