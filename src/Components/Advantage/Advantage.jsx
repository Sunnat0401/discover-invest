import './Advantage.css'
const Advantage = () => {
  return (
    <div className='advantage'>
          <div className="container">
          <h2 className="advantage-title">
                <span className="advantage-line">
 Bizning 
                </span> <br />
                <span className='pl'>
                     afzalliklarimiz
                </span>
            </h2>
            <div className="advantage-cards">
                <div className="advantage-card">
                <i class="fa-solid fa-users advantage-icon"></i>
                    <h3 className='advantage-headline'>
                        Bizning jamoa
                    </h3>
                    <p className="advantage-text">
                    Kompaniya tajribali xodimlarni tanlov asosida o'z safiga qabul qiladi.
                    </p>
                </div>
                <div className="advantage-card">
                <i class="fa-regular fa-message advantage-icon"></i>
                    <h3 className='advantage-headline'>
                    Mijozlarning ijobiy yondashuvi
                    </h3>
                    <p className="advantage-text">
                    Veb-saytimiz orqali biz amalga oshirgan ulkan ishlarni ko'rib, mijozlarning ishonchini zabt qilganimizga amin bo'lasiz.


                    </p>
                </div>
                <div className="advantage-card">
                <i class="fa-solid fa-location-dot advantage-icon"></i>
                    <h3 className='advantage-headline'>
                    Barcha ishlar kafolat ostida
                    </h3>
                    <p className="advantage-text">
                    Biz amalga oshirayotgan mashaqqatli ishimizga puxta yondashamiz va kompaniyamizga bo’lgan ishonchingizni qadrlaymiz.
                    </p>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Advantage