const db = require("../models/index");
const Recipe = db.recipe;
const User = db.user;
const Ingredient = db.recipes_ingredient;

const searchingServices = require("../services/search.service");

exports.searchingByRecipeName = (req, res) => {
  Recipe.findOne({
    where: {
        [Op.or]:{
            recipeName:{ 
                [Op.like]: '%หมู'
            } 
        }
      
    },
  })
    .then((recipe) => {
        res.send("Get in");
    //   searchingServices.checkRecipeShareOption(recipe.recipeID);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
