module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define(
      "admin",
      {
        adminID: {
          type: Sequelize.STRING,
          primaryKey: true,
          allowNull: false,
        },
        adminName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        adminUsername: {
          type: Sequelize.STRING,
          allowNull: false,
          
        },
        adminPassword: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return Admin;
  };
  