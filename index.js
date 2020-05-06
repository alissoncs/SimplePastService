const express = require('express');
const app = express();

const routes = require('./src/routes');

app.use(require('body-parser').urlencoded());
app.use(require('body-parser').json());

const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, () => {
  console.info(`App running at ${port} :D`);
})
