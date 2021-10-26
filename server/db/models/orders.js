const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      // Orders.hasMany(models.ProductsOrders, { foreignKey: 'order_id', as: 'order' });
      // Orders.belongsTo(models.Users, { foreignKey: 'user_id', as: 'user' }); // to many users?
      Orders.belongsToMany(models.Products, {
        through: 'ProductsOrders',
        as: 'Products',
        foreignKey: 'order_id',
      });
    }
  }
  Orders.init({
    client_name: DataTypes.STRING,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};
