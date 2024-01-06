// "use strict";
// let a = 1;
// const b = 2;
// var c = 3;

// function phrase(name) {
//   if (name === "Анжи") {
//     return "Анжи выиграет наверное";
//   }

//   if (name === "Реал Мадрид") {
//     return "Hala Madrid";
//   }

//   if (name === "Эвертон") {
//     return "Эвертон чемпион!!!";
//   }

//   if (name === "ФК Труд") {
//     return "Сливу заберите к себе нахуй в команду. Заебал этот алкаш";
//   }
// }

// let phrase1 = (name) => {
//   switch (name) {
//     case "Анжи": {
//       return "Анжи выиграет наверное";
//     }
//     case "Реал Мадрид": {
//       return "Hala Madrid";
//     }
//     case "Эвертон": {
//       return "Эвертон чемпион!!!";
//     }
//     case "ФК Труд": {
//       return "Сливу заберите к себе нахуй в команду. Заебал этот алкаш";
//     }
//     default: {
//       return "Такой команды  в группе Лиги Чемпионов нет";
//     }
//   }
// };

// ["Анжи - Роберто Карлос", "Реал Мадрид - ...", "Эвертон - ...", "ФК Труд - ..."]

// let arr = ["Анжи", "Реал Мадрид", "Эвертон", "ФК Труд"];
// let arrNames = ["Роберто Карлос", "Серхио Рамос", "Шеймус Колман", "СЛИВА!!!"];

// let trud = arr[3]; // ФК Труд
// let sliva = arrNames[3]; // СЛИВА!!!

// let addPlayers = (arrNames) => {
//   // arrNames - храним в лексическом окружении вызова функции
//   return (item, index) => {
//     let res = `${item} - ${arrNames[index]}`;
//     return res;
//   };
// };

// let arr2 = arr.map(addPlayers(arrNames));

// console.log(arr2);

// Создать конструктор, который принимает имя игрока, победную фразу и создает обьект с соответствующими полями (name, winPhrase)

// "Роберто Карлос говорит: просто я забил 999 голов и мы выиграли"
// function FootbalPlayer(name, phrase) {
//   this.name = name;
//   this.phrase = function () {
//     console.log(`${name} говорит: ${phrase}`);
//   };
// }

// let player1 = new FootbalPlayer("СЛИВА", "Я ЗАБИЛ НАХУЙ!!!!.... На футбол((");
// let player2 = new FootbalPlayer(
//   "Дагестанский москвич",
//   "Анжи выииграет наверно"
// );

// Задание: описать по шагам как движок браузера работает с кодом, приведённым ниже:
// let pasha = {
//   sportEquip: "сноуборд",
//   name: "Паша",
//   footSize: 45,
//   realRides: 10,
//   say: function () {
//     console.log(
//       `У ${this.name} ${this.footSize} размер ноги и он будет кататься на ${this.sportEquip}`
//     );
//   },
//   makeRides: function (expectationRides, result) {
//     let counter = 0;

//     while (counter < this.realRides) {
//       counter++;
//     }

//     console.log(
//       `${this.name} говорил что прокатится ${expectationRides} и спустя ${counter} раз ${result}`
//     );
//   },
// };

// let ivanov = {
//   sportEquip: "санки",
//   name: "Алёша",
//   footSize: 41,
//   rides: 1,
// };

// ivanov.say = pasha.say;
// ivanov.realRides = 1;
// ivanov.makeRides = pasha.makeRides;

// pasha.say();
// ivanov.say();

// pasha.makeRides(10, "у него всё получилось");
// ivanov.makeRides(999, "у него заболело колено");

// Движок браузера загрузил скрипт, то есть файл blitz.js
// Создан global exec context, который состоит из этапа выделения памяти и этапа выполнения кода

// На этапе выделения памяти движок помещает в память:
// global exec context состоит из 3 важных частей:
// 1) this = global object
// 2) Lexical env: let pasha = uninitialized, let ivanov = uninitialized (то, что не всплывает)
// 3) Variables env: ivanov.say = undefined, ivanov.realRides = undefined, ivanov.makeRides = undefined

// На этапе выполнения кода мы присваиваем значение для let pasha, let ivanov, ivanov.say, ivanov.realRides, ivanov.makeRides и

// 1) Вызываем функцию pasha.say(), в результате чего:

// 1.0) Создается call stack, В который браузер будет класть все вызовы для, начиная с текущей строки и заканчивая самым глубоким вызовов внутри pasha.say. После заполнения call stack будет исполнять эти вызовы.

// 1.1) Создает function exec context c 2 этапами: выделение памяти и выполнение кода

// function exec context для say():
// 1.1.1) this = pasha
// 1.1.2) Lexical env:
// 1.1.3) Variables env:

// 1.2) внутри функции pasha.say создается еще один function exec context для console.log c теми же этапами. Console.log проходит через те же этапы, выводит значение и его exec context очищаетсыя.

// 1.3) Функция pasha.say завершает свой вызов и её exec context очищается

// ...
