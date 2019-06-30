'use strict';

const
    Telegram = require('node-telegram-bot-api'),
    token = process.env.TELEGRAM_TOKEN || require('./constants/envConfig.json').TELEGRAM_TOKEN;


const bot = new Telegram(token, { polling: true });

console.log('Bot initialized');

module.exports = bot;
