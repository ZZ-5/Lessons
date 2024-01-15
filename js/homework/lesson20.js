// https://learn.javascript.ru/call-apply-decorators#primenenie-func-call-dlya-peredachi-konteksta
// Задачи:
// 1) Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.

// Например:
// function work(a, b) {
//   console.log(a + b); // произвольная функция или метод
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   console.log("call:" + args.join()); // "call:1,2", "call:4,5"
// }

// ваш код:

// call(thisArg, arg1, agr2), apply(thisArg, [arg1, arg2])
// function spy(func) {
//   spy.calls = [];

//   return function (...arr) {
//     spy.calls.push(arr);
//     return func.apply(this, arr);
//   };
// }

// let a = spy(work);

// a(1, 2); //
// a(3, 4); //
// a(5, 6); //
// a(7, 8); //

// console.log(spy.calls);

// Задача 2
// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:
// function f(x) {
//   console.log(x);
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс

// Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».

// В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.

// function delay(f, ms) {
//   return function (...args) {
//     const savedThis = this;

//     return setTimeout(() => {
//       f.apply(savedThis, args);
//     }, ms);
//   };
// }

// let f1000 = delay(f, 1000);
// let f2000 = delay(f, 2000);

// console.log(f1000);
// console.log(f2000);

// f1000("test");
// f2000("test2");

// Задача 3
// Результат декоратора debounce(f, ms) – это обёртка, которая откладывает вызовы f, пока не пройдёт ms миллисекунд бездействия (без вызовов, «cooldown period»), а затем вызывает f один раз с последними аргументами.

// function func() {
//   console.log("Пашка красава");
// }

// function debounce(f, ms) {
//   let timeout;

//   return function (params) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => f.apply(this, arguments), ms);
//   };
// }

// let a = debounce(func, 2000);
