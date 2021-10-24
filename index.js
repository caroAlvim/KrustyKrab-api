/* eslint-disable global-require */
/* eslint-disable no-console */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./server/routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

// error handling --- p/ evitar vulnerabilidades
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'production') res.status(500).json({ error: 'Internal server error' });
  else return next(err);
});

app.get('*', (req, res) => {
  res.status(200).send('Servidor rodando, tudo ok!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
