const db = require('../db/models');

const usersGetAll = async (req, res) => {
  const getUsers = await db.Users.findAll();
  try {
    return res.status(200).json(getUsers);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const getUser = await db.Users.findOne({
      where: { id: Number(id) },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    });
    // if (!getUser) {
    //   return res.status(200).json('Usuário não encontrado');
    // }
    return res.status(200).json(getUser);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const usersPost = async (req, res) => {
  const newUser = req.body;
  try {
    const creatingNewUser = await db.Users.create(newUser);
    return res.status(200).json(creatingNewUser);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updateUser = req.body;
  try {
    await db.Users.update(updateUser, { where: { id: Number(id) } });
    const userUpdated = await db.Users.findOne({
      where: { id: Number(id) },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    });
    return res.status(200).json(userUpdated);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const usersDelete = async (req, res) => {
  const { id } = req.params;
  try {
    await db.Users.destroy({ where: { id: Number(id) } });
    return res.status(200).json({ message: `id ${id} deletado` });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  usersGetAll, usersPost, usersDelete, getUserById, updateUser,
};
