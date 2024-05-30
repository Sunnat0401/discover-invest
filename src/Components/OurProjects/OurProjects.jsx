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
            <div className="ourproject-card background1">
             <div className="ourproject-info">
             <h3 className='ourproject-headline'>Gardens Residence</h3>
              <p className="ourproject-text">
              Shaharning yuragida barpo etilgan turar joy mavzesi.
              </p>
             </div>
            </div>
            <div className="ourproject-card"></div>
        </div>
        </div>
    </div>
  )
}

export default OurProjects