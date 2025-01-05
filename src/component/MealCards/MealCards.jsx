import React from 'react'
import './MealCards.css'

const MealCards = ({detail}) => {
  
  return (
    <div className='meals'>
         {!detail ? "" : detail.map((currentItem)=>{
            return (
              <div>
                  <img src=''/>
                  <p></p>
                  <button></button>
              </div>
            )
         })
          
         }
    </div>
  )
}

export default MealCards
