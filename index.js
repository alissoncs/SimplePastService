require('dotenv').config()
const express = require('express');
const assert = require('assert');
const app = express();

const routes = require('./src/routes');
const ErrorHandler = require('./src/middlewares/ErrorHandler');
const ApiKey = require('./src/middlewares/ApiKey');

app.use(require('body-parser').urlencoded());
app.use(require('body-parser').json());

const port = process.env.PORT || 3000;

app.use(ApiKey());
app.use(routes);
app.use(ErrorHandler());

app.listen(port, () => {
  console.info(`App running at ${port} :D`);
})
