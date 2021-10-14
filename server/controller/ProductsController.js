const getProductsExample = (req, res) => {
  res.send('Request getProductsExample feita');
};

const getOtherProductsExample = (req, res) => {
  res.send('Request getOtherProductsExample feita');
};

module.exports = { getProductsExample, getOtherProductsExample };
