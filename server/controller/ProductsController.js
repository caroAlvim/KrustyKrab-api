const productsGetAll = (req, res) => {
  res.status(201).send('Você esta na rota de products e esta realizando um get');
};

const getProductById = (req, res) => {
  res.status(201).send('Você esta na rota de products com id e esta realizando um get');
  // id
};

// definir se estas funçoes serão necessárias
const productsPost = (req, res) => {
  res.status(201).send('Você esta na rota de products e esta realizando um post');
};

const updateProducts = (req, res) => {
  res.status(201).send('Você esta na rota de products com id e esta realizando um update');
};

const productsDelete = (req, res) => {
  res.status(201).send('Você esta na rota de products com id e esta realizando um post');
};

module.exports = {
  productsGetAll, getProductById, productsPost, updateProducts, productsDelete,
};
