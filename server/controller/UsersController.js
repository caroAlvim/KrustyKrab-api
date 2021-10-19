const usersGetAll = (req, res) => {
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
