/* eslint-disable no-console */
const signIn = (req, res) => {
  res.send('voce esta na rota Auth e esta solicitando o signIn');
};

const auth = (req, res) => {
  res.send('voce esta na rota Auth e esta solicitando o Auth');
};

module.exports = { signIn, auth };

// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const { Bearer } = require('permit');

// const User = require('../database/models');

// const permit = new Bearer();

// module.exports = {
//   login(req, res, next) {
//     const { email, password } = req.body;

//     User.findOne({
//       where: {
//         email,
//       },
//     }).then((user) => {
//       // username does not exists
//       if (!user) return res.status(401).json({ error: 'User not found' });

//       // password check
//       if (!bcrypt.compareSync(password, user.password)) {
//         return res.status(401).json({ error: 'Something went wrong' });
//       }

//       // generate & sign token
//       const jwtPayload = { username: user.username }; // public payload!
//       const token = jwt.sign(jwtPayload, process.env.JWT_SECRET); // user: user

//       return res.status(200).json({ token });
//     });
//   },

//   auth(req, res, next) {
//     // Try to find the bearer token in the request.
//     const token = permit.check(req);

//     // No token found, so ask for authentication.
//     if (!token) {
//       permit.fail(res);
//       return res.status(401).json({ error: 'authentication required!' });
//     }

//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//       if (err) {
//         permit.fail(res);
//         return res.status(401).json({ error: 'failed to authenticate token!' });
//       }

//       // save username for next middleware
//       req.username = decoded.username;
//       next();
//     });
//   },
// };
