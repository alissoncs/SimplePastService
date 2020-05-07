const routes = require('express').Router();
const SimplePastService = require('./services/SimplePastService');
const GoogleTranslateService = require('./services/GoogleTranslateService');

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

routes.post('/v1/translate', (req, res) => {
  const service = new GoogleTranslateService();
  service.translate({
    term: req.body.term,
    target: 'pt-BR',
  }).then((translation) => {
    return res.json({
      translation,
    }).status(201);
  }).catch((err) => {
    return res.json({
      error: err.message,
    }).status(500);
  });

});

module.exports = routes;
