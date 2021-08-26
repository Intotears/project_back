const db = require("../models/index");
const cooking_process = db.cooking_process;

exports.findCookingProcessByRecipeID = (req, res) => {
  cooking_process
    .findAll({ where: { recipeID: req.params.recipeID } })
    .then((cooking_process) => {
      res.status(200).json(cooking_process);
    });
};

exports.findAllCookingProcess = (req, res) => {
  cooking_process.findAll().then((cooking_process) => {
    res.status(200).json(cooking_process);
  });
};

exports.createProcess = (req, res) => {
  for (i = 0; i < req.body.length; i++) {
    // console.log(req.body[i]);
    cooking_process.create({
        processDescription: req.body[i].processDescription,
        processImage: req.body[i].processImage,
      })
      .then(() => {})
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
  res.send({ message: "Process created successfully!" });
};

exports.delete = (req, res) => {
  const recipeID = req.params.recipeID;
  cooking_process
    .destroy({
      where: { recipeID: req.params.recipeID },
    })
    .then(() => {
      res.status(200).json({
        status: true,
        message:
          "cooking process was deleted successfully with id = " + recipeID,
      });
    });
};
