const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Bearer } = require('permit');

const db = require('../db/models');

const permit = new Bearer();

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const getUser = await db.Users.findOne({
      where: {
        email,
        password,
      },
    });

    if (!getUser) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!bcrypt.compareSync(password, getUser.password)) {
      return res.status(401).json({ error: 'Invalid e-mail or password' });
    }

    // generate & sign token
    const jwtPayload = { email: getUser.email };
    const token = jwt.sign(jwtPayload, process.env.JWT_SECRET);

    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

const auth = async (req, res, next) => {
  try {
    const token = permit.check(req);

    if (!token) {
      permit.fail(res);
      return res.status(401).json({ error: 'authentication required!' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        permit.fail(res);
        return res.status(401).json({ error: 'failed to authenticate token!' });
      }
      // save username for next middleware
      req.name = decoded.name;
      next();
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { login, auth };
