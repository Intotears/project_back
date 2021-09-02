const db = require("../models");
const Recipe = db.recipe;
const Ingredient = db.recipes_ingredient;

const insertIngredient = (recipeID, in) => {      
    for (i = 0; i < .length; i++) {
        console.log(req.body[i]);
        Ingredient.create({
          recipeID: recipeID[i],
          quantityValue:[i].quantityValue,
          ingredientsName: [i].ingredientsName,
          categoryID: [i].categoryID,
          //recipeID: req.params[i].recipeID,
        })
    .then(() => {
      res.send({ message: "Collection is ready to use." });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
}
module.exports = {insertIngredient}