const mongoose = require("mongoose")

const PopularMenuItems = new mongoose.Schema({
    popularItems:{
        type:String
    },
    restaurant_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"
    }

}, {timestamps:true})

const popularItems = mongoose.model("popularItems", PopularMenuItems)
module.exports = popularItems