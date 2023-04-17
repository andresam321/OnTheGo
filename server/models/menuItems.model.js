const mongoose = require("mongoose")


const MenuItems = new mongoose.Schema({
    menuItem:{
        type:String,
    },
    ingredients:{
        type:String,
    },
    meat:{
        type:String,

    },
    boxArt:{
        data: Buffer,
        contentType: String
    },
    restaurant_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"
    },

}, {timestamps:true})

const menuitems = mongoose.model("menuItems", MenuItems) 
module.exports = menuitems