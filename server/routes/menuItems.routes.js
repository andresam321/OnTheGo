const MenuItems = require("../controllers/menuItems.controller")

module.exports = (app) => {
app.post("/api/newMenuItem/:restaurant_id", MenuItems.createMenuItem)
}