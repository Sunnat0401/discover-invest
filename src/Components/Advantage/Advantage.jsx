import { useTranslation } from 'react-i18next'
import './Advantage.css'
const Advantage = () => {
    const {t} = useTranslation()
  return (
    <div className='advantage'>
          <div className="container">
          <h2 className="advantage-title">
                <span className="advantage-line">
 {t("advantage1")} 
                </span> <br />
                <span className='pl'>
                {t("advantage2")} 
                </span>
            </h2>
            <div className="advantage-cards">
                <div className="advantage-card">
                <i class="fa-solid fa-users advantage-icon"></i>
                    <h3 className='advantage-headline'>
                    {t("advantage3")} 
                    </h3>
                    <p className="advantage-text">
                    {t("advantage4")} 
                    </p>
                </div>
                <div className="advantage-card">
                <i class="fa-regular fa-message advantage-icon"></i>
                    <h3 className='advantage-headline'>
                    {t("advantage5")} 
                    </h3>
                    <p className="advantage-text">
                    {t("advantage6")} 


                    </p>
                </div>
                <div className="advantage-card">
                <i class="fa-solid fa-location-dot advantage-icon"></i>
                    <h3 className='advantage-headline'>
                    {t("advantage7")} 
                    </h3>
                    <p className="advantage-text">
                    {t("advantage8")} 
                    </p>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Advantage