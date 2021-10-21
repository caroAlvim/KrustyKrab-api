const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductsOrders extends Model {
    static associate(models) {
      // define association here
      ProductsOrders.belongsTo(models.Orders, { foreignKey: 'order_id', as: 'order' });
      ProductsOrders.belongsTo(models.Products, { foreignKey: 'product_id', as: 'product' });
      ProductsOrders.belongsToMany(models.Products, {
        through: 'ProductsOrders',
        as: 'products',
        foreignKey: 'order_id',
      });
    }
  }
  ProductsOrders.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ProductsOrders',
  });
  return ProductsOrders;
};
