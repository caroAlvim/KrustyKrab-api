/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('ProductsOrders', [
    {
      order_id: 1,
      product_id: 2,
      qtd: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      order_id: 1,
      product_id: 6,
      qtd: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      order_id: 2,
      product_id: 3,
      qtd: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      order_id: 2,
      product_id: 5,
      qtd: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      order_id: 3,
      product_id: 5,
      qtd: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      order_id: 3,
      product_id: 4,
      qtd: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      order_id: 3,
      product_id: 3,
      qtd: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      order_id: 4,
      product_id: 5,
      qtd: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      order_id: 4,
      product_id: 1,
      qtd: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      order_id: 4,
      product_id: 6,
      qtd: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductsOrders', null, {});
  },
};
