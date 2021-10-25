const db = require('../db/models');

const { Products } = db;

const ordersGetAll = async (req, res, next) => {
  const getOrders = await db.Orders.findAll({
    include: [{
      model: Products, as: 'Products', attributes: ['id', 'name', 'price', 'flavor', 'complement', 'type', 'sub_type'],
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
      include: [{
        model: Products, as: 'Products', attributes: ['id', 'name', 'price', 'flavor', 'complement', 'type', 'sub_type'],
      }],

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
  const newOrder = {
    name: req.body.name.trim(),
    price: req.body.price.trim(),
    flavor: req.body.flavor.trim(),
    complement: req.body.complement.trim(),
    type: req.body.type.trim(),
    sub_type: req.body.sub_type.trim(),
  };
  try {
    const creatingNewOrder = await db.Orders.create(newOrder);
    return res.status(200).json(creatingNewOrder);
  } catch (error) {
    next(error);
  }
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
