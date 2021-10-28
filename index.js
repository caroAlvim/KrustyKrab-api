/* eslint-disable global-require */
/* eslint-disable no-console */

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
// const bodyParser = require('body-parser');
const swaggerDocs = require('./swagger.json');
const routes = require('./server/routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// error handling
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'production') res.status(500).json({ error: 'Internal server error' });
  else return next(err);
});

app.get('*', (req, res) => {
  res.status(200).send('Hello there. This is Krusty Krab API');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
