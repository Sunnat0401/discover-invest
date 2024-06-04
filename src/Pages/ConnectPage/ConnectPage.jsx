import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./ConnectPage.css";
import axios from "axios";
import { message } from "antd";
import { useTranslation } from "react-i18next";
const ConnectPage = () => {
   const {t} = useTranslation()
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
        <Navbar />
      <div className="connectpage-wrapper">
        <div className="container top">
          <h1 className="connectpage-title">{t("connectpage1")}</h1>
          <p className="connectpage-text">
          {t("connectpage2")}
          </p>
          <a href="#icons" className="connectpage-link">
            <i class="fa-solid fa-arrow-down-long"></i>
          </a>
        </div>
      </div>
      <div className="container">
          <div className="conntactpage-middle" id="icons">
          <div className="contactpage-left">
          <h2 className="about-title">
            <span className="about-line">{t("connectpage3")}</span> <br />
            <span className="pl"> {t("connectpage4")}</span>
          </h2>
          <p className="connectpage-text">
          {t("connectpage2")}
          </p>
          <div className="contact-cards">
            <div className="contact-card">
              <i class="fa-solid fa-location-dot contact-iconic"></i>
              <div className="contact-info">
                <h3 className="contact-subtitle">{t("contact2")}</h3>
                <p className="contact-text">
                {t("contact3")}
                </p>
              </div>
            </div>
            <div className="contact-card">
              <i class="fa-solid fa-phone contact-iconic"></i>
              <div className="contact-info">
                <h3 className="contact-subtitle">{t("contact4")}</h3>
                <p className="contact-text">
                +998 71 288 88 88
                </p>
              </div>
            </div>
            <div className="contact-card">
              <i class="fa-solid fa-clock contact-iconic"></i>
              <div className="contact-info">
                <h3 className="contact-subtitle">{t("contact5")} </h3>
                <p className="contact-text">
                {t("contact6")}
                </p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="contactpage-right">
            <form action="" className="contactpage-form"  onSubmit={SendMessages} id="connectForm">
              <div className="input-group">
              <label htmlFor="" className="form-label">{t("contact8")}</label>
              <input type="text " required placeholder="Ismingizni kiriting.." className="connectpage-input" id="name"/>
              </div>
              <div className="input-group">
              <label htmlFor="" className="form-label"> {t("contact7")} </label>
              <input type="text " required placeholder="Telefon raqamizngiz"  className="connectpage-input" id="numbers"/>
              </div>
              <div className="input-group">
              <label htmlFor="" className="form-label">{t("connectpage5")}</label>
              <select
                className="form__place general__euclid-r connectpage-input"
                id="contact"
                required
              >
                <option>{t("connectpage5")}</option>
                <option value="1">{t("connectpage6")}</option>
                <option value="2">{t("connectpage7")}</option>
                <option value="3">{t("connectpage8")}</option>
                <option value="4">{t("connectpage9")}</option>
                <option value="5">{t("connectpage10")}</option>
              </select>
              </div>
              <div className="input-group">
              <label htmlFor="" className="form-label">{t("connectpage11")}</label>
              <textarea name="" id="texts" placeholder="Savolingizni qoldiring..." cols="30" rows="6"  required  className="connectpage-textarea"></textarea>
              <button className="contactpage-btn">{t("connectpage12")}</button>
              </div>
            </form>
          </div> 
          </div>
          <div className="contactpage-map">
       <iframe src="https://yandex.uz/map-widget/v1/?display-text=it%20time%20academy&ll=69.284695%2C41.337148&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTQzMTQxMTc3EkRPyrt6YmVraXN0b24sIFRvc2hrZW50LCBZdW51c29ib2QgeW_Ku25hbGlzaGksIEJvZG9tem9yIG1ldHJvIGJla2F0aSIKDcSRikIVPVklQg%2C%2C&sctx=ZAAAAAgBEAAaKAoSCcueBDbnUVFAERGPxMvTp0RAEhIJnZ53Y0Fh0z8RBaInZVJDwT8iBgABAgMEBSgKOABAo58GSAFiQXJlbGV2X3JhbmtpbmdfaGVhdnlfY2xpY2tfbWFwc19mb3JtdWxhPTAuNDA6bDNfY2xpY2tfZGM0OTAzMDhfZXhwYkJyZWxldl9yYW5raW5nX2hlYXZ5X2NsaWNrX3dvcmxkX2Zvcm11bGE9MC40MDpsM19jbGlja19kYzQ5MDMwOF9leHBiQXJlbGV2X3JhbmtpbmdfaGVhdnlfY2xpY2tfc2VycF9mb3JtdWxhPTAuNDA6bDNfY2xpY2tfZGM0OTAzMDhfZXhwagJ1ep0BzcxMPaABAKgBAL0BUd6NcsIBBsHzvt7EBYICD2l0IHRpbWUgYWNhZGVteYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=69.284695%2C41.337148&sspn=0.027902%2C0.012422&text=it%20time%20academy&z=15.44" ></iframe>
          </div>
          <div className="contactpage-footer">
            <p>{t("footerBottom")}</p>
            <div className="contactpage-controls">
            <a href="https://business.facebook.com/latest/home?asset_id=866538573482797&nav_ref=push" className="contactpage-sublink"><i className="fa-brands fa-facebook-f control-icon"  ></i></a>
            <a href="https://instagram.com/discover_invest?igshid=ZDdkNTZiNTM=" className="contactpage-sublink"><i className="fa-brands fa-instagram control-icon"></i></a>
            <a href="https://t.me/discovery_invest" class="messengers__link" className="contactpage-sublink"><i className="fa-brands fa-telegram control-icon"></i></a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ConnectPage;
