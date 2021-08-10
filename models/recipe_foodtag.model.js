module.exports = (sequelize, Sequelize) => {
    const RecipesFoodtag = sequelize.define(
      "recipesFoodtag",
      {
       rft_ID: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,  
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return RecipesFoodtag;
  };
  