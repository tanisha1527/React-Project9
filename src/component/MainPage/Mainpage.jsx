import React, { useState } from 'react'
import './MainPage.css'
import MealCards from '../MealCards/MealCards';

const Mainpage = () => {
      
      const [data,setData] = useState();
      const [search,setSearch] = useState("");
      const [msg,setMsg] = useState("");
      
      const handleInput = (e) =>{
           setSearch(e.target.value)
      }

       const myFood = async () => {
         if (search == ""){
            setMsg("Please Enter Something...");
         }
         else{
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
       const jsonData = await get.json();
       setData(jsonData.meals);
       setMsg("");
      
      }

  }

  return (
    <>
       <h1 className='heading'>FOOD RECIPE APP</h1>
       <div className="container">
           <div className="search-bar">
              <input type="text" placeholder='Enter Dishes' onChange={handleInput} />
              <button onClick={myFood}>Search</button>
           </div>
            <h4 className='msg'>{msg}</h4>
           <div>
              <MealCards detail={data}/>
           </div>
       </div>
    </>
  )
}

export default Mainpage
