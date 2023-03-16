const restaurant = require("../models/restaurant.model")

const createRestaurantForm = async (req,res) =>{
    try {
       const create = await restaurant.create(req.body)
       if(!create){
         return res.status(400).send("cant create")
       }
    }catch(err){
        console.log(err)
        return
    }
 }
 
 const createForm = (req,res) =>{
   restaurant.create(req.body)
   .then((create)=>{res.status(201).json(create)})
   .catch((err)=>{console.log(err)
   res.status(400).json()
    })
 }

 const getAllRestaurants = (req,res) =>{
  restaurant.find({})
  .then((allRestaurants)=>{res.json(allRestaurants)})
  .catch((err)=>{console.log("err",err)
  res.status(400).json({message:"Something is wrong"})
  })
 }

 const getAll = async (req,res) =>{
    try{
      const all = await restaurant.find({})
      if(all){
        return res.status(400).send("cant get all")
      }
    }catch(err){
      console.log(err)
      
    }
 }

 module.exports = {
   createRestaurantForm,
   createForm,
   getAllRestaurants,
   getAll
 }