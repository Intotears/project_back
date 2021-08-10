const db = require("../models/index");
const cooking_process = db.cooking_process;


exports.findCookingProcess = (req, res) => {
  cooking_process.findAll(
      { where: { recipeID: req.params.recipeID } }
    ).then((cooking_process) => {
      res.status(200).json(    
        cooking_process
      );
    });
  };

exports.createProcess = (req, res) => {
  cooking_process.create({
    processDescription : req.body.processDescription,
    processImage: req.body.processImage,
    })
      .then(() => { 
        res.send({ message: "Process created successfully!" });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };