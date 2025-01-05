import React, { useState } from 'react'
import './MainPage.css'
import MealCards from '../MealCards/MealCards';

const Mainpage = () => {
      
      const [data,setData] = useState();
      const [search,setSearch] = useState();
      
      const handleInput = (e) =>{
           setSearch(e.target.value)
      }

       const myFood = async () => {

       const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
       const jsonData = await get.json()
      // console.log(jsonData.meals);
       setData(jsonData.meals)
  }

 // console.log(data);

  return (
    <>
       <div className="container">
           <div className="search-bar">
              <input type="text" placeholder='Enter Dishes' onChange={handleInput} />
              <button onClick={myFood}>Search</button>
           </div>

           <div>
              <MealCards detail={data}/>
           </div>
       </div>
    </>
  )
}

export default Mainpage
