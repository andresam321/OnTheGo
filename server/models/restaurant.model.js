const mongoose = require("mongoose")

const Restaurant = new mongoose.Schema({
    country:{
        type:String,
        enum:[true,"USA"]
    },
    state:{
        type:String,
        enum:[true,"CA"]
    },
    city:{
        type:String,
        enum:[true,"San Leandro","Hayward","San Lorenzo","Oakland","Castro Valley"]
    },
    hoursOfOperation:{
        type:String,
    },
    busiestHours:{
        type:String,
    },
    howManyShifts:{
        type:String,
    },
    staffPerShift:{
        type:String,
    },
    genreOfFood:{
        type:String,
        enum:[true,"American cuisine","Mexican cuisine","Chinese cuisine",
    "Soul Food","Comming Soon"]
    },
    nameOfRestaurant:{
        type:String,
        required:[true,"Name Required"]
    },
    boxArt:{
        type:String
    },
    menuItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"menuItems"
    }],
    popularMenuItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"popularMenuItems"
    }],
    latestOffers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"latestOffers"
    }],

}, {timestamps:true})

const restaurant = mongoose.model("Restaurant", Restaurant)
module.exports = restaurant