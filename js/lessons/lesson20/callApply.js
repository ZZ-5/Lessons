"use strict";

// let obj = {
//   name: "Alex",
//   age: 29,
//   play: function (game, game2) {
//     console.log(`Меня зовут ${this.name} и я умею играть в ${game} и ${game2}`);
//   },
// };

// let obj2 = {
//   name: "Serg",
// };

// let func = obj.play;
// // func = func.bind(obj);

// // Функция call также как и bind помогает привязать контекст, но не жестко к функции, а к вызову этой функции.
// // Синтаксис: func.call(thisArg, arg1, arg2, ..., argn)
// func.call(obj, "манчкин", "ужас аркхэма");
// func.call(obj2, "Baldur Gates 3", "Divinity 2");

// // Функция apply также как и call помогает привязать контекст, но не жестко к функции, а к вызову этой функции.
// // Синтаксис: func.call(thisArg, [arg1, arg2, ..., argn])
// func.apply(obj, ["DnD", "Цитадели"]);

// Прозрачное кэширование
// function slow(x) {
//   // здесь могут быть ресурсоёмкие вычисления
//   console.log(`Called with ${x}`);
//   return x;
// }

// function cachingDecorator(func) {
//   let cache = new Map();

//   return function (x) {
//     if (cache.has(x)) {
//       // если кеш содержит такой x,
//       return cache.get(x); // читаем из него результат
//     }

//     let result = func(x); // иначе, вызываем функцию

//     cache.set(x, result); // и кешируем (запоминаем) результат
//     return result;
//   };
// }

// let decoratedSlow = cachingDecorator(slow);

// console.log(decoratedSlow(1)); // decoratedSlow(1) кешируем
// console.log("Again: " + decoratedSlow(1)); // возвращаем из кеша

// console.log(decoratedSlow(2)); // decoratedSlow(2) кешируем
// console.log("Again: " + decoratedSlow(2)); // возвращаем из кеша

// сделаем worker.slow кеширующим
// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     // здесь может быть страшно тяжёлая задача для процессора
//     console.log("Called with " + x);
//     return x * this.someMethod(); // (*)
//   },
// };

// // тот же код, что и выше
// function cachingDecorator(func) {
//   let cache = new Map();

//   return function (x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }

//     let result = func.call(worker, x); // (**)
//     cache.set(x, result);

//     return result;
//   };
// }

// console.log(worker.slow(1)); // оригинальный метод работает
// worker.slow = cachingDecorator(worker.slow); // теперь сделаем его кеширующим
// console.log(worker.slow(2)); //
