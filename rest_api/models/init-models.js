var DataTypes = require("sequelize").DataTypes;
var _Categories = require("./Categories");
var _Customers = require("./Customers");
var _Employees = require("./Employees");
var _OrderDetails = require("./OrderDetails");
var _Orders = require("./Orders");
var _Products = require("./Products");
var _Shippers = require("./Shippers");
var _Suppliers = require("./Suppliers");

function initModels(sequelize) {
  var Categories = _Categories(sequelize, DataTypes);
  var Customers = _Customers(sequelize, DataTypes);
  var Employees = _Employees(sequelize, DataTypes);
  var OrderDetails = _OrderDetails(sequelize, DataTypes);
  var Orders = _Orders(sequelize, DataTypes);
  var Products = _Products(sequelize, DataTypes);
  var Shippers = _Shippers(sequelize, DataTypes);
  var Suppliers = _Suppliers(sequelize, DataTypes);

  Products.belongsTo(Categories, { as: "Category", foreignKey: "CategoryID"});
  Categories.hasMany(Products, { as: "Products", foreignKey: "CategoryID"});
  Orders.belongsTo(Customers, { as: "Customer", foreignKey: "CustomerID"});
  Customers.hasMany(Orders, { as: "Orders", foreignKey: "CustomerID"});
  Orders.belongsTo(Employees, { as: "Employee", foreignKey: "EmployeeID"});
  Employees.hasMany(Orders, { as: "Orders", foreignKey: "EmployeeID"});
  OrderDetails.belongsTo(Orders, { as: "Order", foreignKey: "OrderID"});
  Orders.hasMany(OrderDetails, { as: "OrderDetails", foreignKey: "OrderID"});
  OrderDetails.belongsTo(Products, { as: "Product", foreignKey: "ProductID"});
  Products.hasMany(OrderDetails, { as: "OrderDetails", foreignKey: "ProductID"});
  Orders.belongsTo(Shippers, { as: "Shipper", foreignKey: "ShipperID"});
  Shippers.hasMany(Orders, { as: "Orders", foreignKey: "ShipperID"});
  Products.belongsTo(Suppliers, { as: "Supplier", foreignKey: "SupplierID"});
  Suppliers.hasMany(Products, { as: "Products", foreignKey: "SupplierID"});

  return {
    Categories,
    Customers,
    Employees,
    OrderDetails,
    Orders,
    Products,
    Shippers,
    Suppliers,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
