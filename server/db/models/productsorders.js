const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductsOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductsOrders.belongsTo(models.Order, { foreignKey: 'order_id', as: 'order' });
      ProductsOrders.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
      ProductsOrders.belongsToMany(models.Product, {
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
