# Streamelements Store Telegram Bot

This bot was made to get informations about streamelements streamer store, like how much points you have and itens that is available on store.

Commands available:

```
/points [nickName] -- Will show you your points on streamer store
/items -- Will show itens availables on streamer store
```

Maybe in the future I can create new commands.

### Tech

This bot uses a number of open source projects to work properly:

* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [Node Telegram Bot Api](https://github.com/yagop/node-telegram-bot-api) - Node.js module to interact with official Telegram Bot API.

### Installation

Install the dependencies.

```sh
$ cd bot
$ npm install
```

After this you need to inform streamer name and telegram token that you can get with [Bot Father](https://telegram.me/BotFather), so create `envConfig.json` inside constants folder.

```json
{
    "STREAMER": "Streamer_Name",
    "TELEGRAM_TOKEN": "Your_Telegram_Token"
}
```

To start bot:

```sh
$ npm start
```

### Deploy on Heroku

Fork this repositorie and follow [this step](https://devcenter.heroku.com/articles/github-integration).

For streamer name and telegram token, create `STREAMER` and `TELEGRAM_TOKEN` [environment variable on heroku](https://devcenter.heroku.com/articles/config-vars#managing-config-vars).

Remember to active worker dyno on heroku dashboar painel