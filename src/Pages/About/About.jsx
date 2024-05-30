import React from 'react'
import './About.css'
import Advantage from '../../Components/Advantage/Advantage'
const About = () => {
  return (
    <div className='about'>
        <div className="container">
     <div className="about-left">
     <h2 className="about-title">
                <span className="about-line">
 Discover Invest
                </span> <br />
                <span className='pl'>
                     kompaniyasi haqida
                </span>
            </h2>
            <p className="about-text">
            Kompaniyamiz nafaqat loyihalarni takomillashtirish, balki yangi imkoniyatlar uchun ham o'z eshiklarini ochadi. Davlat miqyosidagi imoratlarni barpo qilish bilan birga, istiqbol uchun ham asos solishda davom etamiz Biz atrof-muhit haqida qayg'uramiz: kompaniya binolar va infratuzilma poydevorlarini barpo etishdan tashqari, ulardan foydalanish bilan bog'liq ekologik jihatlar uchun hamma ma’suliyatni o'z zimmasiga oladi.
            </p>
     </div>
                    <div className="about-right">
                    <div className="about-cards">
            <div className="about-card">
                            <h1 className='about-headline'>16</h1>
                            <p className="about-subline">Turar joy va majmualar</p>
                        </div>
                        <div className="about-card">
                            <h1 className='about-headline'>4000+</h1>
                            <p className="about-subline">Xodimlar soni</p>
                        </div>
                        <div className="about-card">
                            <h1 className='about-headline'>150+</h1>
                            <p className="about-subline">Loyihalar</p>
                        </div>
                        <div className="about-card">
                            <h1 className='about-headline'>16</h1>
                            <p className="about-subline">Turar joy va majmualar</p>
                        </div>
                        <div className="about-card">
                            <h1 className='about-headline'>14</h1>
                            <p className="about-subline">Bozorda 14 yildan buyon </p>
                        </div>
                        <div className="about-card">
                            <h1 className='about-headline'>250+</h1>
                            <p className="about-subline">Maxsus texnikalar </p>
                        </div>
                        <div className="about-card active ">
                            <h1 className='about-subtext '>Discover invest </h1>
                        </div>
                        <div className="about-card">
                            <h1 className='about-headline'>4000+</h1>
                            <p className="about-subline">Xodimlar soni </p>
                        </div>
                        <div className="about-card">
                            <h1 className='about-headline'>150+</h1>
                            <p className="about-subline">Loyihalar</p>
                        </div>
                        
            </div>
                    </div>
        </div>
        <Advantage/>
    </div>
  )
}

export default About