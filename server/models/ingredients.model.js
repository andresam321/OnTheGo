const mongoose = require("mongoose")

const Ingredients = new mongoose.Schema({
    ingredients:{
        type:String
    },
    menuItems_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"menu"
    }
}, {timestamps:true})

const ingredients = mongoose.model("ingredients", Ingredients)
module.exports = ingredients