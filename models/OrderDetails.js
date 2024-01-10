const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderDetails', {
    OrderDetailID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Orders',
        key: 'OrderID'
      }
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Products',
        key: 'ProductID'
      }
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OrderDetails',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "OrderDetailID" },
        ]
      },
      {
        name: "OrderID",
        using: "BTREE",
        fields: [
          { name: "OrderID" },
        ]
      },
      {
        name: "ProductID",
        using: "BTREE",
        fields: [
          { name: "ProductID" },
        ]
      },
    ]
  });
};
