import React, {useState,useEffect} from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'


const ViewRestaurant = () => {

    const [restuarant, setRestaurant] = useState("")
    const {id} = useParams();
    
    useEffect(()=>{
    axios.get(`http://localhost:8000/api/restaurantById/${id}`,{})
    .then((res)=>{
        console.log(res.data)
        setRestaurant(res.data)
    })
    })
    




  return (
    <div>ViewRestaurant</div>
  )
}

export default ViewRestaurant