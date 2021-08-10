module.exports = (sequelize, Sequelize) => {
  const AdditionalIngredient = sequelize.define(
    "additionalIngredient",
    {
      additionalIngre_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        
      },
      additionalIngreName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      additionalIngreQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      additionalIngreCal: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return AdditionalIngredient;
};
