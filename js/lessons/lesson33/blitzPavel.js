"use strict";
// 1)
// Создание конструктора для объекта "Книга":
// Создайте конструктор, который будет представлять книгу с атрибутами, такими как название, автор и год выпуска.

// function Book(name, author, year) {
//   this.book = name;
//   this.author = author;
//   this.year = year;
//   this.displayInfo = function () {
//     console.log(`${this.book} by ${this.author} published in ${this.year}`);
//   };
// }

// const myBook = new Book(
//   "JavaScript: The Good Parts",
//   "Douglas Crockford",
//   2008
// );
// console.log(myBook.displayInfo);

// 2)
// // Добавьте метод displayInfo(), который будет выводить информацию о книге "JavaScript: The Good Parts by Douglas Crockford published in 2008"

// myBook.displayInfo = function () {
//   console.log(`${this.book} by ${this.author} published in ${this.year}`);
// };

// myBook.displayInfo();

// let book2 = new Book("JavaScript", "Douglas Crockford", 2010);

// book2.displayInfo();

// 3)
// Создание конструктора для объекта "Автомобиль":
// Создайте конструктор для представления автомобиля с различными свойствами, такими как марка, модель и год выпуска.

// function Car(name, model, year) {
//   this.name = name;
//   this.model = model;
//   this.year = year;
// }

// const myCar = new Car("Toyota", "Camry", 2022);
// console.log(myCar);

// 4)
// Добавьте статический метод к конструктору "Автомобиль", который будет возвращать информацию о самом старом автомобиле.

// Car.oldestCar = function (arr) {
//   return arr.reduce((oldestCar, item) => {
//     if (item.year < oldestCar.year) {
//       oldestCar = item;
//     }

//     return oldestCar;
//   }, arr[0]);
// };

// let car1 = new Car("Toyota", "Camry", 2022); // { name: 'Toyota', model: 'Camry', year: 2022 }
// let car2 = new Car("Porsche", "911", 2015); // { name: 'Porsche', model: '911', year: 2015 }
// let car3 = new Car("Dodge", "Challenger", 1970); // { name: 'Dodge', model: 'Challenger', year: 1970 }

// let cars = [car1, car2, car3];
// const oldestCar = Car.oldestCar(cars);
// console.log(
//   `The oldest car is ${oldestCar.make} ${oldestCar.model} (${oldestCar.year})`
// );

// 5)
// Создайте конструктор "Пользователь" и добавьте метод через прототип для вывода полного имени пользователя.

// function User(name, lastname) {
//   this.name = name;
//   this.lastname = lastname;
// } // prototype: { constructor: ... }

// User.prototype.getFullName = function () {
//   return `${this.name} ${this.lastname}`;
// };

// const newUser = new User("John", "Doe"); // { name: 'John',  lastname: 'Doe' }
// const newUser1 = new User("Alex", "Doe"); // { name: 'John',  lastname: 'Doe' }
// console.log(newUser.getFullName()); // 'John Doe'
// console.log(newUser1.getFullName()); // 'Alex Doe'

// 6) Напишите функцию для вычисления факториала числа. Факториал числа n обозначается n! и равен произведению всех целых чисел от 1 до n.

// function factorial(n) {
//   if (n === 1) {
//     return n
//   }
//   return n * factorial(n - 1)
// }

// console.log(factorial(5)); // Выведет: 120

// 7) Напишите функцию (рекурсивно) для вычисления суммы всех целых чисел от 1 до n.

// console.log(sumUpTo(5)); // Выведет: 15

// 8) Напишите функцию для рекурсивного подсчета количества элементов в массиве.

// console.log(countElements([1, 2, 3, 4, 5])); // Выведет: 5

// 9) Напишите функцию для рекурсивного поиска максимального числа в массиве.

// console.log(findMax([3, 7, 2, 8, 1])); // Выведет: 8

// 10) Напишите функцию, которая генерирует все подмножества множества. Если множество имеет n элементов, то у него есть 2^n подмножества.

// console.log(generateSubsets([1, 2, 3])); // Выведет: [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]
