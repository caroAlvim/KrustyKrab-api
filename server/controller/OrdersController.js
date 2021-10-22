const db = require('../db/models');

const ordersGetAll = async (req, res) => {
  const getOrders = await db.Orders.findAll();
  try {
    return res.status(200).json(getOrders);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const orderGet = async (req, res) => {
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
    return res.status(500).json(error.message);
  }
};

const ordersPost = async (req, res) => {
  const newOrder = req.body;
  try {
    const creatingNewOrder = await db.Orders.create(newOrder);
    return res.status(200).json(creatingNewOrder);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const orderDelete = async (req, res) => {
  const { id } = req.params;
  try {
    await db.Orders.destroy({ where: { id: Number(id) } });
    return res.status(200).json({ message: `Pedido com id ${id} deletado` });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  ordersGetAll, ordersPost, orderDelete, orderGet,
};
