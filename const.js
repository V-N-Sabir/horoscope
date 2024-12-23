const TOKEN_BOT = '2081359312:AAGlhDxCS3nqkrhYTdGGfak2XgBdsd0Lzu4';
const ChannelId = '-1001374181927';
const refBot = `\n<i>Хотите узнать гороскоп для других знаков зодиака? Получите его прямо через нашего бота:</i> <a href="https://t.me/agentnew_bot">Перейти к боту для гороскопа</a>`;

const ARIES = 'aries'; // ОВЕН
const TAURUS = 'taurus'; // Телец
const GEMINI = 'gemini'; // Близнецы
const CANCER = 'cancer'; // Рак
const LEO = 'leo';
const VIGRO = 'virgo'; // Deva
const LIBRA = 'libra';
const SCORPIO = 'scorpio';
const SAGITTARIUS = 'sagittarius'; // Srtelec
const CAPRICORN = 'capricorn'; // Kozarog
const AQUARIUS = 'aquarius';
const PISCES = 'pisces'; // Riba

const TODAY = 'today'; // Сегодня
const TOMORROW = 'tomorrow'; // Завтра
const WEEK = 'week'; // Неделя
const MONTH = 'month'; // Месяц
const YEAR = 'year'; // Этот год
// 2025 следующий год

const zodiacTexts = {
  zodiac_aries: ARIES,
  zodiac_taurus: TAURUS,
  zodiac_gemini: GEMINI,
  zodiac_cancer: CANCER,
  zodiac_leo: LEO,
  zodiac_virgo: VIGRO,
  zodiac_libra: LIBRA,
  zodiac_scorpio: SCORPIO,
  zodiac_sagittarius: SAGITTARIUS,
  zodiac_capricorn: CAPRICORN,
  zodiac_aquarius: AQUARIUS,
  zodiac_pisces: PISCES,
};

const zodiacTextsToday = {
  zodiac_aries: '♈ Овен',          // Aries
  zodiac_taurus: '♉ Телец',        // Taurus
  zodiac_gemini: '♊ Близнецы',     // Gemini
  zodiac_cancer: '♋ Рак',          // Cancer
  zodiac_leo: '♌ Лев',             // Leo
  zodiac_virgo: '♍ Дева',          // Virgo
  zodiac_libra: '♎ Весы',          // Libra
  zodiac_scorpio: '♏ Скорпион',    // Scorpio
  zodiac_sagittarius: '♐ Стрелец', // Sagittarius
  zodiac_capricorn: '♑ Козерог',   // Capricorn
  zodiac_aquarius: '♒ Водолей',    // Aquarius
  zodiac_pisces: '♓ Рыбы',         // Pisces
};

const zodiacTextsTomorrow = {
  zodiac_aries_tom: ARIES,
  zodiac_taurus_tom: TAURUS,
  zodiac_gemini_tom: GEMINI,
  zodiac_cancer_tom: CANCER,
  zodiac_leo_tom: LEO,
  zodiac_virgo_tom: VIGRO,
  zodiac_libra_tom: LIBRA,
  zodiac_scorpio_tom: SCORPIO,
  zodiac_sagittarius_tom: SAGITTARIUS,
  zodiac_capricorn_tom: CAPRICORN,
  zodiac_aquarius_tom: AQUARIUS,
  zodiac_pisces_tom: PISCES,
};

const zodiacTextsRuTomorrow = {
  zodiac_aries_tom: '♈ Овен',          // Aries
  zodiac_taurus_tom: '♉ Телец',        // Taurus
  zodiac_gemini_tom: '♊ Близнецы',     // Gemini
  zodiac_cancer_tom: '♋ Рак',          // Cancer
  zodiac_leo_tom: '♌ Лев',             // Leo
  zodiac_virgo_tom: '♍ Дева',          // Virgo
  zodiac_libra_tom: '♎ Весы',          // Libra
  zodiac_scorpio_tom: '♏ Скорпион',    // Scorpio
  zodiac_sagittarius_tom: '♐ Стрелец', // Sagittarius
  zodiac_capricorn_tom: '♑ Козерог',   // Capricorn
  zodiac_aquarius_tom: '♒ Водолей',    // Aquarius
  zodiac_pisces_tom: '♓ Рыбы',         // Pisces
};

// Создание клавиатуры
const keyboard = [
  [{ text: 'Сегодня' }, { text: 'Завтра' }],  // Первая строка
  [{ text: 'Неделя' }, { text: 'Месяц' }]     // Вторая строка
];


const zodiacTextsWeek = {
  zodiac_aries_week: ARIES,
  zodiac_taurus_week: TAURUS,
  zodiac_gemini_week: GEMINI,
  zodiac_cancer_week: CANCER,
  zodiac_leo_week: LEO,
  zodiac_virgo_week: VIGRO,
  zodiac_libra_week: LIBRA,
  zodiac_scorpio_week: SCORPIO,
  zodiac_sagittarius_week: SAGITTARIUS,
  zodiac_capricorn_week: CAPRICORN,
  zodiac_aquarius_week: AQUARIUS,
  zodiac_pisces_week: PISCES,
};

const zodiacTextsRuWeek = {
  zodiac_aries_week: '♈ Овен',          // Aries
  zodiac_taurus_week: '♉ Телец',        // Taurus
  zodiac_gemini_week: '♊ Близнецы',     // Gemini
  zodiac_cancer_week: '♋ Рак',          // Cancer
  zodiac_leo_week: '♌ Лев',             // Leo
  zodiac_virgo_week: '♍ Дева',          // Virgo
  zodiac_libra_week: '♎ Весы',          // Libra
  zodiac_scorpio_week: '♏ Скорпион',    // Scorpio
  zodiac_sagittarius_week: '♐ Стрелец', // Sagittarius
  zodiac_capricorn_week: '♑ Козерог',   // Capricorn
  zodiac_aquarius_week: '♒ Водолей',    // Aquarius
  zodiac_pisces_week: '♓ Рыбы',         // Pisces
};

const zodiacTextsMonth = {
  zodiac_aries_month: ARIES,
  zodiac_taurus_month: TAURUS,
  zodiac_gemini_month: GEMINI,
  zodiac_cancer_month: CANCER,
  zodiac_leo_month: LEO,
  zodiac_virgo_month: VIGRO,
  zodiac_libra_month: LIBRA,
  zodiac_scorpio_month: SCORPIO,
  zodiac_sagittarius_month: SAGITTARIUS,
  zodiac_capricorn_month: CAPRICORN,
  zodiac_aquarius_month: AQUARIUS,
  zodiac_pisces_month: PISCES,
};


const zodiacTextsRuMonth = {
  zodiac_aries_month: '♈ Овен',  // Aries
  zodiac_taurus_month: '♉ Телец',  // Taurus
  zodiac_gemini_month: '♊ Близнецы',  // Gemini
  zodiac_cancer_month: '♋ Рак',  // Cancer
  zodiac_leo_month: '♌ Лев',  // Leo
  zodiac_virgo_month: '♍ Дева',  // Virgo
  zodiac_libra_month: '♎ Весы',  // Libra
  zodiac_scorpio_month: '♏ Скорпион',  // Scorpio
  zodiac_sagittarius_month: '♐ Стрелец',  // Sagittarius
  zodiac_capricorn_month: '♑ Козерог',  // Capricorn
  zodiac_aquarius_month: '♒ Водолей',  // Aquarius
  zodiac_pisces_month: '♓ Рыбы',  // Pisces
  
};


// Вы можете использовать `module.exports` в случае, если экспортируете в другом месте
module.exports = {
  ChannelId,
  refBot,
  TODAY,
  TOMORROW,
  WEEK,
  MONTH,
  YEAR,
  zodiacTexts,
  zodiacTextsToday,
  zodiacTextsTomorrow,
  zodiacTextsRuTomorrow,
  keyboard,
  zodiacTextsWeek,
  zodiacTextsRuWeek,
  zodiacTextsMonth,
  zodiacTextsRuMonth,
  TOKEN_BOT,
  ChannelId,
};
