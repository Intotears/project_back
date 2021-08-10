module.exports = (sequelize, Sequelize) => {
  const All_Ingredients = sequelize.define(
    "all_Ingredients",
    {
        ingredientID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        
      },
      ingredientName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return All_Ingredients;
};
