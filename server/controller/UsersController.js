const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db/models');

const usersGetAll = async (req, res, next) => {
  const getUsers = await db.Users.findAll();
  try {
    return res.status(200).json(getUsers);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getUser = await db.Users.findOne({
      where: { id: Number(id) },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    });
    if (getUser === null) {
      return res.status(200).json({ message: 'Usuário não encontrado' });
    }
    return res.status(200).json(getUser);
  } catch (error) {
    next(error);
  }
};

const usersPost = async (req, res, next) => {
  const newUser = {
    name: req.body.name.trim(),
    email: req.body.email.toLowerCase().trim(),
    password: bcrypt.hashSync(req.body.password, 12).trim(),
    role: req.body.role.trim(),
    restaurant: req.body.restaurant.trim(),
  };
  try {
    const creatingNewUser = await db.Users.create(newUser);

    const jwtPayload = {
      email: creatingNewUser.email,
      name: creatingNewUser.name,
      restaurant: creatingNewUser.restaurant,
    };
    const token = jwt.sign(jwtPayload, process.env.JWT_SECRET);

    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
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
    next(error);
  }
};

const usersDelete = async (req, res, next) => {
  const { id } = req.params;
  try {
    await db.Users.destroy({ where: { id: Number(id) } });
    return res.status(200).json({ message: `id ${id} deletado` });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  usersGetAll, usersPost, usersDelete, getUserById, updateUser,
};
