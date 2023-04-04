const restaurant = require("../controllers/restaurant.controller")

module.exports = (app) =>{
    app.post("/api/restaurant", restaurant.createForm)
    app.get("/api/allRestaurants", restaurant.getAllRestaurants)
    app.get("/api/restaurantById/:id", restaurant.restaurantById)
    app.get("/api/menuItems/:id", restaurant.getMenuFromRestaurant)
}