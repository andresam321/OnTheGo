const Menu = require("../models/menuItems.model")
const Restaurant = require("../models/restaurant.model")

const createMenuItem = (req,res) => {
console.log(req.body)
req.body.restaurant_id = req.params.restaurant_id
Menu.create(req.body)
    .then((newMenuItem)=>{
        console.log("in create")
        console.log(newMenuItem)
        Restaurant.findByIdAndUpdate(newMenuItem.restaurant_id,
            {
                $push:{menuItems: newMenuItem._id}
            },
            {new:true, useFindAndModify:false})
            .populate("menuItems", "menuItem ingredients meat boxArt")
            .then((updateRestaurant)=>{
                console.log(updateRestaurant)
                res.json(updateRestaurant)
            })
            .catch((err)=>{
                console.log("error in create")
                res.status(400).json(err)
            })
    })
    .catch((err)=>{
        console.log("error in updating")
        res.status(400).json(err)
    })

}

const createIngredient = (req,res) => {
    console.log(req.body)
    Menu.create(req.body)
    req.body.restaurant_id = req.params.restaurant_id
    Restaurant.findByIdAndUpdate(r)
}


module.exports = {
    createMenuItem,



}