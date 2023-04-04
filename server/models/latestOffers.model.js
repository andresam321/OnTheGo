const mongoose = require("mongoose")

const LatestOffers = new mongoose.Schema({
    offers:{
        type:String,
    },
    restaurant_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"
    }

}, {timestamps:true})

const latestOffers = mongoose.model("offers", LatestOffers)

module.exports = latestOffers