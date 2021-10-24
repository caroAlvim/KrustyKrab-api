const db = require('../db/models');

const { productsOrders } = db;

const ordersGetAll = async (req, res, next) => {
  const getOrders = await db.Orders.findAll({
    include: [{
      model: productsOrders, as: 'Products', attributes: ['id', 'name', 'complement', 'qtd'],
    }],

  });
  try {
    return res.status(200).json(getOrders);
  } catch (error) {
    next(error);
  }
};

const orderGet = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getOrders = await db.Orders.findOne({
      where: { id: Number(id) },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    if (getOrders === null) {
      return res.status(200).json({ message: 'Pedido não encontrado' });
    }
    return res.status(200).json(getOrders);
  } catch (error) {
    next(error);
  }
};

const ordersPost = async (req, res, next) => {
  const newOrder = req.body;
  // const { name, email, password, role, restaurant } = req.body;
  try {
    const creatingNewOrder = await db.Orders.create(newOrder);
    // requisicao para os produtos
    return res.status(200).json(creatingNewOrder);
  } catch (error) {
    next(error);
  }
  // como adicionar os produtos??? usar um get para os produtos e adicionar numa array?
};

const orderDelete = async (req, res, next) => {
  const { id } = req.params;
  try {
    await db.Orders.destroy({ where: { id: Number(id) } });
    return res.status(200).json({ message: `Pedido com id ${id} deletado` });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  ordersGetAll, ordersPost, orderDelete, orderGet,
};
