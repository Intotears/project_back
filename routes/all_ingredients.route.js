const { authJwt } = require("../middleware");
const all_ingredient = require("../controllers/all_ingredients.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/find/AllIngre", all_ingredient.findAllIngre);

};