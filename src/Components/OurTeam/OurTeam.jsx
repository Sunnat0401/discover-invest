import './OurTeam.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ourteam1, ourteam2, ourteam3, ourteam4, ourteam5, ourteam6 } from '../../assets';

const OurTeam = () => {
  return (
    <div className='ourteam'>
      <div className="container">
        <h2 className="ourteam-title">
          <span className="ourteam-line">Bizning</span> <br />
          <span className='pl'>jamoa</span>
        </h2>
        <Swiper
    slidesPerView={4}
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
      <SwiperSlide className='ourteam-card'>
            <img src={ourteam1} alt="team" className='ourteam-img' />
            <h3 className="ourteam-headline">
              Hasanvov Azamat Asqar o'g'li
            </h3>
            <p className="ourteam-description">Loyiha menejeri</p>
          </SwiperSlide>
        <SwiperSlide className='ourteam-card'><img src={ourteam5} alt="team" className='ourteam-img' />
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
            <p className="ourteam-description">Loyiha menejeri</p></SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default OurTeam;
