"use strict";

// "Ссылки на главы учебника":
// https://learn.javascript.ru/object
// https://learn.javascript.ru/object-copy
// https://learn.javascript.ru/object-methods
// https://learn.javascript.ru/keys-values-entries

// Обьект - это тип данных, который умеет хранить коллекции других типов данных и более сложные сущности
// При создании обьекта мы получаем ссылку на данные в памяти, а не прямой доступ к данным как в случае с примитивами.
// Поэтому при копировании объекта копируем ссылку область в памяти

// Как создать обьект

// const obj = {};
// const obj1 = new Object();

// Обьект хранит пары ключ-значение
// В качестве ключа может выступать: symbol, строка. Все остальные типы будут преобразовываться к строке
// Ключом может быть любое слово, даже зарезервированное. Но лучше так не делать, чтобы не вводить в заблуждение разработчиков
// let age = Symbol("age");

// const obj3 = {
//   name: "Pasha",
//   surname: "Ivannikov",
//   1: 123, // ключ преобразуется к строке
//   name1: {},
//   name2: [1, 2, 3, 4],
//   name3: function () {
//     return "Pasha";
//   },
// };

// obj3.age = 29;
// obj3.friend = "Sergey";

// // console.log("obj3 ", obj3);

// В обьект можно добавлять свойства после создания
// const obj4 = {};
// obj4.name = "Alex" + " " + "Sigeev"; // так
// obj4.qwe = "Qwe";

// obj4.name = obj4.name + "Sigeev";

// obj4["surname"] = "Ivanov"; // или так
// obj4["asdf"] = "Pasha";

// console.log(obj4.name);

// console.log(obj4.name);
// console.log(obj4.surname);

// Создать обьект себя с именем, фамилией, возрастом, датой рождения

// const me = {
//   name: "Sergei",
//   surname: "Solovev",
//   age: 28,
//   "date of birth": "09.12.1995",
// };

// console.log(me);

// me.like = "Cola";
// me["dislike"] = "Pivo";

// me.likeBeer = "Beer4ik";
// me["dislike"] = "Буян";

// delete obj4.name // а удалить свойство можно так
// console.log("me after ", me);

// delete me.dislike;

// console.log("me after ", me);

// Проверить наличие свойства в обьекте можно
// console.log("name" in obj4); // true/false
// console.log(obj4.hasOwnProperty("name")); // true/false

// console.log("name" in me);
// console.log(me.hasOwnProperty("name"))

// let obj = {
//   test: undefined,
// };

// // // что выведет?
// console.log(obj.test); //
// console.log("test" in obj); //

// перебор свойств обьекта можно сделать циклом for...in

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// // // for (let key in obj) { }
// for (let key in user) {
//   // ключи
//   console.log(key); // name, age, isAdmin
//   // значения ключей
//   console.log(user[key]); //
//   console.log("\n"); //
// }

// Упорядочивание свойств
// В обьекте не гарантировано упорядочивание свойств. Только если задавать ключам числовые значения

// let codes = {
//   49: "Германия",
//   41: "Швейцария",
//   44: "Великобритания",
//   // ..,
//   1: "США",
// };

// for (let code in codes) {
//   console.log(code); // 1, 41, 44, 49
// }

// В остальных случаях перебор свойств будет осуществляться в порядке их создания

// let user = {
//   name: "John",
//   surname: "Smith",
// };
// user.age = 25; // добавим ещё одно свойство

// // не целочисленные свойства перечислены в порядке создания
// for (let prop in user) {
//   console.log(prop); // name, surname, age
// }

// Копирование обьекта происходит по ссылке (т.е. копируется ссылка на область в памяти)
// let user = { name: "John" };

// let admin = user;

// admin.name = "Pete"; // изменено по ссылке из переменной "admin"
// admin.fuck = "bulshit";

// console.log(user); // John
// console.log(admin); //

// console.log(user == admin); // true
// console.log(user === admin); // true

// в случае двух разных обьектов
// let obj1 = { name: "adsfadf" };
// let obj2 = { name: "qweqwe" };

// console.log(obj1 == obj2); // false

// Равенство обьектов будет только в том случае, если это две ссылки на один и тот же обьект
// let a = {};
// let b = a; // копирование по ссылке

// console.log(a == b); // true, обе переменные ссылаются на один и тот же объект
// console.log(a === b); // true

// let a = {};
// let b = {}; // два независимых объекта

// console.log(a == b); // false

// Клонирование обьекта
// Если нужно сделать дубликат обьекта, то придется заморочиться:

// Так
// let user = {
//   name: "John",
//   age: 30,
// };

// let clone = {}; // новый пустой объект

// for (let key in user) {
//   // key - переменная, в которой будет храниться ключ, user - обьект, который перебираем
//   clone[key] = user[key];
// }

// console.log(user);
// console.log(clone);
// console.log(user == clone);

// Либо так:
// let clone2 = {};

// Object.assign(dest, [src1, src2, src3...])
// Object.assign(clone2, user);

// console.log(clone2);

// Если у обьекта есть вложенные обьекты, то нужно делать вложенное клонирование. В этом помогут такие библиотеки как lodash
// Функция в lodash: _.cloneDeep(obj)

// let user = {
//   name: "Pasha",
//   lastName: "Ivannikov",
//   age: 29,
//   friend: {
//     name: "Alex",
//     lastName: "Puzovich",
//     age: 29,
//     friend: {
//       name: "Valera",
//       lastName: "Business",
//       age: 27,
//     },
//   },
// };

// console.log(user.friend.friend.name); // Valera
// let user2 = user;

