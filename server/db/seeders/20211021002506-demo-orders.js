/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Orders', [
    {
      user_id: 1,
      client_name: 'John Doe',
      table: 4,
      status: 'pending',
      processedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      client_name: 'Mari',
      table: 1,
      status: 'pending',
      processedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      client_name: 'Mari',
      table: 4,
      status: 'pending',
      processedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 3,
      client_name: 'Kate',
      table: 5,
      status: 'pending',
      processedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },

  ]),
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders');
  },
};
