const { authJwt } = require("../middleware");
const cooking_process = require("../controllers/cooking_process.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/find/cooking_process/:recipeID", cooking_process.findCookingProcess);
  app.post("/api/cooking_process/createProcess", cooking_process.createProcess);

};