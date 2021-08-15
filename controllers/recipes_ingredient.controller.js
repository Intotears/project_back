const db = require("../models/index");
const RecipeIngre = db.recipes_ingredient;

// exports.findIngreRecipe = (req, res) => { 
//   RecipeIngre.findByPk(req.params.recipeID).then((IngreRecipe) => { 
//     res.status(200).json(
//       [IngreRecipe] 
//     );
//   });
// }; 

exports.findMainIngre = (req, res) => {
  RecipeIngre.findAll({
    where: { recipeID: req.params.recipeID , categoryID: 1}
  }).then((MainIngre) => {
    res.status(200).json(    
      MainIngre
    );
  });
};

exports.findSubIngre = (req, res) => {
  RecipeIngre.findAll({
    where: { recipeID: req.params.recipeID , categoryID: 2}
  }).then((SubIngre) => {
    res.status(200).json(    
      SubIngre
    );
  });
};

exports.findFlavoring = (req, res) => {
  RecipeIngre.findAll({
    where: { recipeID: req.params.recipeID , categoryID: 3}
  }).then((Flavoring) => {
    res.status(200).json(    
      Flavoring
    );
  });
};

exports.findIngreByUserID = (req, res) => {
  RecipeIngre.findAll({
    where: { userID: req.params.userID }
  }).then((Flavoring) => {
    res.status(200).json(    
      Flavoring
    );
  });
};

exports.createRecipeIngredients = (req, res) => {
  RecipeIngre.create({
    quantityValue : req.body.quantityValue,
    IngredientsName: req.body.IngredientsName,
  })
    .then(() => { 
      res.send({ message: "Ingredients created successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
  const recipeID = req.params.recipeID;
  RecipeIngre.destroy({
    where: { recipeID: req.params.recipeID },
  }).then(() => {
    res.status(200).json({
        status: true,
        message: "Ingredient was deleted successfully with id = " + recipeID
    });
  });
};