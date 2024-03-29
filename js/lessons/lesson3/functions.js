"use strict";
// Функции

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Function Expression (функциональное выражение). Задаём функцию и сразу кладём её в переменную sayHi
// sayHi(2, 2);

// const sayHi = function (a, b) {
//   console.log(a + b);
//   console.log(arguments);
// };

// sayHi(2, 2);

// Function Declaration (обьявление функции). Задаем функцию и никуда её не присваеваем
// function sayHi() {
//   console.log("Привет");
// }

// Отличия:
// Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться
// Function Declaration может быть вызвана раньше, чем она объявлена.

// Примеры: sayHi("Вася");

// function sayHello(name) {
//   console.log(`Привет, ${name}`);
// }

// let sayHi = function (name) {
//   console.log(`Привет, ${name}`);
// };

// В строгом режиме, когда Function Declaration находится в блоке {...}, функция доступна везде внутри блока. Но не снаружи него.

// if (true) {
//   function showMe() {}
// }

// showMe();

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Arrow function (стрелочные функции) - более лаконичный синтаксис для создания функций, но имеющий некоторые отличия:
// 1. У стрелочной функции нет this - об этом узнаем позже
// 2. У стрелочной функции нет arguments
// Синтаксис: let func = (arg1, arg2, ...argN) => выражение;

// function sum(a, b) {
//   console.log(arguments);
// }

// function divide(a, b) {
//   console.log(arguments);

//   return a / b;
// }

// divide(9, 3);

// const sum = function (a, b) {
//   console.log(arguments);
// };

// sum(2, 2);

// const sum = (a, b) => {
//   console.log(arguments);
//   console.log(this);
// };

// sum(2, 2, 3, 4, 5);

// Многострочные:
// let sum = (a, b) => {
//   let result = a + b;
//   return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
// };
// console.log(sum(2, 2));

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Named Function Expression
// Поскольку функция - это обьект, у неё есть несколько полезных свойств:

// name - имя функции
// function sayHi() {
//   console.log("Hi");
// }

// // Что выведет?
// console.log(sayHi.name); // sayHi

// length - количество параметров функции

// function f1(a) {}

// function f2(a, b) {}

// function many(a, b, ...more) {
//   console.log(more);
// }
// many(2, 4, 5, 6, 7, 8);

// // что выведет?
// console.log(f1.length); // 1
// console.log(f2.length); // 2
// console.log(many.length); // 2

// пользовательские свойства
// function sayHi() {
//   console.log("Hi");

//   console.log("func counter ", counter);
//   let counter = 0;

//   // давайте посчитаем, сколько вызовов мы сделали
//   sayHi.counter++;
// }
// sayHi.counter = 0; // начальное значение

// sayHi(); // Hi
// sayHi(); // Hi

// console.log(`Вызвана ${sayHi.counter} раза`);
// console.log("Вызвана " + sayHi.counter + " раза");

// ВАЖНО: свойства не являются переменной. Если задать свойство counter и перменную внутри функции let counter, то они будут независимы

// Named Function Expression
// что будет выведено в консоль?
// let sayHi = function (who) {
//   console.log("who is ", who);
//   if (who) {
//     console.log(`Hello, ${who}`);
//   } else {
//     sayHi("Guest");
//   }
// };

// sayHi(); //

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// const arr = [3, 4, 5, 6, 7, 8, 9, 10];

// console.log(Math.max(...arr)); /// ... - spread оператор

// function showData(a, ...rest) { // ... - собираем остаточные параметры
//   console.log("a is ", a); // 1
//   console.log("rest is ", rest); //

//   console.log(arguments); //
// }
