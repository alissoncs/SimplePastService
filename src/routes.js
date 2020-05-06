const routes = require('express').Router();
const SimplePastService = require('./services/SimplePastService');

routes.get('/', (req, res) => {
  return res.json({
    status: 'ok',
    server_version: '1.0',
  });
});

routes.get('/verbs/simple-past', (req, res) => {
  const service = new SimplePastService();
  const verbs = service.getVerbs();
  return res.json({
    total: verbs.count,
    list: verbs,
  });
});

module.exports = routes;
