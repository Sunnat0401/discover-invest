import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import './AboutPage.css'
const AboutPage = () => {
  return (
    <div className='aboutpage'>
      <div className="aboutpage-wrapper">
        <Navbar/>
        <div className="container">
                   <div className="aboutpage-information">
                   <h1 className="aboutpage-title">
                        KOMPANIYA <br />
                        HAQIDA
                      </h1>
                      <p className="aboutpage-subtitle">
                      Kompaniyamiz nafaqat loyihalarni takomillashtirish, balki yangi imkoniyatlar uchun ham o'z eshiklarini ochadi. Davlat miqyosidagi imoratlarni barpo qilish bilan birga, istiqbol uchun ham asos solishda davom etamiz
                      </p>
                   </div>
                      <div className="aboutpage-buttons">
         <Link to='https://di.uz/%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F.pdf' className="aboutpage-button"></Link>
         <Link to='https://di.uz/%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F.pdf' className="aboutpage-button active ">Barcha loyihalar <i class="fa-solid fa-download"></i></Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage