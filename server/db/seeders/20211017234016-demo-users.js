/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      name: 'John Doe',
      email: 'jkjk@ldalkk.com',
      password: '123456',
      role: 'cozinha',
      restaurant: 'abc',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mari',
      email: 'jkyyk@ldalkk.com',
      password: '123456',
      role: 'salao',
      restaurant: 'abcd',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users');
  },
};
