const db = require('../db/models');

// const UsersControllers = {
//   async getAllUsers(req, res, next) {
//     const allUsers = await db.Users.findAll()

// }
//   async getAllUsers(req, res, next) {
//     try {
//       const listUserId = await function();
//       const usersListOrganized = {
//         'id': listUserId.id,
//         'name': listUserId.name,
//       }
//       res.status(201).send(usersListOrganized);
//     } catch (error){
//       next(error);
//     }
//   },
// };

const usersGetAll = async (req, res) => {
  await db.Users.findAll();

  // try {
  //   const { id, name } = req.body;

  //   const user = await Users.
  // }
  

  res.status(201).send('Você esta na rota de users e esta realizando um get');
};

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

// module.exports = UsersControllers
