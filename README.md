# SimplePastService
Its a server application for the SimplePastApp :see_no_evil:

[![alissoncs](https://circleci.com/gh/alissoncs/SimplePastService.svg?style=svg)](https://circleci.com/gh/alissoncs/SimplePastService)


Available Google Play
https://play.google.com/store/apps/details?id=com.simplepastapp

Also check the app React Native code repository here
https://github.com/brunoklein/SimplePastApp


# Features :green_heart:
- Retrive the simple past verbs list (regular and irregular)
- Retrive the server status

# WIP :rocket:
- Facebook login with Passport
- Score management
- Unit and functional tests
- ...


# Routes :zap:

API base endpoint: https://simple-past-service.herokuapp.com/

Any request requires a HTTP Header called `apikey=KEY` :rotating_light:

If you want to use this API, just send me an email: webalissoncs@gmail.com
requesting the API code

### Status
```
GET /
```

### Get simple past verbs list

```
GET /verbs/simple-past
```

### Translate a word

```
POST /v1/translate
```

Send body
```
{
  term: "Hello World",
  target: 'pt-BR', // accepted: pt-BR, es-ES for a while
}
```
Response body
```
{
    "translation": {
        "translation": "Olá",
        "others": [
            {
                "data": {
                    "translations": [
                        {
                            "translatedText": "Olá",
                            "detectedSourceLanguage": "en"
                        }
                    ]
                }
            }
        ]
    }
}
```
