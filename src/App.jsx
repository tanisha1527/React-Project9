import React from 'react'
import Mainpage from './component/MainPage/Mainpage'
import { Route,Routes } from 'react-router-dom'


const App = () => {
  return (
    
      <Routes>
          <Route path='/' element={<Mainpage/>} />
      </Routes>
    
  )
}

export default App
