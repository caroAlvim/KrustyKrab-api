/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Products', [
    {
      name: 'Café americano',
      price: 5,
      flavor: null,
      complement: null,
      type: 'breakfast',
      sub_type: 'breakfast',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Café com leite',
      price: 7,
      flavor: null,
      complement: null,
      type: 'breakfast',
      sub_type: 'breakfast',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Suco de fruta natural',
      price: 7,
      flavor: null,
      complement: null,
      type: 'breakfast',
      sub_type: 'breakfast',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Hambúrguer simples',
      price: 10,
      flavor: 'carne',
      complement: null,
      type: 'all-day',
      sub_type: 'hamburguer',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Hambúrguer simples',
      price: 10,
      flavor: 'frango',
      complement: 'ovo',
      type: 'all-day',
      sub_type: 'hamburguer',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }, 
};

// "image": "https://upload.wikimedia.org/wikipedia/commons/4/41/Coffee_with_milk_%28563800%29.jpg",
