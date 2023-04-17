const MenuItems = require("../controllers/menuItems.controller");
const Menu = require("../models/menuItems.model");
const multer = require('multer');
const path = require("path");
const DIR = './images/';
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"images")
    },
    filename: function(req,file,cb) {
        cb(null, uuidv4()+ '-' + Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = (req,file,cb) =>{
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype),
    encType='multipart/form-data'
    
    ){
        cb(null,true);
    } else{
        cb(null,false)
    }
}
let upload = multer({storage, fileFilter})

module.exports = (app) => {
// app.post("/api/newMenuItem/:restaurant_id", MenuItems.createMenuItem)
app.post("/api/newMenuItem/:restaurant_id",upload.single("boxArt"),MenuItems.createMenuItem,(req,res,next)=>{
    const boxArt = req.file.filename
    const menuItem = req.body.menuItem
    const ingredients = req.body.ingredients
    const meat = req.body.meat
    const newImageData ={
        menuItem,
        ingredients,
        meat,
        boxArt
    }
    console.log(boxArt)
    const newImage = new Menu(newImageData)
    newImage.save()
    console.log(newImage)
    .then(()=>{res.json("image added")})
    .catch((err)=>res.status(400).send(err+"Error"))
})
}