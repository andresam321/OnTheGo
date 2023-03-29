import React, {useState, useEffect} from 'react'
import axios from "axios"
import {NavLink,Link} from "react-router-dom"
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
            <div className=''>
                <h1>On The Go</h1>
            </div>
            <div className='display-flex3'>
                <div className=''>
                    <Link to =""><img src="" alt=""></img>American cuisine</Link>
                </div>
                <div className=''>
                    <Link to =""><img src="" alt=""></img>Mexican cuisine</Link>
                </div>
                <div className=''>
                    <Link to =""><img src="" alt=""></img>Chinese cuisine</Link>
                </div>
                <div className=''>
                    <Link to =""><img src="" alt=""></img>Soul Food</Link>
                </div>
            </div>
            <div className=''>
                <p className='toTheLEft'>Most Popular Near You</p>
            </div>
            {
            frontUserViews.map((restaurant,index) =>{
            return (
                <div className='display-block'>
                    <div className='restaurantBox'>
                    <p>{restaurant.nameOfRestaurant}</p>
                    <img></img>
                    <p>{restaurant.city}</p>
                </div>
            <div className=''>
                <NavLink to = {`/viewRestaurant/${restaurant._id}`}>View</NavLink>
            </div>
            </div>
            )})
            }
            
        </div>
    </div>
  )
}

export default UserLandingPage