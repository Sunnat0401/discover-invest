import React from 'react'
import HomePages from './Pages/HomePages/HomePages'
import About from './Pages/About/About'
import Advantage from './Components/Advantage/Advantage'
import OurTeam from './Components/OurTeam/OurTeam'

const App = () => {
  return (
    <div>
      <HomePages/>
      <About/>
      <OurTeam/>
    </div>
  )
}

export default App