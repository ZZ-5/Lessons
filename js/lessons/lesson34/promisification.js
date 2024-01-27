// Промисификация
// Промисификация – это длинное слово для простого преобразования. Мы берём функцию, которая принимает колбэк и меняем её, чтобы она вместо этого возвращала промис.

// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

//   document.head.append(script);
// }

// использование:
// loadScript('path/script.js', (err, script) => {...})

// Давайте промисифицируем её. Новая функция loadScriptPromise(src) будет делать то же самое, но будет принимать только src (не callback) и возвращать промис.

// let loadScriptPromise = function(src) {
//   return new Promise((resolve, reject) => {
//     loadScript(src, (err, script) => {
//       if (err) reject(err)
//       else resolve(script);
//     });
//   })
// }

// использование:
// loadScriptPromise('path/script.js').then(...)

// На практике нам, скорее всего, понадобится промисифицировать не одну функцию, поэтому имеет смысл сделать для этого специальную «функцию-помощник».

// Мы назовём её promisify(f) – она принимает функцию для промисификации f и возвращает функцию-обёртку.

// Эта функция-обёртка делает то же самое, что и код выше: возвращает промис и передаёт вызов оригинальной f, отслеживая результат в своём колбэке:

// function promisify(f) {
//   return function (...args) { // возвращает функцию-обёртку
//     return new Promise((resolve, reject) => {
//       function callback(err, result) { // наш специальный колбэк для f
//         if (err) {
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       }

//       args.push(callback); // добавляем колбэк в конец аргументов f

//       f.call(this, ...args); // вызываем оригинальную функцию
//     });
//   };
// };

// // использование:
// let loadScriptPromise = promisify(loadScript);
// loadScriptPromise(...).then(...);

// Микрозадачи:
// Обработчики промисов .then/.catch/.finally всегда асинхронны.

// Даже когда промис сразу же выполнен, код в строках ниже .then/.catch/.finally будет запущен до этих обработчиков.

// let promise = Promise.resolve();

// promise.then(() => console.log("промис выполнен"));

// console.log("код выполнен"); // этот console.log показывается первым

// Обработка промисов всегда асинхронная, т.к. все действия промисов проходят через внутреннюю очередь «promise jobs», так называемую «очередь микрозадач (microtask queue)» (термин v8).

// Таким образом, обработчики .then/catch/finally вызываются после выполнения текущего кода.

// Если нам нужно гарантировать выполнение какого-то кода после .then/catch/finally, то лучше всего добавить его вызов в цепочку .then.

// В большинстве движков JavaScript, включая браузеры и Node.js, микрозадачи тесно связаны с так называемым «событийным циклом» и «макрозадачами». Так как они не связаны напрямую с промисами, то рассматриваются в другой части учебника, в главе Событийный цикл: микрозадачи и макрозадачи.
