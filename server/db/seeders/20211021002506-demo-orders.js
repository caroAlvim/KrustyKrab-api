/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Orders', [
    {
      client_name: 'John Doe',
      user_id: 1,
      table: 4,
      status: 'pending',
      processedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      Products: [
        {
          id: 1,
          name: 'Café americano',
          flavor: null,
          complement: null,
          qtd: 1,
        },
        {
          id: 2,
          name: 'Café com leite',
          flavor: null,
          complement: null,
          qtd: 2,
        },
        {
          id: 3,
          name: 'Suco de fruta natural',
          flavor: null,
          complement: null,
          qtd: 3,
        },
      ],
    },
    {
      client_name: 'Mari',
      user_id: 2,
      table: 1,
      status: 'ready',
      processedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      Products: [
        {
          id: 5,
          name: 'Hambúrguer simples',
          flavor: 'frango',
          complement: 'ovo',
          qtd: 1,
        },
      ],
    },
    {
      client_name: 'Mari',
      user_id: 2,
      table: 4,
      status: 'ready',
      processedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      Products: [
        {
          id: 4,
          name: 'Hambúrguer simples',
          flavor: 'carne',
          complement: null,
          qtd: 2,
        },
      ],
    },

  ]),
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
