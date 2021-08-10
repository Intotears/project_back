const db = require("../models/index");
const AllIngre = db.all_ingredients;


exports.findAllIngre = (req, res) => {
    AllIngre.findAll(
      // { where: { userID: req.params.recipeID } }
    ).then((AllIngre) => {
      res.status(200).json(    
        AllIngre
      );
    });
  };