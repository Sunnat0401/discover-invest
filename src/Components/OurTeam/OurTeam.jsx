import './OurTeam.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ourteam1, ourteam2, ourteam3, ourteam4, ourteam5, ourteam6 } from '../../assets';
import { useTranslation } from 'react-i18next';

const OurTeam = () => {
  const {t} = useTranslation()
  return (
    <div className='ourteam'>
      <div className="container">
        <h2 className="ourteam-title">
          <span className="ourteam-line">{t("advantage1")}</span> <br />
          <span className='pl'>{t("ourteam1")}</span>
        </h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
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
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className='ourteam-card'>
            <img src={ourteam1} alt="team" className='ourteam-img' />
            <h3 className="ourteam-headline">{t("ourteam2")}</h3>
            <p className="ourteam-description">{t("ourteam3")}</p>
          </SwiperSlide>
          <SwiperSlide className='ourteam-card'>
            <img src={ourteam2} alt="team" className='ourteam-img' />
            <h3 className="ourteam-headline">{t("ourteam4")}</h3>
            <p className="ourteam-description">{t("ourteam5")}</p>
          </SwiperSlide>
          <SwiperSlide className='ourteam-card'>
            <img src={ourteam3} alt="team" className='ourteam-img' />
            <h3 className="ourteam-headline">{t("ourteam6")}</h3>
            <p className="ourteam-description">{t("ourteam7")}</p>
          </SwiperSlide>
          <SwiperSlide className='ourteam-card'>
            <img src={ourteam4} alt="team" className='ourteam-img' />
            <h3 className="ourteam-headline">{t("ourteam8")}</h3>
            <p className="ourteam-description">{t("ourteam9")}</p>
          </SwiperSlide>
          <SwiperSlide className='ourteam-card'>
            <img src={ourteam5} alt="team" className='ourteam-img' />
            <h3 className="ourteam-headline">{t("ourteam10")}</h3>
            <p className="ourteam-description">{t("ourteam11")}</p>
          </SwiperSlide>
          <SwiperSlide className='ourteam-card'>
            <img src={ourteam6} alt="team" className='ourteam-img' />
            <h3 className="ourteam-headline">{t("ourteam12")}</h3>
            <p className="ourteam-description">{t("ourteam13")}</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default OurTeam;
