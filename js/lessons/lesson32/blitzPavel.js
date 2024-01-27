"use strict";
// 1)
// Получить переменные name, age из обьекта с помощью деструктуризации и вывести в консоль
// const person = { name: "John", age: 30, occupation: "Engineer" };
// let { name, age } = person
// console.log(name, age); // Output: John 30

// 2)
// Получить 1 и 3 элементы массива с помощью деструктуризации и вывести в консоль
// const numbers = [10, 20, 30, 40, 50];
// const [first, , third] = numbers
// console.log(first, third); // Output: 10 30

// 3)
// // Изменить функцию, используя деструктуризацию, чтобы она могла вывести указанные переменные в консоль
// function displayUserInfo(user) {
//   const { username, email } = user;
//   console.log(`Username: ${username}, Email: ${email}`);
// }

// const user = { username: "john_doe", email: "john@example.com" };
// displayUserInfo(user); // Output: Username: john_doe, Email: john@example.com

// 4)
// Получить sity и state переменные с помощью деструктуризации и вывести в консоль
// const person = {
//   name: "Alice",
//   address: { city: "Wonderland", state: "Fantasy" },
// };
// const { city, state } = person.address;
// console.log(city, state); // Output: Wonderland Fantasy

// 5)
// Положить первый элемент в переменную firstFruit, а все остальные в массив remainingFruits (с помощью деструктуризации) и вывести в консоль
// const fruits = ["Apple", "Banana", "Orange", "Grapes"];
// const [firstFruit, ...remainingFruits] = fruits
// console.log(firstFruit, remainingFruits); // Output: Apple ['Banana', 'Orange', 'Grapes']

// 6)
// Задача: Создайте функцию, которая возвращает другую функцию, которая ведет счет.
// function createCounter() {
//   let counter = 0;
//   return function createCounter2() {
//     return counter++;
//   };
// }

// const counter = createCounter();
// console.log(counter()); // Output: 0
// console.log(counter()); // Output: 1

// 7)
// Задача: Создайте функцию, которая генерирует уникальные идентификаторы.

// function createUniqueIdGenerator() {
//   let id = "id_";
//   let count = -1;
//   return function createUniqueIdGenerator2() {
//     count++;
//     return id + count;
//   };
// }

// const generateUniqueId = createUniqueIdGenerator();
// console.log(generateUniqueId()); // Output: id_0
// console.log(generateUniqueId()); // Output: id_1

// 8)
// // Задача: Создайте функцию, которая кэширует результаты предыдущих вызовов.

// const print = (x) => `result is ${x}`;

// function createCachedFunction(func) {
//   let cache = new Map();

//   return function (elem) {
//     if (cache.has(elem)) {
//       console.log("берем из кэша");
//       return cache.get(elem);
//     }

//     console.log("НЕ берем из кэша");
//     let res = func(elem);

//     cache.set(elem, res);

//     return res;
//   };
// }

// const cachedFunction = createCachedFunction(print);
// console.log(cachedFunction("apple")); // Output: result for 'apple'
// console.log(cachedFunction("apple")); // Output: result for 'apple'
// console.log(cachedFunction("orange")); // Output: result for 'apple'
// console.log(cachedFunction("orange")); // Output: result for 'apple'
// console.log(cachedFunction("pineapple")); // Output: result for 'apple'
// console.log(cachedFunction("pineapple")); // Output: result for 'apple'

// 9)
// // Задача: Создайте функцию, которая возвращает функцию, привязанную к определенному контексту.

// function createBoundFunction(obj, func) {
//   return function (params) {
//     return func.call(obj);
//   };
// }

// const obj = { value: 42 };
// const getValue = createBoundFunction(obj, function () {
//   return this.value;
// });

// console.log(getValue()); // Output: 42

// 10)
// // Задача: Создайте функцию, которая возвращает другую функцию для локализации сообщений.

// function createMessageTranslator() {
//   const language = {
//     ru: "Привет",
//     es: "¡Hola!",
//     en: "Hello",
//   };

//   return function (lang) {
//     return language[lang];
//   };
// }

// const translate = createMessageTranslator();

// console.log(translate("ru")); // Output: Привет
// console.log(translate("es")); // Output: ¡Hola!
// console.log(translate("en")); // Output: Hello
