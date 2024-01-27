"use strict";
// Исправьте код, чтобы он корректно работал для любого обьекта.
// let object = {
//   name: "Alex",
//   lastName: "Alexov",
// };

// function showFullName() {
//   console.log(`Hello, i am ${this.name} ${this.lastName}`);
// }

// showFullName.call(object);

// Исправьте код, чтобы любой вызов метода работал только с Alex Alexov
// let object = {
//   name: "Alex",
//   lastName: "Alexov",
// };

// let object1 = {
//   name: "Pavel",
//   lastName: "Pavelov",
// };

// let object2 = {
//   name: "Serg",
//   lastName: "Sergov",
// };

// function showFullName() {
//   console.log(`Hello, i am ${this.name} ${this.lastName}`);
// }

// showFullName = showFullName.bind(object);

// object.showFullName = showFullName;
// object1.showFullName = showFullName;
// object2.showFullName = showFullName;

// object.showFullName(); // Должно вывести Hello, i am Alex Alexov
// object1.showFullName(); // Должно вывести Hello, i am Alex Alexov
// object2.showFullName(); // Должно вывести Hello, i am Alex Alexov

// 1)
// Task: Extract the 'name' and 'age' properties from the 'person' object.
// const person = { name: "John", age: 30, occupation: "Engineer" };
// const { name, age } = person;
// console.log(name, age); // Output: John 30

// 2)
// Task: Extract the first and third elements from the 'numbers' array.
// const numbers = [10, 20, 30, 40, 50];
// const [first, , third] = person;
// console.log(first, third); // Output: 10 30

// 3)
// Task: Modify the function to use destructuring to extract 'username' and 'email' from the 'user' parameter.
// function displayUserInfo(user) {
//   const { username, email } = user;
//   console.log(`Username: ${username}, Email: ${email}`);
// }

// const user = { username: "john_doe", email: "john@example.com" };
// displayUserInfo(user); // Output: Username: john_doe, Email: john@example.com

// 4)
// Task: Extract 'city' and 'state' properties from the 'address' object.
// const person = {
//   name: "Alice",
//   address: { city: "Wonderland", state: "Fantasy" },
// };
// const {
//   address: { city, state },
// } = person;
// console.log(city, state); // Output: Wonderland Fantasy

// 5)
// Task: Use array destructuring with the rest operator to extract the first element and the remaining elements in separate variables.
// const fruits = ["Apple", "Banana", "Orange", "Grapes"];
// const [firstFruit, ...remainingFruits] = fruits;
// console.log(firstFruit, remainingFruits); // Output: Apple ['Banana', 'Orange', 'Grapes']

// 6)
// Задача: Создайте функцию, которая возвращает другую функцию, которая ведет счет.
// function createCounter() {
//   let count = 0;
//   return function counter() {
//     return count++;
//   };
// }
// const counter = createCounter();
// console.log(counter()); // Output: 0
// console.log(counter()); // Output: 1

// 7)
// Задача: Создайте функцию, которая генерирует уникальные идентификаторы.

// function createUniqueIdGenerator() {
//   let string = "id_";
//   let count = -1;
//   return function counter() {
//     count++;
//     return string + count;
//   };
// }

// const generateUniqueId = createUniqueIdGenerator();
// console.log(generateUniqueId()); // Output: id_0
// console.log(generateUniqueId()); // Output: id_1
// console.log(generateUniqueId()); // Output: id_2

// 8)
// // Задача: Создайте функцию, которая кэширует результаты предыдущих вызовов.

// let sum = (a, b) => a + b;

// function createCachedFunction(func) {
//   let cache = new Map(); // {}

//   return function (x, y) {
//     let key = `${x}+${y}`;

//     if (cache.has(key)) {
//       return cache.get(key);
//     }

//     let result = func(x, y);

//     cache.set(key, result);
//     return result;
//   };
// }

// const cachedFunction = createCachedFunction(sum);

// console.log(cachedFunction(2, 2));
// console.log(cachedFunction(4, 2));
// console.log(cachedFunction(2, 4));
// console.log(cachedFunction(2, 2));

// 9)
// // Задача: Создайте функцию, которая возвращает функцию, привязанную к определенному контексту.

// function createBoundFunction(obj, func) {
//   return function () {
//     return func.apply(obj);
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
//   const message = {
//     ru: "Привет",
//     es: "¡Hola!",
//     en: "Hello",
//   };

//   return function (language) {
//     return message[language];
//   };
// }

// const translate = createMessageTranslator();

// console.log(translate("ru")); // Output: Привет
// console.log(translate("es")); // Output: ¡Hola!
// console.log(translate("en")); // Output: Hello
