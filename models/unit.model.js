module.exports = (sequelize, Sequelize) => {
    const Unit = sequelize.define(
      "unit",
      {
          unitID: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          
        },
        unitName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return Unit;
  };
  