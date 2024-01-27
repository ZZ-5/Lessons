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
  // { name: "Pavel", lastname: "Pavelov" },
  7,
  8,
  -55,
  // { name: "Serg", lastname: "Sergov" },
  "Pasha",
  "Serg",
  undefined,
  null,
  // { name: "Alex", lastname: "Alexov" },
  function name() {
    console.log("Hello, it is me");
  },
  999,
  0,
];

// 1) Создать массив на базе arr, в котором будут только цифры (использовать только встроенные методы)

// let array = arr.filter((a) => typeof a === "number");
// console.log(array);

// 2) Создать массив на базе arr, в котором будут только строки (использовать только встроенные методы)

// let array1 = arr.filter((item) => typeof item === "string");
// console.log(array1);

// 3) Создать массив на базе arr, в котором будут только функции (использовать только встроенные методы)

// let array2 = arr.filter((item) => typeof item === "function");
// console.log(array2);

// 4 ) Создать массив на базе arr, в котором будут только обьекты (использовать только встроенные методы)

// let array3 = arr.filter((item) => typeof item === "object" && item !== null);
// console.log(array3);

// 5) Если в массиве arr есть элемент с именем Serg - найти и вывести этот элемент в консоль (использовать только встроенные методы)

// const found = arr.find((element) => element.name === "Serg");
// console.log(found);

// 6) Создать массив на базе arr, в котором будут только цифры отсортированные по убыванию (использовать только встроенные методы)

// let array4 = arr
//   .filter((item) => typeof item === "number")
//   .sort((a, b) => b - a);
// console.log(array4);
// console.log(arr);

// 7) вывести в консоль индекс элемента, который является функцией (использовать только встроенные методы)

// const found = arr.findIndex((element) => typeof element === "function");
// console.log(found);

// 8) Умножить все числовые элементы в массиве arr на 3 и вывести новый массив в консоль (использовать только встроенные методы) (в одну строку)

// let array = arr.map((a) => typeof a === "number" ? a * 3 : a);
// console.log(array);

// 9) Проверить что хотя бы один элемент является обьектом и вывести true, если это так (использовать только встроенные методы)

// console.log(arr.some((item) => typeof item === "object" && item !== null));

// 10) Найти и вернуть первый обьект в arr с конца (использовать только встроенные методы)

// let array = arr.findLast((item) => typeof item === "object" && item !== null);
// console.log(array);

// 11) Создать новый массив (не на базе предыдущего) из 5 элементов и заполнить его значениями null (использовать только встроенные методы)

// let array = new Array(5).fill(null);
// console.log(array);

// 12) Создать пустой массив, скопировать туда arr, развернуть этот массив и вывести в консоль (использовать только встроенные методы) (в одну строку)

// let array = [...arr].reverse();
// console.log(array);

// 13) Вывести в консоль сумму чисел arr (использовать только встроенные методы)

// console.log(
//   arr.reduce((acc, curr) => (typeof curr === "number" ? acc + curr : acc))
// );

// 13.1) Написать функцию matrixAddition(arr1, arr2), которая сложит попарно все числа в матрицах.
// предполагается что размерность матриц одинаковая

// Пример:
// matrixAddition(
//   [ [1, 2, 3],
//     [3, 2, 1],
//     [1, 1, 1] ],
// //      +
//   [ [2, 2, 1],
//     [3, 2, 3],
//     [1, 1, 3] ] )

// // returns:
//   [ [3, 4, 4],
//     [6, 4, 4],
//     [2, 2, 4] ]

// let pashka = [
//   [1, 2, 3],
//   [3, 2, 1],
//   [1, 1, 1],
// ];

// let serezhka = [
//   [2, 2, 1],
//   [3, 2, 3],
//   [1, 1, 3],
// ];

// function matrixAddition(arr1, arr2) {
//   let result = [];

//   for (let i = 0; i < arr1.length; i++) {
//     result[i] = new Array(arr1.length);
//     for (let j = 0; j < arr1[i].length; j++) {
//       result[i][j] = arr1[i][j] + arr2[i][j];
//     }
//   }
//   return result;
// }

// console.log(matrixAddition(pashka, serezhka));

// 14) Есть обьект корабля. У корабля есть общий вес (припасы + команда). При снятии с корабля каждого члена команды вес уменьшается на 1.5.
// Добавить для ship метод isWorthIt, который делает следующее: возвращает true, если после снятия всех членов экипажа с корабля его вес больше либо равен 10. Если нет - false.
// P.S. Метод должен без труда быть скопирован в другой обьект и использоваться с ним

// let ship = {
//   crewMemberWeightCoeff: 1.5, // коэфф веса 1 члена
//   draft: 15, // полный вес (команда + сам корабль)
//   crew: 10, // количество членов
// };
// // вес - (количество команды * вес члена)
// // если вес >= 10 return true

// let ship2 = {
//   crewMemberWeightCoeff: 1.5, // коэфф веса 1 члена
//   draft: 30, // полный вес (команда + сам корабль)
//   crew: 20, // количество членов
// };

// ship.isWorthIt = function () {
//   let total = this.draft - this.crew * this.crewMemberWeightCoeff;

//   return total >= 10 ? true : false;
// };

// ship2.isWorthIt = ship.isWorthIt;

// console.log(ship2.isWorthIt());

// 15) - Создайте пустой обьект block.
// - Добавьте ему width, height, length со значениями на ваше усмотрение.
// - Добавьте ему методы getWidth, getLength, getHeight, getVolume, getSurfaceArea, выполнящие соответствущие их названиям действия.
// - Создайте новый пустой обьект block2
// - Добавьте ему width, height, length со значениями на ваше усмотрение, но отличающиеся от первых
// - Скопируйте методы из block в block2
// - Выведите в консоль все параметры для block и block2, использую соответствующие методы
// - Формат вывода "Height is 123", 'Width is 456', "Volume is 555"...

// let block = {};
// block.height = 10;
// block.width = 10;
// block.length = 10;

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
//   return this.length * this.width * this.length;
// };
// block.getSurfaceArea = function () {
//   return this.width * this.length;
// };

// let block2 = {};
// block2.height = 20;
// block2.width = 20;
// block2.length = 20;

// for (let key in block) {
//   if (typeof block[key] === "function") {
//     block2[key] = block[key];
//   }
// }

// console.log(block.getWidth());
// console.log(block.getHeight());
// console.log(block.getWidth());
// console.log(block.getVolume());
// console.log(block.getSurfaceArea());

// ##########################################################################################
// ##########################################################################################
// ##########################################################################################

// 16) Исправьте код, чтобы он корректно работал для любого обьекта.
// let object = {
//   name: "Alex",
//   lastName: "Alexov",
// };

// const showFullName = () => {
//   console.log(`Hello, i am ${this.name} ${this.lastName}`);
// };

// showFullName();

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

// object.showFullName = showFullName;
// object1.showFullName = showFullName;
// object2.showFullName = showFullName;

// object.showFullName(); // Должно вывести Hello, i am Alex Alexov
// object1.showFullName(); // Должно вывести Hello, i am Alex Alexov
// object2.showFullName(); // Должно вывести Hello, i am Alex Alexov
