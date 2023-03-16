const restaurant = require("../controllers/restaurant.controller")

module.exports = (app) =>{
    app.post("/api/restaurant", restaurant.createRestaurantForm)
    app.get("/api/allRestaurants", restaurant.getAllRestaurants)
}