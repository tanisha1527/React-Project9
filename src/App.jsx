import React from 'react'
import Mainpage from './component/MainPage/Mainpage'
import { Route,Routes } from 'react-router-dom'
import MealInfo from './component/MealInfo/MealInfo'


const App = () => {
  return (
    
      <Routes>
          <Route path='/' element={<Mainpage/>} />
          <Route path='/:mealid' element={<MealInfo/>}/>
      </Routes>
    
  )
}

export default App
