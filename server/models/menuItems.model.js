const mongoose = require("mongoose")

const MenuItems = new mongoose.Schema({
    menuItems:{
        type:String,
    },
    ingredients:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ingredients"
    }],
    restaurant_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"
    }

}, {timestamps:true})

const menuitems = mongoose.model("menuItems", MenuItems) 
module.exports = menuitems