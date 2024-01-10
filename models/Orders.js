const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Orders', {
    OrderID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Customers',
        key: 'CustomerID'
      }
    },
    EmployeeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Employees',
        key: 'EmployeeID'
      }
    },
    OrderDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ShipperID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Shippers',
        key: 'ShipperID'
      }
    }
  }, {
    sequelize,
    tableName: 'Orders',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "OrderID" },
        ]
      },
      {
        name: "EmployeeID",
        using: "BTREE",
        fields: [
          { name: "EmployeeID" },
        ]
      },
      {
        name: "CustomerID",
        using: "BTREE",
        fields: [
          { name: "CustomerID" },
        ]
      },
      {
        name: "ShipperID",
        using: "BTREE",
        fields: [
          { name: "ShipperID" },
        ]
      },
    ]
  });
};
