import React from 'react'
import './MealCards.css'
import { NavLink } from 'react-router-dom'

const MealCards = ({detail}) => {
  
  return (
    <div className='meals'>
         {!detail ? "" : detail.map((currentItem)=>{
            return (
              <div className='mealItem'>
                  <img src={currentItem.strMealThumb}/>
                  <p>{currentItem.strMeal}</p>
                  <NavLink to={`/${currentItem.idMeal}`}><button>Recipe</button></NavLink>
              </div>
            )
         })
          
         }
    </div>
  )
}

export default MealCards
