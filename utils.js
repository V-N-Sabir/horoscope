const { TODAY, TOMORROW, WEEK, MONTH } = require("./const");

// Функция для получения текущей даты в формате dd.mm.yyyy
const getCurrentDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0'); // Форматируем день
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Форматируем месяц (месяцы от 0 до 11)
  const year = today.getFullYear(); // Получаем год

  return `${day}.${month}.${year}`;
};

// Функция для получения завтрашней даты в формате dd.mm.yyyy
const getTomorrowDate = () => {
  const today = new Date();
  today.setDate(today.getDate() + 1); // увеличиваем дату на 1, чтобы получить завтрашний день

  const day = String(today.getDate()).padStart(2, '0'); // добавляем ведущий ноль, если нужно
  const month = String(today.getMonth() + 1).padStart(2, '0'); // месяцы начинаются с 0, поэтому добавляем 1
  const year = today.getFullYear();

  return `${day}.${month}.${year}`;
};

function getWeekDateRange() {
  const now = new Date();

  // Получаем текущий день недели (0 - воскресенье, 1 - понедельник, ...)
  const currentDay = now.getDay();

  // Определяем смещение для начала и конца недели
  const diffToMonday = currentDay === 0 ? -6 : 1 - currentDay; // Если сегодня воскресенье, начинаем с понедельника предыдущей недели
  const diffToSunday = currentDay === 0 ? 0 : 7 - currentDay;

  // Рассчитываем даты начала (понедельник) и конца (воскресенье) недели
  const monday = new Date(now);
  monday.setDate(now.getDate() + diffToMonday);

  const sunday = new Date(now);
  sunday.setDate(now.getDate() + diffToSunday);

  // Форматируем даты в формате "ДД.ММ.ГГГГ"
  const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы в JavaScript начинаются с 0
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
  };

  return `С ${formatDate(monday)} по ${formatDate(sunday)}`;
}

//console.log(getWeekDateRange());



function getMonthDateRange() {
  const now = new Date();

  // Определяем первый и последний дни текущего месяца
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  // Форматируем даты в формате "ДД.ММ.ГГГГ"
  const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы в JavaScript начинаются с 0
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
  };

  return `С ${formatDate(firstDay)} по ${formatDate(lastDay)}`;
}

//console.log(getMonthDateRange());


function getStringDate(day='') {

  let dateString = ''
  if (day === TODAY) {
    dateString = getCurrentDate()
  } else if(day === TOMORROW) {
    dateString = getTomorrowDate()
  } else if(day === WEEK) {
    dateString = getWeekDateRange()
  } else if(day === MONTH) {
    dateString = getMonthDateRange()
  }
  return dateString
}

// Экспорт функций
module.exports = {
  getStringDate
};
