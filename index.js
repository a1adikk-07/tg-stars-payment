require('dotenv').config();

const tgBotApi = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;

const bot = new tgBotApi(token, { polling: true });

bot.on('message', msg => {
    const chatId = msg.chat.id;
    const msgText = msg.text;

    if (msgText === '/start') {
        bot.sendSticker(chatId, 'https://cdn.cdnstep.com/veHqCAZALku5D0hmtCUf/4.thumb128.webp');
        bot.sendMessage(chatId, `Hello, ${msg.from.first_name}!\n\nWelcome to the test Telegram bot with a payment system using Telegram Stars.`);
    }

    console.log(msg);
})