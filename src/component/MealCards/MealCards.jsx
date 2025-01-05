import React from 'react'
import './MealCards.css'

const MealCards = ({detail}) => {
  
  return (
    <div className='meals'>
         {!detail ? "" : detail.map((currentItem)=>{
            return (
              <div className='mealItem'>
                  <img src={currentItem.strMealThumb}/>
                  <p>{currentItem.strMeal}</p>
                  <button>Recipe</button>
              </div>
            )
         })
          
         }
    </div>
  )
}

export default MealCards
