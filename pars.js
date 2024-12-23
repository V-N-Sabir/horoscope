const https = require('https');
const cheerio = require('cheerio');
const { getStringDate } = require('./utils.js');
const { TODAY } = require('./const.js');

// Функция для получения гороскопа и отправки сообщения
exports.fetchHoroscopeAndSend = async (sign = 'libra', name = 'Весы', day = 'today') => {
  return new Promise((resolve, reject) => {
    // Формируем URL для запроса
    const url = `https://horo.mail.ru/prediction/${sign}/${day}`;
    //console.log(`Запрос на URL: ${url}`);

    // Делаем запрос на сайт с использованием встроенного https модуля
    https.get(url, { 
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' },
    }, (res) => {
      let data = '';
      
      // Если сервер отвечает редиректом (301 или 302), получаем новый URL
      if (res.statusCode === 301 || res.statusCode === 302) {
        const redirectUrl = res.headers.location; // Новый URL для запроса
        //console.log(`Редирект на новый URL: ${redirectUrl}`);

        // Выполняем повторный запрос по новому URL
        https.get(redirectUrl, { 
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' }
        }, (redirectRes) => {
          let redirectData = '';

          // Собираем данные с редиректированного запроса
          redirectRes.on('data', (chunk) => {
            redirectData += chunk;
          });

          // Когда данные получены, обрабатываем их
          redirectRes.on('end', () => {
            //console.log(`Получены данные с редиректа: ${redirectData.substring(0, 500)}`);
            try {
              // Загружаем HTML в cheerio
              const $ = cheerio.load(redirectData);

              // Извлекаем текст из нужных элементов
              const classTexts = $('.b6a5d4949c')
                .map((_, element) => $(element).text().trim())
                .get()
                .join('\n\n');

              // Если данных не найдено, отправляем ошибку
              if (!classTexts) {
                console.error('Не удалось извлечь данные с сайта.');
                return reject('Не удалось извлечь гороскоп');
              }

              // Формирование сообщения для Telegram
              const date = getStringDate(day)
              const msg = `<b>${name} ${date}</b>\n\n${classTexts}`;

              // Логируем результат
              console.log('Гороскоп отправлен tt:\n', );//msg

              resolve(msg);
            } catch (error) {
              console.error('Ошибка при извлечении данных из HTML:', error);
              reject('Ошибка при получении гороскопа');
            }
          });
        }).on('error', (err) => {
          console.error('Ошибка при запросе редиректа:', err);
          reject('Ошибка при получении гороскопа');
        });
      } else {
        // Если редиректа нет, продолжаем обработку исходных данных
        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          console.log(`Получены данные: ${data.substring(0, 500)}`);
          try {
            // Загружаем HTML в cheerio
            const $ = cheerio.load(data);

            // Извлекаем текст из нужных элементов
            const classTexts = $('.b6a5d4949c')
              .map((_, element) => $(element).text().trim())
              .get()
              .join('\n\n');

            // Если данных не найдено, отправляем ошибку
            if (!classTexts) {
              console.error('Не удалось извлечь данные с сайта.');
              return reject('Не удалось извлечь гороскоп');
            }

            // Формирование сообщения для Telegram
            const date = getStringDate(day)
            const msg = `<b>${name} ${date}</b>\n\n${classTexts}`;

            // Логируем результат
            console.log('Гороскоп отправлен:\n', );//msg

            resolve(msg);
          } catch (error) {
            console.error('Ошибка при извлечении данных из HTML:', error);
            reject('Ошибка при получении гороскопа');
          }
        });
      }

      res.on('error', (error) => {
        console.error('Ошибка при запросе:', error);
        reject('Ошибка при получении гороскопа');
      });
    });
  });
};
