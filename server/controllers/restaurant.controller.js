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
 
 const createForm = (req,res)=>{
  // const verifyJwt= jwt.verify(req.cookies.usertoken,process.env.SECRET_KEY,{complete:true})  
  restaurant.create(req.body)
  .then((create)=>{res.status(201).json(create)})
  .catch((err)=>{console.log( err)
  res.status(400).json(err)
})
}

const getMenuFromRestaurant = (req,res) =>{
  restaurant.findById({_id:req.params.id})
  .populate("menuItems", "menuItem ingredients meat boxArt")
  .then((menuItems)=>{res.json(menuItems)})
  .catch((err)=>{console.log(err,"error in getting menu")
  res.status(400).json({message:"error"})
})
}

 const getAllRestaurants = (req,res) =>{
  restaurant.find({})
  .populate("menuItems", "menuItem ingredients meat boxArt")
  .then((allRestaurants)=>{res.json(allRestaurants)})
  .catch((err)=>{console.log("err",err)
  res.status(400).json({message:"Something is wrong"})
  })
 }
 const restaurantById = (req,res) => {
  restaurant.findById({_id:req.params.id})
  .then((find)=>{res.json(find)})
  .catch((err)=>{console.log("error couldnt get the restaurant by id")
  res.status(400).json({err})
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
   getMenuFromRestaurant,
   createForm,
   getAllRestaurants,
   getAll,
   restaurantById,
 }