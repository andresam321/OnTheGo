const restaurant = require("../models/restaurant.model")

module.exports = {
 createRestaurantForm: async (req,res) =>{
    try {
       const create = restaurant.create(req.body)
    }catch(err){
        console.log(err)
    }
 }   
}