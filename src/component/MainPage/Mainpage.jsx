import React from 'react'
import './MainPage.css'

const Mainpage = () => {
  return (
    <>
       <div className="container">
           <div className="search-bar">
              <input type="text" placeholder='Enter Dishes' />
              <button>Search</button>
           </div>
       </div>
    </>
  )
}

export default Mainpage
