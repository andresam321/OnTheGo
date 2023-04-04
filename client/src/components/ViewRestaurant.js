import React, {useState,useEffect} from 'react'
import axios from "axios"
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
            <h1>Latest Offers</h1>
                <div className=''>
                    
                </div>
        </div>
        <div className=''>
          {restaurant.menuItems?.map((menu, index)=>{
            return (
            <div key={"menu_" + index} className=''>
              <div className=''>
                <label>Menu Items</label>
                <p>{menu.menuItems}</p>
              </div>
            </div>
          )})}
        </div>
    </div>
  )
}

export default ViewRestaurant