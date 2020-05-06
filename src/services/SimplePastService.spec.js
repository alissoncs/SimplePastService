const assert = require('assert');
const _ = require('lodash');
const SimplePastService = require('./SimplePastService');

describe('SimplePastService', () => {
  it('should instanciate and return the verbs list', () => {
    const inst = new SimplePastService();
    const verbs = inst.getVerbs();
    assert.ok(_.isArray(verbs), 'Verbs should exists and being array');
  });
  it('should contains all columns', () => {
    const inst = new SimplePastService();
    const verbs = inst.getVerbs();
    verbs.map((verb) => {
      assert.ok(_.isNumber(verb.id), 'Verbs id');
      assert.ok(_.isString(verb.baseForm), 'Verbs baseForm');
      assert.ok(_.isString(verb.pastTenseForm), 'Verbs pastTenseForm');
      assert.ok(_.isString(verb.pastParticipleForm), 'Verbs pastParticipleForm');
    });
  });
});
