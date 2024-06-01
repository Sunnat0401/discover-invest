import { Link } from 'react-router-dom'
import './AboutCompany.css'
import { AboutPage1 } from '../../assets'
const AboutCompany = () => {
  return (
    <div className='company'>
      <div className="container">
      <h2 className="company-title">
                <span className="company-line">
        Kompaniya 
                </span> <br />
                <span className='pl'>
                  haqida
                </span>
            </h2>

            <div className="company-right">
            <img src={AboutPage1} alt="img" className='company-img' />
            <p className="company-text">
            Kompaniyamiz nafaqat loyihalarni takomillashtiradi, balki yangi imkoniyatlar uchun ham o'z eshiklarini ochadi. Davlat miqyosidagi imoratlarni barpo qilish bilan birga, istiqbol uchun ham asos solishda davom etamiz. Atrof-muhit haqida qayg'urish - bizni yanada birlashtirib kelmoqda. Kompaniya binolar va infratuzilma poydevorlarini bunyod qilish, ulardan foydalanish bilan bog'liq ekologik jihatlar uchun barcha ma'suliyatni o'z zimmasiga oladi kompaniya binolar va infratuzilma poydevorlarini barpo etishdan tashqari, ulardan foydalanish bilan bog'liq ekologik jihatlar uchun hamma ma’suliyatni o'z zimmasiga oladi.
            </p>
            <div className="company-top">
            <Link  to='/projects' className="company-btn active">Loyihalar</Link>
            <Link to='connect' className="company-btn">Aloqa</Link>
               </div>
            </div>
      </div>
    </div>
  )
}

export default AboutCompany