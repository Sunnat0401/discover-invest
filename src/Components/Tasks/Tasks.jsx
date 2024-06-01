import { AboutPage2, AboutPage3, AboutPic } from '../../assets'
import './Tasks.css'
const Tasks = () => {
  return (
    <div className='tasks'>
        <div className="container">
            <div className="tasks-cards">
                <div className="tasks-card">
                    <span className="tasks-headline">1</span>
                    <div className="tasks-information">
                        <h1 className="tasks-title">
                            Bizning vazifalarimiz
                        </h1>
                        <p className="tasks-text">
                        Kompaniyamiz O‘zbekistondagi qurilishda ilg‘or texnologiyalarni joriy qilib, zamonaviy dizayn yechimlarini yaratishni eng oliy maqsad deb biladi. Kutilganidek, birinchi darajali mutaxassislarga tayanib, biz yillar davomida mijozlarimiz talablarini e’tiborga olgan holda arzon turar joy va sanoat binolarini barpo etamiz.
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
                            Bizning maqsadimiz
                        </h1>
                        <p className="tasks-text">
                        Markaziy Osiyodagi quyidagi afzalliklarni taqdim etadigan, sermahsul va puxta rejalashtirilgan loyihalarni o’z ichiga qamrab oladi: Jamiyat - mehnatga yuqori talablarni qo'yish orqali insonlarning turmush tarzini oshirish. Mijozlar - birgalikdagi faoliyatdan bahramand bo'lish, ochiq va uzoq muddatli munosabatlarni o'rnatish. Xodimlar - shaxs sifatida doimiy, shuningdek professional yuksalish
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
                            Bizning vazifalarimiz
                        </h1>
                        <p className="tasks-text">
                        Kompaniyamiz O‘zbekistondagi qurilishda ilg‘or texnologiyalarni joriy qilib, zamonaviy dizayn yechimlarini yaratishni eng oliy maqsad deb biladi. Kutilganidek, birinchi darajali mutaxassislarga tayanib, biz yillar davomida mijozlarimiz talablarini e’tiborga olgan holda arzon turar joy va sanoat binolarini barpo etamiz.
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