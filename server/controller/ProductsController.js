const productsGetAll = (req, res) => {
  res.status(201).send('Você esta na rota de products e esta realizando um get');
};

const getProductById = (req, res) => {
  res.status(201).send('Você esta na rota de products com id e esta realizando um get');
  // id
};

module.exports = { productsGetAll, getProductById };
