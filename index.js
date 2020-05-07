require('dotenv').config()
const express = require('express');
const assert = require('assert');
const app = express();

const routes = require('./src/routes');

app.use(require('body-parser').urlencoded());
app.use(require('body-parser').json());

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  assert.ok(process.env.API_KEY, 'process.env.API_KEY required');
  if (req.headers.apikey !== process.env.API_KEY) {
    return res.json({
      error: 'Invalid APIKEY. Please send correct header "apikey"',
    }).status(401);
  }
  next();
});

app.use(routes);

app.use((err, req, res, next) => {
  console.error(err);
  return res.json({
    error: err.message,
    details: err,
  }).status(500);
})

app.listen(port, () => {
  console.info(`App running at ${port} :D`);
})
