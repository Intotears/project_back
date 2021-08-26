module.exports = (sequelize, Sequelize) => {
  const RecipeCollection = sequelize.define(
    "recipeCollection",
    {
      rc_ID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return RecipeCollection;
};
