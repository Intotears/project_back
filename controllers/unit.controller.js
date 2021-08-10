const db = require("../models/index");
const unit = db.unit;


exports.findUnit = (req, res) => {
  unit.findAll(
      // { where: { userID: req.params.recipeID } }
    ).then((unit) => {
      res.status(200).json(    
        unit
      );
    });
  };