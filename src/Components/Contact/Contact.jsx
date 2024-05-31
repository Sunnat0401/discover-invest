import { inputleft } from '../../assets'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
        <div className="container">
           <div className="contact-wrapper">
           <div className="contact-left">
            <h2 className="contact-title">
          <span className="contact-line">Aloqa</span> <br />
        </h2>
         <div className="contact-cards">
            <div className="contact-card">
            <i class="fa-solid fa-location-dot contact-iconic"></i>
                <div className="contact-info">
                    <h3 className="contact-subtitle">Manzil</h3>
                    <p className="contact-text">
                    O’zbekiston Respublikasi, Toshkent shahri, Alisher Navoiy nomidagi Milliy Bog’ sayilgohi
                    </p>
                </div>
            </div>
            <div className="contact-card">
            <i class="fa-solid fa-phone contact-iconic"></i>
                <div className="contact-info">
                    <h3 className="contact-subtitle">Telefon</h3>
                    <p className="contact-text">
                    O’zbekiston Respublikasi, Toshkent shahri, Alisher Navoiy nomidagi Milliy Bog’ sayilgohi
                    </p>
                </div>
            </div>
            <div className="contact-card">
            <i class="fa-solid fa-clock contact-iconic"></i>
                <div className="contact-info">
                    <h3 className="contact-subtitle">Ish vaxti </h3>
                    <p className="contact-text">
                    O’zbekiston Respublikasi, Toshkent shahri, Alisher Navoiy nomidagi Milliy Bog’ sayilgohi
                    </p>
                </div>
            </div>
         </div>
         <div className="contact-icons">
            <a href="https://business.facebook.com/latest/home?asset_id=866538573482797&nav_ref=push" className="navbar-sublink"> <i class="fa-brands fa-facebook-f icon-sign"></i></a>
            <a href="https://instagram.com/discover_invest?igshid=ZDdkNTZiNTM=" className="navbar-sublink">  <i class="fa-brands fa-instagram icon-sign"></i></a>
            <a href="https://t.me/discovery_invest"> <i class="fa-brands fa-telegram icon-sign"></i></a>
        
         </div>
         <form className='contact-form'>
           <div className="contact-inputs">
           <div className="input-group">
        <label className='contact-label' htmlFor="">Telefon raqam</label>
        <input  type="tel" required  className="contact-input" placeholder="+ 998 " />
    </div>
    <div className="input-group">
        <label className='contact-label' htmlFor="">Ism</label>
        <input type="text" required className="contact-input" placeholder='Ismingiz nima ?' />
    </div>
           </div>
            <button className='contact-btn'>Qayta aloqa</button>
         </form>
            </div>
            <div className="contact-right">
           <iframe src="https://yandex.uz/map-widget/v1/?ll=69.284695%2C41.337148&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTQzMTQxMTc3EkRPyrt6YmVraXN0b24sIFRvc2hrZW50LCBZdW51c29ib2QgeW_Ku25hbGlzaGksIEJvZG9tem9yIG1ldHJvIGJla2F0aSIKDcSRikIVPVklQg%2C%2C&z=15.44 "></iframe>
            </div>
           </div>
           <p className="contact-bottom">© 2022 Discover Invest. Barcha huquqlar himoyalangan.</p>
        </div>
    </div>
  )
}

export default Contact