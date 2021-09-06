const db = require("../models");
const Recipe = db.recipe;
const RecipeFoodTag = db.recipe_foodtag;
const Ingredient = db.recipes_ingredient;
const { Op } = require("sequelize");

const RecipeSearching = (word) => {
  Recipe.findAll({
    where: {
      [Op.and]: {
        recipeName: {
          [Op.like]: "%" + word + "%",
        },
        shareOption: 1,
      },
    },
  }).then((recipe) => {
    res.send(recipe);
  });
};
const FoodTagSearching = (word) => {
  RecipeFoodTag.findAll({
    where: {
      [Op.and]: {
        recipeName: {
          [Op.like]: "%" + req.body.recipeName + "%",
        },
        shareOption: 1,
      },
    },
    include: [
      {
        model: Recipe,
        where: {
          shareOption: 1,
        },
      },
    ],
  }).then(() => {
    res.send({ message: "Searching by FoodTag" });
  });
};

const checkRecipeShareOption = (recipeID) => {
  Recipe.findOne({
    where: {
      recipeID: recipeID,
    },
  }).then((recipe) => {
    if (recipe.shareOption == 1) {
      return res.status(200).send(recipe);
    }
  });
};

module.exports = { RecipeSearching, FoodTagSearching, checkRecipeShareOption };
