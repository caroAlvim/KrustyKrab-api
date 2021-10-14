// const db = require('../db/models/Users'); // aqui vai o código que acessa o banco de dados

const usersGetAll = (req, res) => {
  res.status(201).send('Você esta na rota de users e esta realizando um get');
};

const usersPost = (req, res) => {
  console.log(req.body);
  res.status(201).send('Você esta na rota de users e esta realizando um post');
};

const usersDelete = (req, res) => {
  res.status(201).send('Você esta na rota de users e esta realizando um delete');
};

const userGet = (req, res) => {
  res.status(201).send('Você esta na rota de users com id e esta realizando um get');
};

module.exports = {
  usersGetAll, usersPost, usersDelete, userGet,
};

// metodos para get, put, update, delete para cada rota,

// module.exports = (app) => {
// app.get('/users', (req, res) => res.send('Você esta na rota de users e esta realizando um get'));
