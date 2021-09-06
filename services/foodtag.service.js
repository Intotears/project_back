const db = require("../models");
const FoodTag = db.foodtag;


  const foodtagInit = (req, res) =>{
    FoodTag.create({
        tagName: "อาหารทะเล"
      });
  }