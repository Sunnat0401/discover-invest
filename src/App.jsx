import React from 'react'
import HomePages from './Pages/HomePages/HomePages'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './Pages/AboutPage/AboutPage'
import Projects from './Pages/Projects/Projects'
import Career from './Pages/Career/Career'
import NewsPage from './Pages/NewsPage/NewsPage'
import ConnectPage from './Pages/ConnectPage/ConnectPage'

const App = () => {
  return (
    <div>
  <Routes>
<Route path='/' element={ <HomePages/>}/>
<Route path='/about' element={ <AboutPage/>}/>
<Route path='/projects' element={<Projects/>}/>
<Route path='/career' element={<Career/>}/>
<Route path='/news' element={<NewsPage/>}/>
<Route path='/connect' element={<ConnectPage/>}/>

  </Routes>
    </div>
  )
}

export default App