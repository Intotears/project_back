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
  for (i = 0; i < req.body.length; i++) {
    console.log(req.body[i]);
    RecipeIngre.create({
      quantityValue: req.body[i].quantityValue,
      ingredientsName: req.body[i].ingredientsName,
    })
      .then(() => {})
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }

  res.send({ message: "Ingredients created successfully!" }); 
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