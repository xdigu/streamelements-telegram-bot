'use strict';

const
    bot = require('./src/telegram'),
    plugins = require('./src/plugins');


// Matches /start
bot.onText(/\/start/, (msg) => {
    const
        _chatId = msg.chat.id,
        startMSG = `Hello!\nI'm a bot writed with nodeJS, if you wanna see more about plx visite https://github.com/xdigu/`

    bot.sendMessage(_chatId, startMSG);
})

// Matches /points [nickName]
bot.onText(/\/points/, (msg, match) => {
    const
        _nickName = match.input.split(' ')[1],
        _chatId = msg.chat.id,
        invalidNickMSG = 'Inválid Nick name, try again\nEx: "/points xdigu"';

    if (_nickName) {
        plugins.getUserPoints(_nickName)
            .then(success => bot.sendMessage(_chatId, (
                success
                    ? success
                    : invalidNickMSG
            )))
            .catch(_ => {
                bot.sendMessage(_chatId, invalidNickMSG);
            })
    } else {
        bot.sendMessage(_chatId, invalidNickMSG);
    }
});

// Matches /items
bot.onText(/\/items/, (msg) => {
    const _chatId = msg.chat.id;

    plugins.getStoreitems(_chatId)
        .then(success => {
            success
                ? null
                : bot.sendMessage(_chatId, ('No items available on StreamElements store'))
        })
        .catch(error => {
            console.log(error);
            bot.sendMessage(_chatId, ('Error to get items on StreamElements store, plx try again later.'));
        });
});
