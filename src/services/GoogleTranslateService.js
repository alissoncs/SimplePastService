const assert = require('assert');
const axios = require('axios');
const { TranslationServiceClient } = require('@google-cloud/translate');
const { Translate } = require('@google-cloud/translate').v2;

class GoogleTranslateService {
  constructor(deps = {}) {
    assert.ok(process.env.GOOGLE_PROJECT_ID, 'process.env.GOOGLE_PROJECT_ID not defined');
    assert.ok(process.env.GOOGLE_API_KEY, 'process.env.GOOGLE_API_KEY not defined');

    this.projectId = process.env.GOOGLE_PROJECT_ID;
    this.apiKey = process.env.GOOGLE_API_KEY;

    this.Translate = deps.Translate || Translate;
  }

  getValidLanguages() {
    return [
      'pt-BR',
      'es-ES',
    ];
  }

  async translate({
    term,
    target,
  }) {
    assert.ok(target, 'target required');
    assert.ok(typeof term === 'string', 'term required');
    assert.ok(this.getValidLanguages().indexOf(target) >= 0, 'Accepted only as target: ' + this.getValidLanguages().join(','));

    const text = term;
    const translate = new Translate({
      projectId: this.projectId,
      apiKey: this.apiKey,
      key: this.apiKey,
    });

    // const target = 'pt';
    const [translation, ...others] = await translate.translate(text, target);
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
    return {
      translation,
      others,
    };
  }
}

module.exports = GoogleTranslateService;
