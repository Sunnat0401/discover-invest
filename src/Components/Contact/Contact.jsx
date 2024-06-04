import axios from 'axios'
import { inputleft } from '../../assets'
import './Contact.css'
import { useState } from 'react'
import { message } from 'antd'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
const Contact = () => {
  const {t} = useTranslation()
    const [loading , setLoading] = useState(false)
    const SendMessage = ( event) =>{
        setLoading(true)
        event.preventDefault();
        const token = "7004900393:AAGYHAnQhdDlkbJxo4xs-vRbpISIgoTxWR8"
        const chat_id = 6856618212  ;
        const url = ` https://api.telegram.org/bot${token}/sendMessage`
        const name =document.getElementById("name").value
        const nambers =document.getElementById("numbers").value
        
        const sendMessageContent = `Ismi: ${name} \n Familiyasi: ${nambers}`
        axios({
          url : url ,
          method: 'POST',
          data: {
            "chat_id" : chat_id,
            "text":sendMessageContent
          }
        }).then((res) => {
          message.success("Muvaffaqiyatli")
          document.getElementById("myForm").reset()
        }).catch((err) => {
          message.error("yuborishda xatolik", err)
        }).finally(()=>setLoading(false))
      }
  return (
    <div className='contact'>
        <div className="container">
           <div className="contact-wrapper">
           <div className="contact-left">
            <h2 className="contact-title">
          <span className="contact-line">{t("contact1")}</span> <br />
        </h2>
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
         <div className="contact-icons">
            <a href="https://business.facebook.com/latest/home?asset_id=866538573482797&nav_ref=push" className="navbar-sublink"> <i class="fa-brands fa-facebook-f icon-sign"></i></a>
            <a href="https://instagram.com/discover_invest?igshid=ZDdkNTZiNTM=" className="navbar-sublink">  <i class="fa-brands fa-instagram icon-sign"></i></a>
            <a href="https://t.me/discovery_invest"> <i class="fa-brands fa-telegram icon-sign"></i></a>
        
         </div>
         <form className='contact-form'  onSubmit={SendMessage} id="myForm">
           <div className="contact-inputs">
           <div className="input-group">
        <label className='contact-label' htmlFor="">{t("contact7")}</label>
        <input  type="tel" required  className="contact-input" placeholder="+ 998 " id='numbers' />
    </div>
    <div className="input-group">
        <label className='contact-label' htmlFor="">{t("contact8")}</label>
        <input type="text" required className="contact-input" placeholder='Ismingiz nima ?'  id='name'/>
    </div>
           </div>
            <button className='contact-btn' type='submit'>{t("contact9")}</button>
         </form>
            </div>
            <div className="contact-right">
           <iframe src="https://yandex.uz/map-widget/v1/?ll=69.284695%2C41.337148&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTQzMTQxMTc3EkRPyrt6YmVraXN0b24sIFRvc2hrZW50LCBZdW51c29ib2QgeW_Ku25hbGlzaGksIEJvZG9tem9yIG1ldHJvIGJla2F0aSIKDcSRikIVPVklQg%2C%2C&z=15.44 "></iframe>
            </div>
           </div>
           <p className="contact-bottom">{t("footerBottom")}</p>
        </div>
    </div>
  )
}

export default Contact