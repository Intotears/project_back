const db = require("../models");
const Recipe = db.recipe;
const FoodTag = db.foodtag;
const Ingredient = db.recipes_ingredient;

const RecipeSearching = (word) => {
  Recipe.findAll({
    where: {
      recipeName: {
        [Op.or]: {
          [Op.like]: word,
          [Op.notLike]: word,
          [Op.startsWith]: word,
          [Op.endsWith]: word,
          [Op.substring]: word,
        },
      },
    },
  })
    .then(() => {
      res.send({ message: "Searching for recipe" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
const FoodTagSearching = (word) => {
  FoodTag.findAll({
    where: {
      recipeName: {
        [Op.or]: {
          [Op.like]: word,
          [Op.notLike]: word,
          [Op.startsWith]: word,
          [Op.endsWith]: word,
          [Op.substring]: word,
        },
      },
    },
  })
    .then(() => {
      res.send({ message: "Searching by FoodTag" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const checkRecipeShareOption = (recipeID) => {
  Recipe.findOne({
    where: {
      recipeID: recipeID,
    },
  })
    .then((recipe) => {
      if (recipe.shareOption == 1) {
        return res.status(200).send(recipe);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports = { RecipeSearching, FoodTagSearching, checkRecipeShareOption };
