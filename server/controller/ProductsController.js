const db = require('../db/models');

const productsGetAll = async (req, res) => {
  const getProducts = await db.Products.findAll();
  try {
    return res.status(200).json(getProducts);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const getProducts = await db.Products.findOne({
      where: { id: Number(id) },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    // if (!getProducts) {
    //   return res.status(200).json({ message: 'Produto não encontrado'});
    // }
    return res.status(200).json(getProducts);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const productsPost = async (req, res) => {
  const newProduct = req.body;
  try {
    const creatingNewProduct = await db.Products.create(newProduct);
    return res.status(200).json(creatingNewProduct);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const updateProducts = async (req, res) => {
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
    return res.status(500).json(error.message);
  }
};

const productsDelete = async (req, res) => {
  const { id } = req.params;
  try {
    await db.Products.destroy({ where: { id: Number(id) } });
    return res.status(200).json({ message: `Produto com id ${id} deletado` });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  productsGetAll, getProductById, productsPost, updateProducts, productsDelete,
};
