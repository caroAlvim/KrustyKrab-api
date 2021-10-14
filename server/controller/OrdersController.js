const ordersGetAll = (req, res) => {
  res.status(201).send('Você esta na rota de orders e esta realizando um get');
};

const ordersPost = (req, res) => {
  // console.log(req.body);
  res.status(201).send('Você esta na rota de orders e esta realizando um post');
};

const orderDelete = (req, res) => {
  res.status(201).send('Você esta na rota de orders e esta realizando um delete');
  // id
};

const orderGet = (req, res) => {
  res.status(201).send('Você esta na rota de orders com id e esta realizando um get');
  // id
};

const orderUpdate = (req, res) => {
  res.status(201).send('Você esta na rota de orders com id e esta realizando um get');
  // id
};

module.exports = {
  ordersGetAll, ordersPost, orderDelete, orderGet, orderUpdate,
};

// const getOrdersExample = (req, res) => {
//   res.send('Request getProductsExample feita');
// };

// const getOtherOrdersExample = (req, res) => {
//   res.send('Request getOtherProductsExample feita');
// };

// module.exports = { getOrdersExample, getOtherOrdersExample };
