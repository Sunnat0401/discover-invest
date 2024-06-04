import './News.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ourteam1, ourteam3, ourteam4, ourteam5, ourteam6 } from '../../assets';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const News = () => {
  const {t} = useTranslation()
  return (
    <div className='news'>
      <div className="container">
      <h2 className="news-title">
          <span className="news-line">{t("news1")}</span> <br />
          <span className='pl'>   {t("news2")}</span>
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
    breakpoints={{
      0: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
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
        
             {t("news3")}
            </h3>
            <p className="news-description">{t("news4")}</p>
             </div>
          </SwiperSlide>
          <SwiperSlide className='news-card bg1'>
          <p className="news-info">
            <span className="news-circle"></span>2023-01-27

        </p>
             <div className="news-information">
             <h3 className="news-headline">
             {t("news5")}
            </h3>
            <p className="news-description">{t("news4")}</p>
             </div>
          </SwiperSlide>
          <SwiperSlide className='news-card bg2'>
          <p className="news-info">
            <span className="news-circle"></span>2023-01-27

        </p>
             <div className="news-information">
             <h3 className="news-headline">
             {t("news6")}
            </h3>
            <p className="news-description">{t("news4")}</p>
             </div>
          </SwiperSlide>
          <SwiperSlide className='news-card bg3'>
          <p className="news-info">
            <span className="news-circle"></span>2023-01-27

        </p>
            <div className="overlay"></div>
             <div className="news-information">
            
             <h3 className="news-headline">
         
             {t("news7")}
            </h3>
            <p className="news-description">{t("news4")}</p>
             </div>
          </SwiperSlide>
          <SwiperSlide className='news-card bg4'>
          <p className="news-info">
            <span className="news-circle"></span>2023-01-27

        </p>
            <div className="overlay"></div>
             <div className="news-information">
            
             <h3 className="news-headline">
             {t("news4")}
            </h3>
            <p className="news-description">{t("news4")}</p>
             </div>
          </SwiperSlide>
          <SwiperSlide className='news-card bg5'>
          <p className="news-info">
            <span className="news-circle"></span>2023-01-27

        </p>
            <div className="overlay"></div>
             <div className="news-information">
            
             <h3 className="news-headline">
             {t("news9")}
            </h3>
            <p className="news-description">{t("news4")}</p>
             </div>
          </SwiperSlide>
       
      </Swiper>
      <div className="news-buttons">
         <Link to='/connect' className="news-button"></Link>
         <Link to='/connect' className="news-button active ">{t("news10")}</Link>
        </div>
      </div>
    </div>
  )
}

export default News