"use sctict";
// Блиц для новенького

// 1) Что будет выведено в консоль?
// function myFunc() {
//   var someVar = "qewqwe";

//   console.log(someVar);
// }

// myFunc(); //  "qewqwe"

// console.log(someVar); // ошибка // !!!!!!! //

// console.log(me); // ошибка
// console.log(friend); // ошибка

// let me = "Pasha";
// const friend = "Alex";
// var qwe = "me";

// friend = "Serg"; // ошибка

// console.log(me); // "Pasha"
// console.log(friend); // "Alex"

// 2) Что будет выведено в консоль?
// console.log(Boolean("string")); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(-1)); // false // !!!!!!! //
// console.log(Boolean(undefined)); // undef // !!!!!!! //
// console.log(Boolean(null)); // false
// console.log(Boolean(me)); // undef // !!!!!!! //

// 3) Что будет выведено в консоль?
// drink(10); // Я могу выпить 10 литров пива
// ivanov(3); // // !!!!!!! //

// function drink(liters) {
//   console.log("Я могу выпить " + liters + " литров пива");
// };

// const ivanov = function (liters) {
//   console.log("Я могу выпить " + liters + " литров пива");
// };

// 4) Исправить код // !!!!!!! //// !!!!!!! //// !!!!!!! //
// let meObj = {
//   name: "Pasha",
//   lastName: "Ivannikov",
//   age: 29,
//   play: function (game) {
//     console.log(`Меня зовут ${this.name} и я умею играть в ${game}`);
//   },
// };

// let ivanovObj = {
//   name: "Alex",
//   lastName: "Ivanov",
//   age: 29,
// };

// ivanovObj.play = meObj.play;

// meObj.play("volleyball"); // Меня зовут Pasha и я умею играть в volleyball
// ivanovObj.play("fifa"); // Меня зовут Alex и я умею играть в fifa

// 5) Создать дубликат обьекта meObj, который будет называться meObj2 (так же независимый обьект)
// !!!!!!! //// !!!!!!! //// !!!!!!! //
// let meObj = {
//   name: "Pasha",
//   lastName: "Ivannikov",
//   age: 29,
//   play: (game) => {
//     console.log(`Меня зовут ${meObj.name} и я умею играть в ${game}`);
//   },
// };

// console.log(meObj2); //
// console.log(meObj === meObj2); // true

// 6) Добавить в обьект вес и рост // !!!!!!! //// !!!!!!! //// !!!!!!! //
// let meObj = {
//   name: "Pasha",
//   lastName: "Ivannikov",
//   height: 210,
//   play: (game) => {
//     console.log(`Меня зовут ${meObj.name} и я умею играть в ${game}`);
//   },
// };

// meObj.weight = 45;
// meObj.height = 210;

// console.log(meObj);

// 7)
// 7.1) Получить сумму всех числовых элементов массива. Использовать встроенный метод массивов
// 7.2) Отфильтровать массив и положить в новый массив только числовые значения
// 7.3) Отсортировать полученный массив по убыванию
// let arr = [1, 2, 4, 5, null, undefined, "str", "Pasha", 6, 7, 8, 9, 10]; // !!!!!!! //// !!!!!!! //// !!!!!!! //

// 8) Извлечь из массива первые два элемента в отдельные переменные (не используя индексы массива). Остальные элементы положить в отдельный массив. (использовать деструктуризацию) // !!!!!!! //// !!!!!!! //// !!!!!!! //
// let arr = ["My", "name", "is", "Pasha", "and", "i"];

// 9) // !!!!!!! //// !!!!!!! //// !!!!!!! //
// - Получить из обьекта meObj имя, фамилию, возраст
// - Исправить код чтобы метод play корректно работал для любого обьекта

// let name = "Alex";
// let meObj = {
//   name: "Pasha",
//   lastName: "Ivannikov",
//   age: 29,
//   play: function (game) {
//     console.log(`Меня зовут ${this.name} и я умею играть в ${game}`);
//   },
// };

// // console.log(meObj.name);
// // console.log(meObj.age);
// // console.log(meObj.lastName);

// let obj2 = {
//   name: "Alex",
// };

// meObj.play("fifa");
// obj2.play = meObj.play;
// obj2.play("Call of Duty MW3");

// 10) Написать функцию, которая выводит любой ваш комментарий для каждого элемента массива.
// // !!!!!!! //// !!!!!!! //// !!!!!!! //
// let arr = ["Alan wake 2", "Baldur Gates 3", "Spider man 2", "Divinity 2"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] + "Круто");
// }

// 11) Создать новый массив на базе предыдущего, в котором каждый элемент будет указан в формате "Игра - Создатель" // !!!!!!! //// !!!!!!! //// !!!!!!! //

// 12) Создать конструктор, который создает обьект, имеющий поля game, comment и метод say. При вызове метод say должен выводить комментарий с использованием game и comment. // !!!!!!! //// !!!!!!! //// !!!!!!! //

// 13) Рассказать что происходит, когда браузер начинает работать со скриптом ниже: // !!!!!!! //// !!!!!!! //// !!!!!!! //
// let obj = {
//   name: "Сергей",
//   age: 28,
//   showHobby: function (hobby) {
//     function say() {
//       console.log(`Я люблю ${hobby}`);
//     }

//     say();
//   },
// };

// obj.showHobby("играть в компьютерные игры");
