const { authJwt } = require("../middleware");
const rating = require("../controllers/rating.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/find/rating/:recipeID", rating.findRating);
  app.get("/api/find/allRating/", rating.findAllRating);
  
};
//[authJwt.verifyToken]