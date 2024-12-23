const fs = require('fs');
const path = require('path');

// Путь к файлу с пользователями
const usersFilePath = path.join(__dirname, 'getusers.json');

// Функция для загрузки пользователей из файла
function loadUsers() {
  if (fs.existsSync(usersFilePath)) {
    const data = fs.readFileSync(usersFilePath, 'utf-8');
    return JSON.parse(data); // Загружаем данные как массив
  }
  return []; // Если файл не существует, возвращаем пустой массив
}

// Функция для сохранения пользователей в файл
function saveUsers(users) {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf-8'); // Сохраняем в JSON формате
}

// Функция для добавления пользователя, если его нет
function addUserIfNotExists(msg) {
  const users = loadUsers(); // Загружаем существующих пользователей
  
  const user = {
    id: msg.from.id,
    first_name: msg.from.first_name || '',
    last_name: msg.from.last_name || '',
    username: msg.from.username || '',
  };
  
  // Проверяем, есть ли пользователь в списке
  const isUserExists = users.some((u) => u.id === user.id);
  if (!isUserExists) {
    users.push(user); // Добавляем пользователя
    saveUsers(users); // Сохраняем обновленный массив
  }
}

// Экспортируемая функция для проверки существования файла
function sendFile() {
  if (fs.existsSync(usersFilePath)) {
    return fs.createReadStream(usersFilePath); // Используем поток
  } else {
    return null;
  }
}

// Экспортируем функции
module.exports = {
  addUserIfNotExists,
  sendFile
};
