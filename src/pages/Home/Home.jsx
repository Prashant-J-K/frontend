import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Navbar/Header/Header'
import Exploremenu from '../../components/exploremenu/exploremenu'
import Fooddisplay from '../../components/fooddisplay/Fooddisplay'
import Appdownload from '../../components/Appdownload/Appdownload'
const Home = () => {
    const[category,setcategory]=useState("All")
  return (
    <div>
        <Header/>
        <Exploremenu category={category} setcategory={setcategory}/>
       <Fooddisplay category={category}/>
       <Appdownload/>
    </div>
  )
}

export default Home