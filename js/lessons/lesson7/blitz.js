"use sctict";

// function myFunc() {
//   var someVar = "qewqwe";

//   console.log(someVar);
// }

// myFunc();

// console.log(a);
// console.log(d);
// console.log(someVar);

// console.log(me);
// console.log(friend);

// let me = "Pasha"; //
// const friend = "Alesha"; //
// var qwe = "me";

// friend = "AleshaI";

// console.log(me); // Pasha
// console.log(friend); // Ошибка

// console.log(Boolean("string")); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(-1)); // true
// console.log(Boolean(undefined)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(me)); // true

// drink(10); // Я могу выпить 10 литров пива;
// ivanov(3); // wrong

// function drink(liters) {
//   console.log("Я могу выпить " + liters + " литров пива");
// }

// const ivanov = function (liters) {
//   console.log("Я могу выпить + " + liters + " литров пива");
// };

// Исправить код
let meObj = {
  name: "Pasha",
  lastName: "Ivannikov",
  age: 29,
  play: function (game) {
    console.log(`Меня зовут ${this.name} и я умею играть в ${game}`);
  },
};

let ivanovObj = {
  name: "Alex",
  lastName: "Ivanov",
  age: 29,
};

ivanovObj.play = meObj.play;

meObj.play("volleyball"); //
ivanovObj.play("fifa"); //

// // Создать дубликат обьекта
// let meObj = {
//     name: "Pasha",
//     lastName: "Ivannikov",
//     age: 29,
//     play: (game) => {
//         console.log(`Меня зовут ${meObj.name} и я умею играть в ${game}`);
//     },
// };

// let meObj2 = {}

// Object.assign(meObj2, meObj)

// console.log(meObj2);

// console.log(meObj === meObj2);

// Добавить в обьект вес и рост
// let meObj = {
//     name: "Pasha",
//     lastName: "Ivannikov",
//     age: 29,
//     play: (game) => {
//         console.log(`Меня зовут ${meObj.name} и я умею играть в ${game}`);
//     },
// };

// meObj.weight = 88;
// meObj.height = 185;

// console.log(meObj);

// 1) Получить сумму всех числовых элементов массива. Использовать встроенный метод массивов
// 2) Отфильтровать массив и положить в новый массив только числовые значения
// 3) Отсортировать полученный массив по убыванию
// let arr = [1, 2, 4, 5, null, undefined, "str", "Pasha", 6, 7, 8, 9, 10];

// let sum = arr.reduce((res, item) => {
//     if (typeof item == 'number') {
//         return res + item;
//     } else return res
// }, 0);

// let arr2 = arr.filter((i) => {
//     if (typeof i == 'number') {
//         return i
//     }
// }).sort((a, b) => b - a)

// console.log(sum);

// Извлечь из массива первые два элемента. Остальные положить в отдельный массив.
// let arr = ["My", "name", "is", "Pasha", "and", "i"];

// let [a, b, ...c] = arr;
// console.log(a)
// console.log(b)
// console.log(c)

// Получить из обьекта meObj имя, фамилию, возраст
// let name = "Alex";
// let meObj = {
//     name: "Pasha",
//     lastName: "Ivannikov",
//     age: 29,
//     play: (game) => {
//         console.log(`Меня зовут ${meObj.name} и я умею играть в ${game}`);
//     },
// };

// let { name: myName, lastName, age } = meObj;

// console.log(myName);
// console.log(lastName)
// console.log(age)
