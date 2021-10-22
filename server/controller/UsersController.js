const db = require('../db/models');

const usersGetAll = async (req, res) => {
  const getUsers = await db.Users.findAll();
  try {
    return res.status(200).json(getUsers);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// class UsersControllers {
//   static async usersGetAll(req, res) {
//     try {
//       const getAll = await db.Users.findAll();
//       return res.status(200).json(getAll);
//     } catch (error) {
//       return res.status(500).json(error.message);
//     }
//   }
// }

// const UsersControllers = {
//   async getAllUsers(req, res, next) {
//     const allUsers = await db.Users.findAll()

// }

const usersPost = (req, res) => {
  // console.log(req.body);
  res.status(201).send('Você esta na rota de users e esta realizando um post');
};

const usersDelete = (req, res) => {
  res.status(201).send('Você esta na rota de users e esta realizando um delete');
};

const getUserById = (req, res) => {
  res.status(201).send('Você esta na rota de users com id e esta realizando um get');
  // id
};

const updateUser = (req, res) => {
  res.status(201).send('Você esta na rota de users com id e esta realizando um update');
  // id
};

module.exports = {
  usersGetAll, usersPost, usersDelete, getUserById, updateUser,
};

// module.exports = UsersControllers;
