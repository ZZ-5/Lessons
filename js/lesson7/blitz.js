let me = "Pasha";
const friend = "Alesha";

// friend = "AleshaI";

// console.log(me); //
// console.log(friend); //

// console.log(Boolean("string")); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(-1)); // true
// console.log(Boolean(undefined)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(me)); // true

// drink(10); // Я могу выпить 10 литров пива
// ivanov(3); // Я могу выпить три литров пива

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
  play: (game) => {
    console.log(`Меня зовут ${meObj.name} и я умею играть в ${game}`);
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

// Скопировать обьект без копирования ссылки
// let meObj = {
//   name: "Pasha",
//   lastName: "Ivannikov",
//   age: 29,
//   play: (game) => {
//     console.log(`Меня зовут ${meObj.name} и я умею играть в ${game}`);
//   },
// };

// Добавить в обьект вес и рост
// let meObj = {
//   name: "Pasha",
//   lastName: "Ivannikov",
//   age: 29,
//   play: (game) => {
//     console.log(`Меня зовут ${meObj.name} и я умею играть в ${game}`);
//   },
// };

// 1) Получить сумму всех числовых элементов массива. Использовать встроенный метод массивов
// 2) Отфильтровать массив и положить туда только числовые значения
// 3) Отсортировать полученных массив по убыванию
// let arr = [1, 2, 4, 5, null, undefined, "str", "Pasha", 6, 7, 8, 9, 10];

// Извлечь из массива первые два элемента. Остальные положить в отдельный массив.
// let arr = ["My", "name", "is", "Pasha"];

// Получить из обьекта имя, фамилию, возраст
// let name = 'Alex'
// let meObj = {
//   name: "Pasha",
//   lastName: "Ivannikov",
//   age: 29,
//   play: (game) => {
//     console.log(`Меня зовут ${meObj.name} и я умею играть в ${game}`);
//   },
// };
