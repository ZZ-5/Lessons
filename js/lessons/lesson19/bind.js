"use strict";
// Привязка контекста
// При передаче методов объекта в качестве колбэков, например для setTimeout, возникает известная проблема – потеря this.
// https://learn.javascript.ru/bind#poterya-this

// let user = {
//   firstName: "Вася",
//   sayHi() {
//     console.log(`Привет, ${this.firstName}!`);
//   },
// };

// let pasha = {
//   firstName: "Паша",
// };

// Что выведет функция?
// let func = user.sayHi;

// console.log(typeof func);
// func(); // Ошибка в строгом режиме
// setTimeout(user.sayHi, 1000); // Привет, undefined!

// Решение 1: функция-обертка
// setTimeout(function () {
//   user.sayHi(); //
// }, 1000);

// Решение 2: привязка контекста с помощью bind:
// bind(контекст (т.е. обьект, к которому мы хотим привязать метод), массив предзаданных аргументов функции, которую мы привязываем)
// bind(this, arguments)

// func = func.bind(user);
// func();
// f = f.bind(pasha); // Важно что после первой привязки метод нельзя перепривязать с помощью bind
// f();
// setTimeout(f, 1000);

// Даже без setTimeout будет потеря контекста
// let a = user.sayHi; // присвоили метод
// a(); // вызвали метод без указания обьекта - this будет undefined и получим ошибку

// Можно привязать не только this, но и аргументы
// function mul(a, b, ...rest) {
//   console.log(rest);
//   console.log(arguments);

//   return a * b;
// }

// let double = mul.bind(null, 2, 3);

// console.log(double()); // = mul(2, 3) = 6
// console.log(double(4)); // = mul(2, 4) = 8

// Частичное применение без контекста
// Что если мы хотим зафиксировать некоторые аргументы, но не контекст this? Например, для метода объекта.
// function partial(func, ...argsBound) {
//   return function (...args) {
//     // (*)
//     return func.call(this, ...argsBound, ...args);
//   };
// }

// // использование:
// let user = {
//   firstName: "John",
//   say(time, phrase) {
//     console.log(`[${time}] ${this.firstName}: ${phrase}!`);
//   },
// };

// // добавляем частично применённый метод с фиксированным временем
// user.sayNow = partial(
//   user.say,
//   new Date().getHours() + ":" + new Date().getMinutes()
// );

// user.sayNow("Hello");
// // Что-то вроде этого:
// // [10:00] John: Hello!

// Задачи:
// 1) Что выведет функция?
// function f() {
//   console.log(this); // ?
// }

// let user = {
// g: f.bind(null),
// };
// user.g();

// let a = user.g;
// a();

// 2) Можем ли мы изменить this дополнительным связыванием? Что выведет этот код?
// function f() {
//   console.log(this.name);
// }

// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

// f();

// 3) В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
// function sayHi() {
//   console.log(this.name);
// }

// sayHi.test = 5;

// let obj = {
//   name: "Вася",
// };

// let bound = sayHi.bind(obj);

// console.log(bound.test); // что выведет? почему?

// 4) Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

// function askPassword(ok, fail) {
//   let password = "pasha";

//   if (password === "rockstar") {
//     ok();
//   } else {
//     fail();
//   }
// }

// let user = {
//   name: "Вася",
//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },
//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 5) Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".
// Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
//   let password = "rockstar";

//   if (password == "rockstar") {
//     ok();
//   } else {
//     fail();
//   }
// }

// let user = {
//   name: "John",

//   login(result) {
//     console.log(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?
