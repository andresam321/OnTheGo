import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./User.css"



const UserLandingPage = () => {

const[frontUserViews, setFrontUserViews]= useState([])

useEffect(()=>{axios.get(`http://localhost:8000/api/allRestaurants`)
    .then((res)=>{
        setFrontUserViews(res.data)
    })
    .catch((err)=> 
    console.log(err)
    )

})


  return (
    <div>
        <div className=''>
            {
            frontUserViews.map((restaurant,index) =>{
            return (
                <div className=''>
                    <h1>{restaurant.state}</h1>
                    <h1>{restaurant.city}</h1>
                </div>
            )})
            }
        </div>
    </div>
  )
}

export default UserLandingPage