module.exports = (sequelize, Sequelize) => {
    const Collection = sequelize.define(
      "collection",
      {
        collectionID: {
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
  
    return Collection;
  };
  