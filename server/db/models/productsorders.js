const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductsOrders extends Model {
    static associate(models) {
      ProductsOrders.belongsTo(models.Orders, { foreignKey: 'order_id', as: 'order' });
      ProductsOrders.belongsTo(models.Products, { foreignKey: 'product_id', as: 'product' });
      // ProductsOrders.belongsToMany(models.Products, {
      //   through: 'ProductsOrders',
      //   as: 'products',
      //   foreignKey: 'order_id',
      // });
    }
  }
  ProductsOrders.init({
    qtd: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ProductsOrders',
  });
  return ProductsOrders;
};
