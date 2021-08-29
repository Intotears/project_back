const { verifySignUp } = require("../middleware");
const authcontroller = require("../controllers/auth.controller");
const collection = require("../controllers/collection.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [verifySignUp.checkDuplicateUsernameOrEmail],
    authcontroller.signup,
    // collection.createCollection
  );

  app.post("/api/auth/signin", authcontroller.signin);
};
