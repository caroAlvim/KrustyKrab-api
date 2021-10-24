/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      name: 'John Doe',
      email: 'john@mail.com',
      password: bcrypt.hashSync('123456', 10),
      role: 'cozinha',
      restaurant: 'abc',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mari',
      email: 'maryk@mail.com',
      password: bcrypt.hashSync('123456', 10),
      role: 'salao',
      restaurant: 'abcd',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Peter',
      email: 'peter@mail.com',
      password: bcrypt.hashSync('123456', 10),
      role: 'cozinha',
      restaurant: 'abc',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Kate',
      email: 'kate@mail.com',
      password: bcrypt.hashSync('123456', 10),
      role: 'salao',
      restaurant: 'abc',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Jack',
      email: 'jack@mail.com',
      password: bcrypt.hashSync('123456', 10),
      role: 'salao',
      restaurant: 'abc',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Leo',
      email: 'leo@mail.com',
      password: bcrypt.hashSync('123456', 10),
      role: 'cozinha',
      restaurant: 'abc',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Julia',
      email: 'julia@mail.com',
      password: bcrypt.hashSync('123456', 10),
      role: 'cozinha',
      restaurant: 'abc',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users');
  },
};
