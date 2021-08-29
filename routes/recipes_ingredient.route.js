const { authJwt } = require("../middleware");
const recipes_ingredient = require("../controllers/recipes_ingredient.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/find/MainIngre/:recipeID", recipes_ingredient.findMainIngre);
  app.get("/api/find/SubIngre/:recipeID", recipes_ingredient.findSubIngre);
  app.get("/api/find/Flavoring/:recipeID", recipes_ingredient.findFlavoring);
  app.get("/api/find/All/ingredient", recipes_ingredient.findIngreByRecipeID);
  app.post("/api/ingredient/createRecipeIngredients", recipes_ingredient.createRecipeIngredients);
  app.delete("/api/ingredient/delete/:recipeID", recipes_ingredient.delete);
  

};