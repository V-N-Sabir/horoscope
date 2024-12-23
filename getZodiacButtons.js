// Требуем необходимые модули
//const { zodiacTextsToday, zodiacTextsTomorrow } = require('./const.js');

// Функция для создания кнопок для знаков зодиака (для "сегодня")
const getZodiacButtons = () => {
  const zodiacSigns = [
    { name: '♈ Овен', callback_data: 'zodiac_aries' },
    { name: '♉ Телец', callback_data: 'zodiac_taurus' },
    { name: '♊ Близнецы', callback_data: 'zodiac_gemini' },
    { name: '♋ Рак', callback_data: 'zodiac_cancer' },
    { name: '♌ Лев', callback_data: 'zodiac_leo' },
    { name: '♍ Дева', callback_data: 'zodiac_virgo' },
    { name: '♎ Весы', callback_data: 'zodiac_libra' },
    { name: '♏ Скорпион', callback_data: 'zodiac_scorpio' },
    { name: '♐ Стрелец', callback_data: 'zodiac_sagittarius' },
    { name: '♑ Козерог', callback_data: 'zodiac_capricorn' },
    { name: '♒ Водолей', callback_data: 'zodiac_aquarius' },
    { name: '♓ Рыбы', callback_data: 'zodiac_pisces' },
  ];

  // Формирование кнопок по 3 в ряду
  const buttons = [];
  for (let i = 0; i < zodiacSigns.length; i += 3) {
    buttons.push(
      zodiacSigns.slice(i, i + 3).map(sign => ({
        text: sign.name,
        callback_data: sign.callback_data,
      }))
    );
  }

  // Reply markup для отправки с сообщением
  return {
    reply_markup: {
      inline_keyboard: buttons,
    },
  };
};

// Функция для создания кнопок для знаков зодиака (для "завтра")
const getZodiacButtonsTomorrow = () => {
  const zodiacSigns = [
    { name: '♈ Овен', callback_data: 'zodiac_aries_tom' },
    { name: '♉ Телец', callback_data: 'zodiac_taurus_tom' },
    { name: '♊ Близнецы', callback_data: 'zodiac_gemini_tom' },
    { name: '♋ Рак', callback_data: 'zodiac_cancer_tom' },
    { name: '♌ Лев', callback_data: 'zodiac_leo_tom' },
    { name: '♍ Дева', callback_data: 'zodiac_virgo_tom' },
    { name: '♎ Весы', callback_data: 'zodiac_libra_tom' },
    { name: '♏ Скорпион', callback_data: 'zodiac_scorpio_tom' },
    { name: '♐ Стрелец', callback_data: 'zodiac_sagittarius_tom' },
    { name: '♑ Козерог', callback_data: 'zodiac_capricorn_tom' },
    { name: '♒ Водолей', callback_data: 'zodiac_aquarius_tom' },
    { name: '♓ Рыбы', callback_data: 'zodiac_pisces_tom' },
  ];

  // Формирование кнопок по 3 в ряду
  const buttons = [];
  for (let i = 0; i < zodiacSigns.length; i += 3) {
    buttons.push(
      zodiacSigns.slice(i, i + 3).map(sign => ({
        text: sign.name,
        callback_data: sign.callback_data,
      }))
    );
  }

  // Reply markup для отправки с сообщением
  return {
    reply_markup: {
      inline_keyboard: buttons,
    },
  };
};


const getZodiacButtonsWeek = () => {
  const zodiacSigns = [
    { name: '♈ Овен', callback_data: 'zodiac_aries_week' },
    { name: '♉ Телец', callback_data: 'zodiac_taurus_week' },
    { name: '♊ Близнецы', callback_data: 'zodiac_gemini_week' },
    { name: '♋ Рак', callback_data: 'zodiac_cancer_week' },
    { name: '♌ Лев', callback_data: 'zodiac_leo_week' },
    { name: '♍ Дева', callback_data: 'zodiac_virgo_week' },
    { name: '♎ Весы', callback_data: 'zodiac_libra_week' },
    { name: '♏ Скорпион', callback_data: 'zodiac_scorpio_week' },
    { name: '♐ Стрелец', callback_data: 'zodiac_sagittarius_week' },
    { name: '♑ Козерог', callback_data: 'zodiac_capricorn_week' },
    { name: '♒ Водолей', callback_data: 'zodiac_aquarius_week' },
    { name: '♓ Рыбы', callback_data: 'zodiac_pisces_week' },
  ];


  
  // Формирование кнопок по 3 в ряду
  const buttons = [];
  for (let i = 0; i < zodiacSigns.length; i += 3) {
    buttons.push(
      zodiacSigns.slice(i, i + 3).map(sign => ({
        text: sign.name,
        callback_data: sign.callback_data,
      }))
    );
  }

  // Reply markup для отправки с сообщением
  return {
    reply_markup: {
      inline_keyboard: buttons,
    },
  }
};

const getZodiacButtonsMonth = () => {
  const zodiacSigns = [
      { name: '♈ Овен', callback_data: 'zodiac_aries_month' },
      { name: '♉ Телец', callback_data: 'zodiac_taurus_month' },
      { name: '♊ Близнецы', callback_data: 'zodiac_gemini_month' },
      { name: '♋ Рак', callback_data: 'zodiac_cancer_month' },
      { name: '♌ Лев', callback_data: 'zodiac_leo_month' },
      { name: '♍ Дева', callback_data: 'zodiac_virgo_month' },
      { name: '♎ Весы', callback_data: 'zodiac_libra_month' },
      { name: '♏ Скорпион', callback_data: 'zodiac_scorpio_month' },
      { name: '♐ Стрелец', callback_data: 'zodiac_sagittarius_month' },
      { name: '♑ Козерог', callback_data: 'zodiac_capricorn_month' },
      { name: '♒ Водолей', callback_data: 'zodiac_aquarius_month' },
      { name: '♓ Рыбы', callback_data: 'zodiac_pisces_month' },
  ];
  // Формирование кнопок по 3 в ряду
  const buttons = [];
  for (let i = 0; i < zodiacSigns.length; i += 3) {
    buttons.push(
      zodiacSigns.slice(i, i + 3).map(sign => ({
        text: sign.name,
        callback_data: sign.callback_data,
      }))
    );
  }

  // Reply markup для отправки с сообщением
  return {
    reply_markup: {
      inline_keyboard: buttons,
    },
  }
};

// Экспорт функций
module.exports = {
  getZodiacButtons,
  getZodiacButtonsTomorrow,
  getZodiacButtonsWeek,
  getZodiacButtonsMonth,
};
