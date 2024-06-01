import Contact from '../../Components/Contact/Contact'
import Navbar from '../../Components/Navbar/Navbar'
import News from '../../Components/News/News'
import './NewsPage.css'

const NewsPage = () => {
  return (
    <div className='newspage'>
        <Navbar/>
        <div className="container">
        <div className="newspage-card">
          <h1 className='newspage-title'>
          Yangiliklar
          </h1>
          <div className="newspage-text">
          Kompaniyamiz nafaqat loyihalarni takomillashtirish, balki yangi imkoniyatlar uchun ham o'z eshiklarini ochadi. Davlat miqyosidagi imoratlarni barpo qilish bilan birga, istiqbol uchun ham asos solishda davom etamiz
          </div>
        </div>
        <News/>
        <Contact/>
        </div>
    </div>
  )
}

export default NewsPage