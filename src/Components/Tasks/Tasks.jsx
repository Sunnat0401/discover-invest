import { useTranslation } from 'react-i18next'
import { AboutPage2, AboutPage3, AboutPic } from '../../assets'
import './Tasks.css'
const Tasks = () => {
    const {t} = useTranslation()
  return ( 
    <div className='tasks'>
        <div className="container">
            <div className="tasks-cards">
                <div className="tasks-card">
                    <span className="tasks-headline">1</span>
                    <div className="tasks-information">
                        <h1 className="tasks-title">
                          {t("tasks1")}
                        </h1>
                        <p className="tasks-text">
                        {t("tasks2")}
                        </p>
                    </div>
                    <div className="tasks-right">
                        <img src={AboutPic} alt="" className="tasks-img" />
                    </div> 
                </div>
                <div className="tasks-card">
                    <span className="tasks-headline">2</span>
                    <div className="tasks-information">
                        <h1 className="tasks-title">
                        {t("tasks3")}
                        </h1>
                        <p className="tasks-text">
                        {t("tasks4")}
                        </p>
                    </div>
                    <div className="tasks-right">
                        <img src={AboutPage2} alt="" className="tasks-img" />
                    </div> 
                </div>
                <div className="tasks-card">
                    <span className="tasks-headline">3</span>
                    <div className="tasks-information">
                        <h1 className="tasks-title">
                        {t("tasks5")}
                        </h1>
                        <p className="tasks-text">
                        {t("tasks6")}
                        </p>
                    </div>
                    <div className="tasks-right">
                        <img src={AboutPage3} alt="" className="tasks-img" />
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tasks