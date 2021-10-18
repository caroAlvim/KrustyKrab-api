/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      name: 'John Doe',
      email: 'jkjk@ldalkk.com',
      password: '123456',
      role: 'cozinha',
      restaurant: 'abc',
    },
    {
      name: 'Mari',
      email: 'jkyyk@ldalkk.com',
      password: '123456',
      role: 'salao',
      restaurant: 'abcd',
    },
  ]), /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
