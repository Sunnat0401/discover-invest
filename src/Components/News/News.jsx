import './News.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ourteam1, ourteam3, ourteam4, ourteam5, ourteam6 } from '../../assets';
import { Link } from 'react-router-dom';
const News = () => {
  return (
    <div className='news'>
      <div className="container">
      <h2 className="news-title">
          <span className="news-line">Kompaniya</span> <br />
          <span className='pl'>   Yangiliklari</span>
        </h2>
        <Swiper
    slidesPerView={3}
    spaceBetween={30}
    loop={true}
    pagination={{
      clickable: true,
    }}
    autoplay={{
      delay: 2000, // Set delay time in milliseconds (e.g., 2000 for 2 seconds)
      disableOnInteraction: false, // Auto-play will not be disabled after user interactions
    }}
    modules={[Autoplay, Pagination , Navigation]}
        className="mySwiper"
      >
      <SwiperSlide className='news-card '>
        <div className='overlay'></div>
        <p className="news-info">
            <span className="news-circle"></span>2023-01-27

        </p>
             <div className="news-information">
             <h3 className="news-headline">
        
Qurilish loyihasining mutaxassisi deb kimni atash mumkin?
            </h3>
            <p className="news-description">Loyiha menejeri</p>
             </div>
          </SwiperSlide>
          <SwiperSlide className='news-card bg1'>
          <p className="news-info">
            <span className="news-circle"></span>2023-01-27

        </p>
             <div className="news-information">
             <h3 className="news-headline">
             Discover Invest kompaniyasi hammani yangi 2023-yil bilan qutlaydi!
            </h3>
            <p className="news-description">Loyiha menejeri</p>
             </div>
          </SwiperSlide>
          <SwiperSlide className='news-card bg2'>
          <p className="news-info">
            <span className="news-circle"></span>2023-01-27

        </p>
             <div className="news-information">
             <h3 className="news-headline">
             O'ZBEKISTON RESPUBLIKASI KONSTITUTSIYASI QABUL QILINGAN KUN
            </h3>
            <p className="news-description">Loyiha menejeri</p>
             </div>
          </SwiperSlide>
          <SwiperSlide className='news-card bg3'>
          <p className="news-info">
            <span className="news-circle"></span>2023-01-27

        </p>
            <div className="overlay"></div>
             <div className="news-information">
            
             <h3 className="news-headline">
         
Discover Invest kompaniyasining keng ko'lamli qurilish obyektlari
            </h3>
            <p className="news-description">Loyiha menejeri</p>
             </div>
          </SwiperSlide>
          <SwiperSlide className='news-card bg4'>
          <p className="news-info">
            <span className="news-circle"></span>2023-01-27

        </p>
            <div className="overlay"></div>
             <div className="news-information">
            
             <h3 className="news-headline">
              Hasanvov Azamat Asqar o'g'li
            </h3>
            <p className="news-description">Loyiha menejeri</p>
             </div>
          </SwiperSlide>
          <SwiperSlide className='news-card bg5'>
          <p className="news-info">
            <span className="news-circle"></span>2023-01-27

        </p>
            <div className="overlay"></div>
             <div className="news-information">
            
             <h3 className="news-headline">
              Hasanvov Azamat Asqar o'g'li
            </h3>
            <p className="news-description">Loyiha menejeri</p>
             </div>
          </SwiperSlide>
        {/* <SwiperSlide className='ourteam-card'><img src={ourteam5} alt="team" className='ourteam-img' />
            <h3 className="ourteam-headline">
            Ahmadov Mahmud Nazar o'gli
            </h3>
            <p className="ourteam-description">Qurilishda usta</p></SwiperSlide>
        <SwiperSlide className='ourteam-card'><img src={ourteam3} alt="team" className='ourteam-img' />
            <h3 className="ourteam-headline">
              Bekmatov Botir Sanjar o'gli
            </h3>
            <p className="ourteam-description">Qurilishda uchastka rahbari</p></SwiperSlide>
        <SwiperSlide className='ourteam-card'><img src={ourteam4} alt="team" className='ourteam-img' />
            <h3 className="ourteam-headline">
            Ashirov Bahodir Mirjalol o'g'li
            </h3>
            <p className="ourteam-description">Loyiha menejeri</p></SwiperSlide>
        <SwiperSlide className='ourteam-card'><img src={ourteam5} alt="team" className='ourteam-img' />
            <h3 className="ourteam-headline">
              Bekmatov Suratbek Alisher o'g'li
            </h3>
            <p className="ourteam-description">Qurilishda usta</p></SwiperSlide>
        <SwiperSlide className='ourteam-card'><img src={ourteam6} alt="team" className='ourteam-img' />
            <h3 className="ourteam-headline">
             Batirov Umar Ubaydulla o'g'li
            </h3>
            <p className="ourteam-description">Loyiha menejeri</p></SwiperSlide> */}
      </Swiper>
      <div className="news-buttons">
         <a href='' className="news-button"></a>
         <Link to='news' className="news-button active ">Barcha yangiliklar</Link>
        </div>
      </div>
    </div>
  )
}

export default News