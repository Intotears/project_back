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

  app.post("/api/recipe/create", recipe.createRecipe);

  app.get("/api/findAll/recipe", recipe.findAll);

  app.get("/api/find/recipe", [authJwt.verifyToken], recipe.findByPk);

  app.get("/api/find/recipe/:recipeID", recipe.findByRecipeID);

  app.get("/api/find/image/:recipeID", recipe.findImage);

  app.get("/api/find/recipeByUserID/:userID", recipe.findByUserID);

  app.get("/api/find/findByRecipeProfile/:userID", recipe.findByRecipeProfile);

  app.delete("/api/detail/delete/:recipeID", recipe.delete);
};