// let user3 = {};

// Object.assign(user3, user);
// // console.log(user3);

// user3.friend.friend.name = "Eduard";

// console.log(user3);
// console.log(user);
// console.log(user3 == user);

// user3.friend.name = "Anna";

// console.log(user.friend.name); // Alex
// console.log(user3.friend.name); // Anna

// Методы обьекта
// В качестве значения обьекта может выступать функция. В этом случае функция называется методом обьекта
// let pasha = {
//   name: "Pasha",
//   lastName: "Ivannikov",
//   age: 29,
//   walk: function (distance) {
//     console.log(`Могу пройти ${distance} км`);
//   },
// };

// // альтернативный способ создания метода
// let pasha2 = {
//   walk() {
//     console.log(`Могу пройти ${distance} км`);
//   },
// };

// pasha.walk(); //
// pasha.walk(10); //

// pasha.sayHi = function () {
//   console.log("Привет!");
// };

// pasha.sayHi(); // Привет!

// Сокращенная запись метода:
// let user = {
//   sayHi() {
//     // то же самое, что и "sayHi: function(){...}"
//     console.log("Привет");
//   },
//   walk(distance) {
//     console.log(`Могу пройти ${distance} км`);
//   },
// };

// let user = {
//   name: "Alex",
//   lastName: "Pivanov",
//   age: 29,
//   drink(liters) {
//     console.log(`Ну можно и по ${liters} сегодня`);
//   },
// };

// user.drink(5);
// user["drink"](5);

// Ключевое слово this
// Используется внутри обьекта/функции для указания на обьект, чье свойство мы хотим использовать

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     // "this" - это "текущий объект".
//     console.log(
//       "Привет, меня зовут " + this.name + " и мне " + this.age + " лет"
//     );
//   },
// };

// // user.sayHi(); //

// let pasha = {
//   name: "Pasha",
//   age: 29,
// };

// pasha.invoker = user.sayHi;

// console.log(user.sayHi());
// console.log(pasha.invoker());

// console.log(pasha.sayHi == user.sayHi);

// pasha.sayHi(); //

// user.sayHi(); // John

// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   console.log(this.name);
// }

// // используем одну и ту же функцию в двух объектах
// user.f = sayHi;
// admin.f = sayHi;

// эти вызовы имеют  разное значение this
// "this" внутри функции - это объект "перед точкой"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)

// admin['f'](); // Admin (нет разницы между использованием точки или квадратных скобок для доступа к объекту)

// Простыми словами: this.property - будет указывать на обьект, чье property мы хотим вызвать

// Object.keys, values, entries
// Поддерживаются для структур: Map, Set, Array

// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение].

// let pasha = {
//   name: "Pasha",
//   lastName: "Ivannikov",
//   age: 29,
//   walk: function (distance) {
//     console.log(`Могу пройти ${distance} км`);
//   },
// };

// console.log(Object.keys(pasha)); // [key1, key2, key3]
// console.log(Object.values(pasha)); // [value1, value2, value3]
// console.log(Object.entries(pasha)); // [[key: value], [key: value]]

// Задачи:

// 1. Напишите функцию count(obj), которая возвращает количество свойств объекта:
// let user = {
//   name: "John",
//   age: 30,
//   lastName: "Ivanov",
// };

// function count(obj) {
//   let total = 0;

//   for (let key in obj) {
//     total++;
//   }

//   return total;
// }

// Альтернативный способ
// const count = (user) => Object.keys(user).length;

// console.log(count(user)); // 3

// 2. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта больше 1 свойства, иначе возвращает false.
// let schedule = {
//   name: "John",
// };

// function isEmpty(obj) {
//   if (Object.keys(obj).length > 1) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// isEmpty(schedule); // true

// schedule["8:15"] = "Wake up!";

// isEmpty(schedule); //

// 3. Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
// const user = {
//   name: "John",
// };

// // это будет работать?
// user.name = "Pete"; //

// console.log(user); //

// 4. Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
//   Alex: "123",
// };

// let sum = 0;

// console.log(salaries.John);
// console.log(salaries["John"]);

// for (let key in salaries) {
//   if (typeof salaries[key] === "number") {
// sum += salaries[key];
//   }
// }

// console.log(sum);

// // альтернативный способ
// const sum41 = Object.values(salaries).reduce((acc, value) => {
//   if (typeof value === "number") acc += value;
//   return acc;
// }, 0);

// console.log(sum41);

// 5. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }
// multiplyNumeric(menu);
// console.log(menu);

// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.

// 6. Здесь функция makeUser возвращает объект. Каким будет результат при обращении к свойству объекта ref? Почему?
// function makeUser() {
//   return {
//     name: "John",
//     ref: this, // this всегда указывает на обьект перед точкой в момент вызова. если обьекта перед точкой нет, то this = undefined
//   };
// }

// let user = makeUser();

// console.log(user.ref.name); // ошибка

// 7. Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

// let pasha = {
//   name: "Pasha",
//   lastName: "Ivannikov",
//   age: 29,
//   walk: function (distance) {
//     console.log(`Могу пройти ${distance} км`);
//   },
// };

// let calculator = {
//   read(x, y) {
//     this.a = x;
//     this.b = y;
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

// console.log(calculator.read(2, 4));
// console.log(calculator.sum());
// console.log(calculator.mul());
// console.log(calculator);

// 8. У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // показывает текущую ступеньку
//     console.log(this.step);
//     return this;
//   },
// };

// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

// ladder.up();
// ladder.showStep(); // 1
// ladder.up();
// ladder.showStep(); // 2
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
