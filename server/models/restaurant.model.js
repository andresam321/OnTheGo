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
    menuItem00:{
        type:String,
        ingredients:[{}]
    },
    menuItem01:{
        type:String,
        ingredients:[{}]
    },
    menuItem02:{
        type:String,
        ingredients:[{}]
    },
    menuItem03:{
        type:String,
        ingredients:[{}]
    },
    menuItem04:{
        type:String,
        ingredients:[{}]
    },
    menuItem05:{
        type:String,
        ingredients:[{}]
    },
    menuItem06:{
        type:String,
        ingredients:[{}]
    },
    menuItem07:{
        type:String,
        ingredients:[{}]
    },
    menuItem08:{
        type:String,
        ingredients:[{}]
    },
    menuItem09:{
        type:String,
        ingredients:[{}]
    },
    menuItem10:{
        type:String,
        ingredients:[{}]
    },


}, {timestamps:true})

const restaurant = mongoose.model("Restaurant", Restaurant)
module.exports = restaurant