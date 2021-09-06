const db = require("../models/index");
const FoodTag = db.foodtag;

function foodtagInitial() {
    FoodTag.create({
      tagName: "อาหารไทย"
    });
    FoodTag.create({
      tagName: "อาหารหวาน"
    });
    FoodTag.create({
      tagName: "อาหารคาว"
    });
    FoodTag.create({
      tagName: "อาหารทะเล"
    });
    FoodTag.create({
      tagName: "อาหารญี่ปุ่น"
    });
    FoodTag.create({
      tagName: "เนื้อหมู"
    });
    FoodTag.create({
      tagName: "เนื้อวัว"
    });
    FoodTag.create({
      tagName: "เนื้อไก่"
    });
    FoodTag.create({
      tagName: "อาหารเจ"
    });
    FoodTag.create({
      tagName: "อาหารคลีน"
    });
  }

  module.exports = {foodtagInitial};