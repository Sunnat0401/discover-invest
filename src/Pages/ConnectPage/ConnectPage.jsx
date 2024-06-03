import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./ConnectPage.css";
import axios from "axios";
import { message } from "antd";
const ConnectPage = () => {
  const [loading , setLoading] = useState(false)
  const SendMessages = ( event) =>{
    setLoading(true)
    event.preventDefault();
    const token = "7004900393:AAGYHAnQhdDlkbJxo4xs-vRbpISIgoTxWR8"
    const chat_id = 6856618212  ;
    const url = ` https://api.telegram.org/bot${token}/sendMessage`
    const name =document.getElementById("name").value
    const nambers =document.getElementById("numbers").value
    const person =document.getElementById("contact").value
    const dates =document.getElementById("texts").value
    
    const sendMessageContent = `Ismi: ${name} \n Familiyasi: ${nambers} necha kishiligi : ${person} \n sanasi: ${dates}`
    axios({
      url : url ,
      method: 'POST',
      data: {
        "chat_id" : chat_id,
        "text":sendMessageContent
      }
    }).then((res) => {
      message.success("Muvaffaqiyatli")
      document.getElementById("connectForm").reset()
    }).catch((err) => {
      message.error("yuborishda xatolik", err)
    }).finally(()=>setLoading(false))
  }
  return (
    <div className="connectpage">
      <div className="connectpage-wrapper">
        <Navbar />
        <div className="container">
          <h1 className="connectpage-title">ALOQA</h1>
          <p className="connectpage-text">
            Havolani to’ldirib, telefon raqamingizni qoldiring va biz yaqin vaqt
            ichida aloqaga chiqamiz
          </p>
          <a href="" className="connectpage-link">
            <i class="fa-solid fa-arrow-down-long"></i>
          </a>
        </div>
      </div>
      <div className="container">
          <div className="conntactpage-middle">
          <div className="contactpage-left">
          <h2 className="about-title">
            <span className="about-line">Sizga qanday</span> <br />
            <span className="pl">yordam bera olamiz ?</span>
          </h2>
          <p className="connectpage-text">
            Havolani to’ldirib, telefon raqamingizni qoldiring va biz yaqin vaqt
            ichida aloqaga chiqamiz
          </p>
          <div className="contact-cards">
            <div className="contact-card">
              <i class="fa-solid fa-location-dot contact-iconic"></i>
              <div className="contact-info">
                <h3 className="contact-subtitle">Manzil</h3>
                <p className="contact-text">
                  O’zbekiston Respublikasi, Toshkent shahri, Alisher Navoiy
                  nomidagi Milliy Bog’ sayilgohi
                </p>
              </div>
            </div>
            <div className="contact-card">
              <i class="fa-solid fa-phone contact-iconic"></i>
              <div className="contact-info">
                <h3 className="contact-subtitle">Telefon</h3>
                <p className="contact-text">
                  O’zbekiston Respublikasi, Toshkent shahri, Alisher Navoiy
                  nomidagi Milliy Bog’ sayilgohi
                </p>
              </div>
            </div>
            <div className="contact-card">
              <i class="fa-solid fa-clock contact-iconic"></i>
              <div className="contact-info">
                <h3 className="contact-subtitle">Ish vaxti </h3>
                <p className="contact-text">
                  O’zbekiston Respublikasi, Toshkent shahri, Alisher Navoiy
                  nomidagi Milliy Bog’ sayilgohi
                </p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="contactpage-right">
            <form action="" className="contactpage-form"  onSubmit={SendMessages} id="connectForm">
              <div className="input-group">
              <label htmlFor="" className="form-label">Ism</label>
              <input type="text " required placeholder="Ismingizni kiriting.." className="connectpage-input" id="name"/>
              </div>
              <div className="input-group">
              <label htmlFor="" className="form-label"> Telefon raqamingiz </label>
              <input type="text " required placeholder="Telefon raqamizngiz"  className="connectpage-input" id="numbers"/>
              </div>
              <div className="input-group">
              <label htmlFor="" className="form-label">Bo'lim</label>
              <select
                className="form__place general__euclid-r connectpage-input"
                id="contact"
                required
              >
                <option>Bo'lim</option>
                <option value="1">Savdo bo'limi</option>
                <option value="2">Kadrlar bo'limi</option>
                <option value="3">Moliya bo'limi</option>
                <option value="4">Buxgalteriya bo'limi</option>
                <option value="5">Sotib olish bo'limi</option>
                <option value="6">Murojatlar bo'limi</option>
              </select>
              </div>
              <div className="input-group">
              <label htmlFor="" className="form-label">Sizga qanday yordam bera olamiz ?</label>
              <textarea name="" id="texts" placeholder="Savolingizni qoldiring..." cols="30" rows="6"  required  className="connectpage-textarea"></textarea>
              <button className="contactpage-btn">Qayta aloqa</button>
              </div>
            </form>
          </div> 
          </div>
          <div className="contactpage-map">
       <iframe src="https://yandex.uz/map-widget/v1/?display-text=it%20time%20academy&ll=69.284695%2C41.337148&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTQzMTQxMTc3EkRPyrt6YmVraXN0b24sIFRvc2hrZW50LCBZdW51c29ib2QgeW_Ku25hbGlzaGksIEJvZG9tem9yIG1ldHJvIGJla2F0aSIKDcSRikIVPVklQg%2C%2C&sctx=ZAAAAAgBEAAaKAoSCcueBDbnUVFAERGPxMvTp0RAEhIJnZ53Y0Fh0z8RBaInZVJDwT8iBgABAgMEBSgKOABAo58GSAFiQXJlbGV2X3JhbmtpbmdfaGVhdnlfY2xpY2tfbWFwc19mb3JtdWxhPTAuNDA6bDNfY2xpY2tfZGM0OTAzMDhfZXhwYkJyZWxldl9yYW5raW5nX2hlYXZ5X2NsaWNrX3dvcmxkX2Zvcm11bGE9MC40MDpsM19jbGlja19kYzQ5MDMwOF9leHBiQXJlbGV2X3JhbmtpbmdfaGVhdnlfY2xpY2tfc2VycF9mb3JtdWxhPTAuNDA6bDNfY2xpY2tfZGM0OTAzMDhfZXhwagJ1ep0BzcxMPaABAKgBAL0BUd6NcsIBBsHzvt7EBYICD2l0IHRpbWUgYWNhZGVteYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=69.284695%2C41.337148&sspn=0.027902%2C0.012422&text=it%20time%20academy&z=15.44" ></iframe>
          </div>
          <div className="contactpage-footer">
            <p>© 2022 Discover Invest. Barcha huquqlar himoyalangan.</p>
            <div className="contactpage-controls">
            <a href="https://business.facebook.com/latest/home?asset_id=866538573482797&nav_ref=push" className="contactpage-sublink"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://instagram.com/discover_invest?igshid=ZDdkNTZiNTM=" className="contactpage-sublink"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://t.me/discovery_invest" class="messengers__link" className="contactpage-sublink"><i className="fa-brands fa-telegram"></i></a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ConnectPage;
