const { authJwt } = require("../middleware");
const search = require("../controllers/searching.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/recipe/search", search.searchingRecipe);

};
