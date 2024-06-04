import { useTranslation } from 'react-i18next'
import Contact from '../../Components/Contact/Contact'
import Navbar from '../../Components/Navbar/Navbar'
import News from '../../Components/News/News'
import './NewsPage.css'

const NewsPage = () => {
  const {t} = useTranslation()
  return (
    <div className='newspage'>
        <Navbar/>
        <div className="container">
        <div className="newspage-card">
          <h1 className='newspage-title'>
        {t("newspage1")}
          </h1>
          <div className="newspage-text">
          {t("newspage2")}
          </div>
        </div>
        <News/>
        <Contact/>
        </div>
    </div>
  )
}

export default NewsPage