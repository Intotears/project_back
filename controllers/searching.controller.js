const db = require("../models/index");
const Recipe = db.recipe;
const User = db.user;
const Ingredient = db.recipes_ingredient;

const { Op } = require("sequelize");

const searchingServices = require("../services/search.service");

exports.searchingRecipe = (req, res) => {
  const searching = req.body.word 
  Recipe.findAll({
    where: {
      recipeName: searching
    }        
  })
  .then((recipe) => {
    res.status(200).send(recipe);
  })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
}; 
