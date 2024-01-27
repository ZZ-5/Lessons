"use strict";

let arr = [
  -1,
  1,
  2,
  3,
  4,
  "Alex",
  5,
  6,
  { name: "Pavel", lastname: "Pavelov" },
  7,
  8,
  -55,
  { name: "Serg", lastname: "Sergov" },
  "Pasha",
  "Serg",
  undefined,
  null,
  { name: "Alex", lastname: "Alexov" },
  function name() {
    console.log("Hello, it is me");
  },
  999,
  0,
];

// 1) Создать массив на базе arr, в котором будут только цифры (использовать только встроенные методы)

// let arrNumber = arr.filter((i) => typeof i === "number");
// console.log(arrNumber);

// 2) Создать массив на базе arr, в котором будут только строки (использовать только встроенные методы)

// let arrString = arr.filter((i) => {
//   if (typeof i === "string") {
//     return i;
//   }
// });

// console.log(arrString);

// 3) Создать массив на базе arr, в котором будут только функции (использовать только встроенные методы)

// let arrFunction = arr.filter((i) => {
//   if (typeof i === "function") {
//     return i;
//   }
// });

// console.log(arrFunction);

// 4 ) Создать массив на базе arr, в котором будут только обьекты (использовать только встроенные методы)

// let arrObject = arr.filter((i) => {
//   if (typeof i === "object") {
//     return i;
//   }
// });

// console.log(arrObject);

// 5) Если в массиве arr есть элемент с именем Serg - найти и вывести этот элемент в консоль (использовать только встроенные методы)

// let elName = arr.find((i) => {
//   if (i.name === "Serg") {
//     return i;
//   }
// });

// console.log(elName);

// 6) Создать массив на базе arr, в котором будут только цифры отсортированные по убыванию (использовать только встроенные методы)

// let addNumberSort = arr
//   .filter((i) => typeof i === "number")
//   .sort((a, b) => b - a);

// console.log(addNumberSort);

// 7) вывести в консоль индекс элемента, который является функцией (использовать только встроенные методы)

// let arr2 = arr.findIndex((i) => {
//   return typeof i === "function";
// });
// console.log(arr2);

// 8) Умножить все числовые элементы в массиве arr на 3 и вывести новый массив в консоль (использовать только встроенные методы) (в одну строку)

// let arr2 = arr.map((i) => (typeof i === "number" ? i * 3 : i));
// console.log(arr2);

// 9) Проверить что хотя бы один элемент является обьектом и вывести true, если это так (использовать только встроенные методы)

// let arr3 = arr.some((i) => {
//   if (typeof i === "object" && i !== null) {
//     return true;
//   }
// });

// console.log(arr3);

// 10) Найти и вернуть первый обьект в arr с конца (использовать только встроенные методы)

// let arr2 = arr.findLast((i) => typeof i === "object" && i !== null);

// console.log(arr2);

// 11) Создать новый массив (не на базе предыдущего) из 5 элементов и заполнить его значениями null (использовать только встроенные методы)

// let arr2 = new Array(5).fill(null);
// console.log(arr2);

// 12) Создать пустой массив, скопировать туда arr, развернуть этот массив и вывести в консоль (использовать только встроенные методы) (в одну строку)

// let arr2 = arr.reverse();
// console.log(arr2);

// 13) Вывести в консоль сумму чисел arr (использовать только встроенные методы)

// let arr2 = arr.reduce((sum, i) => {
//   if (typeof i === "number") {
//     sum = sum + i;
//   }

//   return sum;
// }, 0);

// console.log(arr2);

// 14) Есть обьект корабля. У корабля есть общий вес (припасы + команда). При снятии с корабля каждого члена команды вес уменьшается на 1.5.
// Добавить для ship метод isWorthIt, который делает следующее: возвращает true, если после снятия всех членов экипажа с корабля его вес больше либо равен 10. Если нет - false.
// P.S. Метод должен без труда быть скопирован в другой обьект и использоваться с ним

// let ship = {
//   memberWeight: 1.5, // вес члена команды
//   draft: 30, // общий вес корабля и команды
//   crew: 10, // количество членов команды корабля
// };

// console.log(ship.draft);
// console.log(ship[draft]);

// let ship2 = {
//   memberWeight: 1.5,
//   draft: 20,
//   crew: 20,
// };

// ship.isWorthIt = function () {
// let value = this.draft - this.crew * this.memberWeight;

//   if (value >= 10) {
//     return true;
//   }

//   return false;
// };

// ship2.isWorthIt = ship.isWorthIt;

// console.log(ship.isWorthIt());
// console.log(ship2.isWorthIt());

// 15) - Создайте пустой обьект block.
// - Добавьте ему width, height, length со значениями на ваше усмотрение.
// - Добавьте ему методы getWidth, getLength, getHeight, getVolume, getSurfaceArea, выполнящие соответствущие из названиям действия.
// - Создайте новый пустой обьект block2
// - Добавьте ему width, height, length со значениями на ваше усмотрение, но отличающиеся от первых
// - Скопируйте методы из block в block2
// - Выведите в консоль все параметры для block и block2, используя соответствующие методы
// - Формат вывода "Height is 123", 'Width is 456', "Volume is 555"...

// let block = {};

// block.width = 100;
// block.height = 100;
// block.length = 100;

// block.getWidth = function () {
//   return this.width;
// };

// block.getLength = function () {
//   return this.length;
// };

// block.getHeight = function () {
//   return this.height;
// };

// block.getVolume = function () {
//   return this.height * this.width * this.length;
// };

// block.getSurfaceArea = function () {
//   return this.width * this.length;
// };

// let block2 = {};

// block2.width = 110;
// block2.height = 110;
// block2.length = 110;

// for (let key in block) {
//   if (typeof block[key] === "function") {
//     block2[key] = block[key];
//   }
// }

// console.log(`Height is ${block2.getHeight()}`);
// console.log(`Width is ${block2.getWidth()}`);
// console.log(`Length is ${block2.getLength()}`);
// console.log(`Volume is ${block2.getVolume()}`);
// console.log(`Surface is ${block2.getSurfaceArea()}`);

// 16) Исправьте код, чтобы он корректно работал для любого обьекта.

// let object = {
//   name: "Alex",
//   lastName: "Alexov",
// };

// function showFullName() {
//   console.log(`Hello, i am ${this.name} ${this.lastName}`);
// }

// showFullName.apply(object);

// 17) Исправьте код, чтобы любой вызов метода работал только с Alex Alexov
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
