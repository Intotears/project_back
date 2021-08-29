const { authJwt } = require("../middleware");
const recipe = require("../controllers/recipe.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  const auth = [authJwt.verifyToken];
  
  app.post("/api/recipe/create/:userID", recipe.createRecipe);

  app.get("/api/findAll/recipe", recipe.findAll);

  app.get("/api/find/recipe", auth, recipe.findByPk);

  app.get("/api/find/recipe/:recipeID", recipe.findByRecipeID);

  app.get("/api/find/image/:recipeID", recipe.findImage);

  app.get("/api/find/recipeByUserID/:userID", recipe.findByUserID);

  app.get("/api/find/RecipeInUserProfile/:userID", recipe.RecipeInUserProfile);

  app.delete("/api/detail/delete/:recipeID", recipe.delete);


};