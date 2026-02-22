require('dotenv').config();

const tgBotApi = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;

const bot = new tgBotApi(token, { polling: true });

bot.on('message', msg => {
    console.log(msg);
})