import { Link } from 'react-router-dom'
import './OurProjects.css'
const OurProjects = () => {
  return (
    <div className='ourproject'>
        <div className="container">
        <h2 className="ourproject-title">
          <span className="ourproject-line">Bizning</span> <br />
          <span className='pl'>   Loyihalar</span>
        </h2>
        <div className="ourproject-cards">
            <div className="ourproject-card">
            <div class="overlay"></div>
             <div className="ourproject-info">
             <h3 className='ourproject-headline'>Magic City</h3>
              <p className="ourproject-text">
              Shaharning yuragida barpo etilgan turar joy mavzesi.
              </p>
             </div>
            </div>
            <div className="ourproject-card  background1">
            <div className="ourproject-info">
             <h3 className='ourproject-headline'>Boulevard</h3>
              <p className="ourproject-text">
              Aholi qulayligini ta’minlash maqsadida bunyod qilingan ko’p vazifali turar joy mavzesi
              </p>
             </div>
            </div>
        </div>
        <div className="ourproject-cards ">
            <div className="ourproject-card  background2">
            <div class="overlay"></div>
             <div className="ourproject-info">
             <h3 className='ourproject-headline'>Gardens Residence</h3>
              <p className="ourproject-text">
              Shaharning yuragida barpo etilgan turar joy mavzesi.
              </p>
             </div>
            </div>
            <div className="ourproject-card  background3">
            <div className="ourproject-info">
             <h3 className='ourproject-headline'>Fonon</h3>
              <p className="ourproject-text">
              Shaharning yuragida barpo etilgan turar joy mavzesi.
              </p>
             </div>
            </div>
        </div>
        <div className="ourproject-cards">
            <div className="ourproject-card  background4">
            <div class="overlay"></div>
             <div className="ourproject-info">
             <h3 className='ourproject-headline'>Invento</h3>
              <p className="ourproject-text">
              Tashkent City biznes markazida joylashgan xalqaro maktab va bolalar bog’chasi.
              </p>
             </div>
            </div>
            <div className="ourproject-card  background5">
            <div className="ourproject-info">
             <h3 className='ourproject-headline'>Prezident maktabi</h3>
              <p className="ourproject-text">
              Bu xalqaro standartlarga javob beradigan bilim beruvchi ta’lim maskanidir
              </p>
             </div>
            </div>
        </div>
        <div className="ourproject-buttons">
         <Link to='projects' className="ourproject-button"></Link>
         <Link to='projects' className="ourproject-button active ">Barcha loyihalar</Link>
        </div>
        </div>
    </div>
  )
}

export default OurProjects