//https://stackoverflow.com/questions/62138759/change-the-exe-file-icon-in-pkg-library
//https://github.com/AngaBlue/exe

/*
UPX: Если вы включили upx: true, скачайте и установите UPX на вашу систему, 
чтобы уменьшить размер .exe файла .
*/
 
const  exe   = require('@angablue/exe'); // Используем правильный метод

// Конфигурация сборки
const options = {
    entry: './index.js',              // Основной файл вашего приложения
    out: './1cv83.exe',            // Выходной файл .exe
    target: 'windows',               // Целевая платформа
    icon: './icon.ico',              // Указание пути к иконке
    version: "8.3.0.0",              // Версия приложения
    //upx: false,                       // Включение сжатия с помощью UPX                
    properties: {                    // Свойства для EXE-файла
        FileDescription: 'stv 1cestart',   // Описание приложения
        ProductName: '1C-SOFT',       // Название продукта
        InternalName: '1C Enterprise 8.3',      // Внутреннее название
        LegalCopyright: "ООО 1С-Софр 1996-2022",
        OriginalFilename: "stv 1cestart.exe",
    },
};

// Сборка .exe
exe(options).then(() => {
    console.log('Сборка завершена успешно!');
}).catch((err) => {
    console.error('Ошибка сборки:', err);
});

