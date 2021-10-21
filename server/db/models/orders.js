const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      // define association here
      Orders.belongsTo(models.Users, { foreignKey: 'user_id', as: 'user' });
      Orders.belongsToMany(models.Products, {
        through: 'ProductsOrders',
        as: 'products',
        foreignKey: 'order_id',
      });
    }
  }
  Orders.init({
    user_id: DataTypes.INTEGER, // tá certo?
    client_name: DataTypes.STRING,
    table: DataTypes.INTEGER,
    details: DataTypes.TEXT,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};
