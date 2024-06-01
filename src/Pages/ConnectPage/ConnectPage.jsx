import Navbar from '../../Components/Navbar/Navbar'
import './ConnectPage.css'
const ConnectPage = () => {
  return (
    <div className='connectpage'>
     <div className="connectpage-wrapper">
     <Navbar/>
        <div className="container">
            <h1 className="connectpage-title">
              ALOQA
            </h1>
            <p className="connectpage-text">
            Havolani to’ldirib, telefon raqamingizni qoldiring va biz yaqin vaqt ichida <br /> aloqaga chiqamiz
            </p>
            <a href="" className='connectpage-link'>
            <i class="fa-solid fa-arrow-down-long"></i>
            </a>
        </div>
     </div>
    </div>
  )
}

export default ConnectPage