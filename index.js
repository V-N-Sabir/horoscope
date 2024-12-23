//const express = require('express');
const TelegramApi = require('node-telegram-bot-api');
const cron = require('node-cron');
const dotenv = require('dotenv');
//const https = require('https'); // Используем встроенный https для запросов
const { addUserIfNotExists, sendFile } = require('./jsonWrite.js');
const { getZodiacButtons, getZodiacButtonsTomorrow, getZodiacButtonsWeek, getZodiacButtonsMonth } = require('./getZodiacButtons.js');
const { zodiacTexts, zodiacTextsToday, zodiacTextsTomorrow, zodiacTextsRuTomorrow,
        refBot, keyboard, TODAY, TOMORROW, 
        zodiacTextsWeek,
        zodiacTextsRuWeek,
        WEEK,
        zodiacTextsMonth,
        zodiacTextsRuMonth,
        MONTH,
        TOKEN_BOT,
        ChannelId} = require('./const.js');
const { fetchHoroscopeAndSend } = require('./pars.js');

// Загрузка переменных из .env
dotenv.config();
//const app = express();

// Просто привязываем Express к порту, чтобы избежать ошибок с Render
/*
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
*/

process.on('uncaughtException', (err) => {
  console.error('Необработанная ошибка:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Необработанное отклонение:', promise, 'Причина:', reason);
});


console.log("server working")

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || TOKEN_BOT
const bot = new TelegramApi(TELEGRAM_BOT_TOKEN, { polling: true });

const sendMessageTg = async (text = '') => {

  try {
    await bot.sendMessage(ChannelId, `${text}`, { parse_mode: 'HTML' });
  } catch (error) {
    console.log("error_TG", error);
  }
};


// Отправка гороскопа в канал
const sendHoroscopeInTheChannel = async () => {
  const msg = await fetchHoroscopeAndSend();
  const text = `${msg}\n${refBot}`;
  sendMessageTg(text);
};

// Планируем задачу, которая будет запускаться каждый день в 08:00 по времени GMT+5
cron.schedule('0 8 * * *', sendHoroscopeInTheChannel, {
  scheduled: true,
  timezone: "Asia/Kolkata" // Устанавливаем нужную временную зону (GMT+5)
});

// Обработка всех остальных сообщений
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  if (msg.text === '/start') {
    // Добавляем пользователя в файл, если его нет
    addUserIfNotExists(msg);
    await bot.sendMessage(chatId, 'На какой период, нужен гороскоп ?', {
      reply_markup: {
        keyboard: keyboard,
        one_time_keyboard: true, // Закрыть клавиатуру после выбора
        resize_keyboard: true,   // Автоматически подогнать размер клавиатуры
      }
    });
  } else if (msg.text === 'Сегодня') {
    await bot.sendMessage(chatId, 'Гороскоп на сегодня. Выберите ваш знак зодиака:', getZodiacButtons());
  } else if (msg.text === 'Завтра') {
    await bot.sendMessage(chatId, 'Гороскоп на завтра. Выберите ваш знак зодиака:', getZodiacButtonsTomorrow());
  } else if (msg.text === 'Неделя') {
    //await bot.sendMessage(chatId, 'Данный раздел в процессе разработки');
    await bot.sendMessage(chatId, 'Гороскоп на неделю. Выберите ваш знак зодиака:', getZodiacButtonsWeek());
  }  else if ( msg.text === 'Месяц') {
    //await bot.sendMessage(chatId, 'Данный раздел в процессе разработки');
    await bot.sendMessage(chatId, 'Гороскоп на месяц. Выберите ваш знак зодиака:', getZodiacButtonsMonth());
  } else if (msg.text === 'polling_error') {
    console.error('Polling Error:', error);
  } else if (msg.text === '/getfile') {
    // Вызываем функцию для отправки файла
    const fileStream = sendFile();
    if (fileStream) {
      try {
        await bot.sendDocument(chatId, fileStream);
        await bot.sendMessage(chatId, 'Файл успешно отправлен!');
      } catch (error) {
        console.error('Ошибка при отправке файла:', error);
        await bot.sendMessage(chatId, 'Произошла ошибка при отправке файла.');
      }
    }
  } else if (msg.text === '/channel') {
    sendHoroscopeInTheChannel();
  } else {
    bot.sendMessage(chatId, 'Получил ваше сообщение');
  }
});

// Обработка нажатия на кнопки
bot.on('callback_query', async (query) => {
  const chatId = query.message.chat.id;
  const zodiacKey = query.data; // Получаем callback_data из кнопки
  let name = '';
  const ChannelId = process.env.ChannelId || '-1002202756768'
  let msgTomorrow = 'Попробуйте, неполадки на сервере.'
  
  // Проверяем, есть ли текст для выбранного знака
  if (zodiacTexts[zodiacKey]) {
    name = zodiacTextsToday[zodiacKey];
    const msgBot = await fetchHoroscopeAndSend(zodiacTexts[zodiacKey],name, TODAY);
    const msg = (ChannelId === chatId) ? `${msgBot}\n${refBot}` : msgBot;
    bot.sendMessage(chatId, msg, { parse_mode: 'HTML' }); // Отправляем текст для выбранного знака
  } else if (zodiacTextsTomorrow[zodiacKey]) { 
    name = zodiacTextsRuTomorrow[zodiacKey];
    msgTomorrow = await  fetchHoroscopeAndSend(zodiacTexts[zodiacKey],name, TOMORROW)
    bot.sendMessage(chatId, msgTomorrow, { parse_mode: 'HTML' }); // Отправляем текст для выбранного знака
  } else if (zodiacTextsWeek[zodiacKey]) { 
    name = zodiacTextsRuWeek[zodiacKey];
    msgTomorrow = await  fetchHoroscopeAndSend(zodiacTexts[zodiacKey],name, WEEK)
    bot.sendMessage(chatId, msgTomorrow, { parse_mode: 'HTML' });
  } else if (zodiacTextsMonth[zodiacKey]) { 
    name = zodiacTextsRuMonth[zodiacKey];
    msgTomorrow = await  fetchHoroscopeAndSend(zodiacTexts[zodiacKey],name, MONTH)
    bot.sendMessage(chatId, msgTomorrow, { parse_mode: 'HTML' });
  } else {
    bot.sendMessage(chatId, 'К сожалению, информация недоступна.');
  }

  // Обязательно подтверждаем обработку callback_query
  bot.answerCallbackQuery(query.id);
});

bot.on('polling_error', (error) => {
  console.error('Polling Error (запущен ещё один экземпляр бота):', error.code, error.message);
});
