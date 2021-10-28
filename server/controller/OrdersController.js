const db = require('../db/models');

const { Products } = db;

const ordersGetAll = async (req, res, next) => {
  const getOrders = await db.Orders.findAll({
    include: [{
      model: Products, as: 'Products', attributes: ['id', 'name', 'price', 'flavor', 'complement', 'type', 'sub_type'], through: { attributes: ['qtd'], as: 'details' },
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
        model: Products, as: 'Products', attributes: ['id', 'name', 'price', 'flavor', 'complement', 'image', 'type', 'sub_type'], through: { attributes: ['qtd'], as: 'details' },
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
  const requestProducts = req.body.Products;
  // const allProducts = JSON.parse(requestProducts);

  const newOrder = {
    client_name: req.body.client_name.trim(),
    table: req.body.table.trim(),
    status: req.body.status.trim(),
    user_id: req.body.user_id.trim(),
    processedAt: req.body.processedAt.trim(),
  };
  try {
    const creatingNewOrder = await db.Orders.create(newOrder)
      .then((result) => {
        requestProducts.map((item) => {
          const findProduct = Products.findByPk(item.id);
          if (!findProduct) {
            return res.status(400).json({ message: 'Produto não encontrado' });
          }

          const ordersItems = {
            order_id: result.id,
            product_id: item.id,
            qtd: item.qtd,
          };

          db.ProductsOrders.create(ordersItems);
          return res.status(200).json(result);
        });
      });

    return res.status(200).json(creatingNewOrder);
  } catch (error) {
    next(error);
  }
};

const updateOrder = async (req, res, next) => {
  const { id } = req.params;
  const updateOrder = req.body;
  try {
    await db.Orders.update(updateOrder, { where: { id: Number(id) } });
    const orderUpdated = await db.Orders.findOne({
      where: { id: Number(id) },
    });
    return res.status(200).json(orderUpdated);
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
  ordersGetAll, ordersPost, orderDelete, updateOrder, orderGet,
};
