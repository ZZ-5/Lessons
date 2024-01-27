"use strict";
// 1)
// Создание конструктора для объекта "Книга":
// Создайте конструктор, который будет представлять книгу с атрибутами, такими как название, автор и год выпуска.
// function Book(name, author, year) {
//   this.name = name;
//   this.author = author;
//   this.year = year;
// }

// const myBook = new Book(
//   "JavaScript: The Good Parts",
//   "Douglas Crockford",
//   2008
// );

// console.log(myBook);

// 2)
// Добавьте метод displayInfo(), который будет выводить информацию о книге "JavaScript: The Good Parts by Douglas Crockford published in 2008"

// Book.prototype.displayInfo = function () {
//   console.log(`${this.name} by ${this.author} published in ${this.year}`);
// };

// let mybook2 = new Book("JavaScript: The Good Parts", "Douglas Crockford", 2008);
// mybook2.displayInfo();

// 3)
// Создание конструктора для объекта "Автомобиль":
// Создайте конструктор для представления автомобиля с различными свойствами, такими как марка, модель и год выпуска.

// function Car(brand, model, year) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
// }

// const myCar = new Car("Toyota", "Camry", 2022);

// 4)
// Добавьте статический метод к конструктору "Автомобиль", который будет возвращать информацию о самом старом автомобиле.

// Car.oldestCar = function (cars) {
//   return cars.reduce(
//     (oldestCar, curr) => (curr.year < oldestCar.year ? curr : oldestCar),
//     cars[0]
//   );
// };

// let car1 = new Car("Toyota", "Camry", 2022);
// let car2 = new Car("Porsche", "911", 2015);
// let car3 = new Car("Dodge", "Challenger", 1970);

// const oldestCar = Car.oldestCar([car1, car2, car3]);

// console.log("oldestCar ", oldestCar);

// console.log(
//   `The oldest car is ${oldestCar.brand} ${oldestCar.model} ${oldestCar.year}`
// );

// 5)
// Создайте конструктор "Пользователь" и добавьте метод через прототип для вывода полного имени пользователя.

// function User(name, lastName) {
//   this.name = name;
//   this.lastName = lastName;
// }

// User.prototype.getFullName = function () {
//   return `${this.name} ${this.lastName}`;
// };

// const newUser = new User("John", "Doe");
// console.log(newUser.getFullName()); // 'John Doe'

// 6) Напишите функцию для вычисления факториала числа. Факториал числа n обозначается n! и равен произведению всех целых чисел от 1 до n.
// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(5)); // Выведет: 120

// 7) Напишите функцию (рекурсивно) для вычисления суммы всех целых чисел от 1 до n.

// function sumUpTo(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n + sumUpTo(n - 1);
//   }
// }

// console.log(sumUpTo(5)); // Выведет: 15

// 8) Напишите функцию для рекурсивного подсчета количества элементов в массиве.

// function countElements(arr) {
//   let total = 0;

// }

// console.log(countElements([1, 2, 3, 4, 5])); // Выведет: 5

// 9) Напишите функцию для рекурсивного поиска максимального числа в массиве.

// console.log(findMax([3, 7, 2, 8, 1])); // Выведет: 8

// 10) Напишите функцию, которая генерирует все подмножества множества. Если множество имеет n элементов, то у него есть 2^n подмножества.

// console.log(generateSubsets([1, 2, 3])); // Выведет: [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]

// 11) Напишите функцию, которая создает вложенность соответствующих заданному обьекту элементов
// Например, если обьект такой:
// const obj = {
//   tagName: "div",
//   className: "man",
//   children: [
//     {
//       tagName: "img",
//       alt: "gallows image",
//       className: "man__img man__img_head",
//       src: "../assets/head.png",
//     },
//   ],
// };

// то функция создаст такую структуру элементов:
/* 
<div class="man">
  <img alt="gallows image" class="man__img man__img_head" src="../assets/head.png" />
</div>
*/

// Исходный обьект:
// const obj = {
//   tagName: "div",
//   className: "wrapper",
//   children: [
//     {
//       tagName: "div",
//       className: "gallows",
//       children: [
//         {
//           tagName: "img",
//           alt: "gallows image",
//           className: "gallows__img",
//           src: "../assets/gallows.png",
//         },
//         {
//           tagName: "div",
//           className: "man",
//           children: [
//             {
//               tagName: "img",
//               alt: "gallows image",
//               className: "man__img man__img_head",
//               src: "../assets/head.png",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       tagName: "div",
//       className: "questions",
//       children: [
//         {
//           tagName: "div",
//           className: "questions__question",
//           children: [
//             {
//               tagName: "ul",
//               className: "questions__answer",
//               children: null,
//             },
//             {
//               tagName: "div",
//               className: "questions__title",
//               children: null,
//             },
//           ],
//         },
//         {
//           tagName: "div",
//           className: "questions__keyboard",
//           children: null,
//         },
//       ],
//     },
//   ],
// };

// Ваш код:
