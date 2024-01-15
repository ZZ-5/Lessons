// Посмотреть видео: https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=389s&ab_channel=JSConf
// Разобрать видео и написать конспект прямо в этот файл
// прочитать статью https://learn.javascript.ru/event-loop#makrozadachi-i-mikrozadachi

// Что выведется?
// setTimeout(function timeout() {
//   console.log("Таймаут");
// }, 0);

// let p = new Promise(function (resolve, reject) {
//   console.log("Создание промиса");
//   resolve();
// });

// p.then(function () {
//   console.log("Обработка промиса");
// });

// console.log("Конец скрипта");

// Создание промиса Конец скрипта Обработка промиса Таймаут

// Что выведется?
// console.log(1); // выполнится сразу

// setTimeout(() => console.log(2)); // на таймер

// Promise.resolve().then(() => console.log(3)); // в очередь микротасок

// Promise.resolve().then(() => setTimeout(() => console.log(4))); // в очередь микротасок

// Promise.resolve().then(() => console.log(5)); // в очередь микротасок

// setTimeout(() => console.log(6)); // на таймер

// console.log(7); // выполнится сразу

// // 1 7 3 5 2 6 4
