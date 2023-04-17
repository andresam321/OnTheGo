import React, {useState,useEffect} from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./User.css"
import pic from "../images/chicken-quesadilla.jpeg"
import { useNavigate, useParams } from 'react-router-dom'


const ViewRestaurant = () => {

    const [restaurant, setRestaurant] = useState("")
    const {id} = useParams();
    
    useEffect(()=>{
    axios.get(`http://localhost:8000/api/menuItems/${id}`,{})
    .then((res)=>{
        console.log(res.data)
        setRestaurant(res.data)
    })
    })
    


  return (
    <div>

        <div className=''>
            <h1>Dinner Classics</h1>
                <div className=''>
                    
                </div>
        </div>
        <div className=''>
          {restaurant.menuItems?.map((menu, index)=>{
            return (
            <div key={"menu_" + index} className=''>
              <div className=''>
                <label>Menu Items</label>
                <p>{menu.menuItem}</p>
              <div className=''>
              <p>{menu.boxArt}</p>
                <p>Meat Option: {menu.meat}</p>
                <h5>Ingredients {menu.ingredients}</h5>
                </div>
              </div>
            </div>
          )})}
        </div>
    </div>
  )
}

export default ViewRestaurant