"use strict";
// Допустим мы хотим загрузить на страницу скрипт с помощью js:

// callback - функция, которая передается в качестве аргумента другой функции. Другими словами callback - это функция обратного вызова
// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => callback(script);
//   document.head.append(script);
// }

// loadScript("/my/script.js", function () {
//   // эта функция вызовется после того, как загрузится скрипт
//   newFunction(); // теперь всё работает
//   // ...
// });

// Как нам загрузить два скрипта один за другим: сначала первый, а за ним второй?

// loadScript("/my/script.js", function (script) {
//   console.log(`Здорово, скрипт ${script.src} загрузился, загрузим ещё один`);

//   loadScript("/my/script2.js", function (script) {
//     console.log(`Здорово, второй скрипт загрузился`);
//   });
// });

// Когда внешняя функция loadScript выполнится, вызовется та, что внутри колбэка.

// А что если нам нужно загрузить ещё один скрипт?..

// loadScript("/my/script.js", function (script) {
//   loadScript("/my/script2.js", function (script) {
//     loadScript("/my/script3.js", function (script) {
//       // ...и так далее, пока все скрипты не будут загружены
//       loadScript("/my/script4.js", function (script) {
//         // ...и так далее, пока все скрипты не будут загружены
//       });
//     });
//   });
// });

// Адская пирамида вызовов (callback hell)
// На первый взгляд это рабочий способ написания асинхронного кода. Так и есть. Для одного или двух вложенных вызовов всё выглядит нормально.

// Но для нескольких асинхронных действий, которые нужно выполнить друг за другом, код выглядит вот так:
// loadScript("1.js", function (error, script) {
//   if (error) {
//     handleError(error);
//   } else {
//     // ...
//     loadScript("2.js", function (error, script) {
//       if (error) {
//         handleError(error);
//       } else {
//         // ...
//         loadScript("3.js", function (error, script) {
//           if (error) {
//             handleError(error);
//           } else {
//             // ...и так далее, пока все скрипты не будут загружены (*)
//           }
//         });
//       }
//     });
//   }
// });

// Мы можем попытаться решить эту проблему, изолируя каждое действие в отдельную функцию, вот так:
// loadScript('1.js', step1);

// function step1(error, script) {
//   if (error) {
//     handleError(error);
//   } else {
//     // ...
//     loadScript('2.js', step2);
//   }
// }

// function step2(error, script) {
//   if (error) {
//     handleError(error);
//   } else {
//     // ...
//     loadScript('3.js', step3);
//   }
// }

// function step3(error, script) {
//   if (error) {
//     handleError(error);
//   } else {
//     // ...и так далее, пока все скрипты не будут загружены (*)
//   }
// };

// Промисы (обещания, если переводить напрямую)
// Promise - это специальный обьект в js, который, при создании, выполняет функцию, переданную ему в качестве аргумента, а она, в свою очередь, выполняет тот, или иной callback в зависимости от успеха/ошибки.
// Затем результат промиса надо обратать с помощью методов then, catch, finally

// Синтаксис:
// let promise = new Promise(function (resolve, reject) {
//   // функция-исполнитель (executor)
//   // "певец"
// });

// Пример
// Давайте вспомним, как выглядел вариант с колбэками:
// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

//   document.head.append(script);
// }

// Теперь перепишем её, используя Promise.
// function loadScript(src) {
//   return new Promise(function (resolve, reject) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

//     document.head.append(script);
//   });
// }

// // Применение:
// let promise = loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
// );

// promise.then(
//   (script) => console.log(`${script.src} загружен!`),
//   (error) => console.log(`Ошибка: ${error.message}`)
// );

// // promise.then(script => alert('Ещё один обработчик...'));

// const getData = () => {
//   let res = { name: "Pasha" };

//   return res;
// };

// let promise1 = new Promise(function (resolve, reject) {
//   try {
//     let res = getData();

//     resolve(res);
//   } catch (e) {
//     reject(e);
//   }
// });

// promise1
//   .then(
//     (res) => {
//       return res;
//     },
//     (err) => {
//       throw new Error(err);
//     }
//   )
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     clear();
//   });

// Задачи:
// 1)
// Что выведет код ниже?
// Что выведет код ниже?
// let promise = new Promise(function (resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });

// console.log(promise);

// promise.then(console.log); // 1
