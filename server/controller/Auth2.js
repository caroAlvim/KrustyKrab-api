const jwt = require('jsonwebtoken');
const db = require('../db/models');

function createToken(user) {
  const payload = {
    id: user.id,
  };

  const token = jwt.sign(payload, 'password');
  return token;
}

const addUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const newUser = db.Users.create({
      name,
      email,
    });

    await newUser.addPassword(password);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const token = createToken(req.user);
  res.set('Authorization', token);

  res.status(204).send();
};
