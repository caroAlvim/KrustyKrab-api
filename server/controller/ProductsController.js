const db = require('../db/models');

const productsGetAll = async (req, res, next) => {
  const getProducts = await db.Products.findAll();
  try {
    return res.status(200).json(getProducts);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getProducts = await db.Products.findOne({
      where: { id: Number(id) },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    if (getProducts === null) {
      return res.status(200).json({ message: 'Produto não encontrado' });
    }
    return res.status(200).json(getProducts);
  } catch (error) {
    next(error);
  }
};

const productsPost = async (req, res, next) => {
  const newProduct = {
    name: req.body.name.trim(),
    price: req.body.price.trim(),
    flavor: req.body.flavor.trim(),
    complement: req.body.complement.trim(),
    type: req.body.type.trim(),
    sub_type: req.body.sub_type.trim(),
  };

  try {
    const creatingNewProduct = await db.Products.create(newProduct);
    return res.status(200).json(creatingNewProduct);
  } catch (error) {
    next(error);
  }
};

const updateProducts = async (req, res, next) => {
  const { id } = req.params;
  const updateProduct = req.body;
  try {
    await db.Products.update(updateProduct, { where: { id: Number(id) } });
    const productUpdated = await db.Products.findOne({
      where: { id: Number(id) },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    return res.status(200).json(productUpdated);
  } catch (error) {
    next(error);
  }
};

const productsDelete = async (req, res, next) => {
  const { id } = req.params;
  try {
    await db.Products.destroy({ where: { id: Number(id) } });
    return res.status(200).json({ message: `Produto com id ${id} deletado` });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  productsGetAll, getProductById, productsPost, updateProducts, productsDelete,
};
