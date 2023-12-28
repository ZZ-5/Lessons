"user strict";
// Функции-конструкторы технически являются обычными функциями. Но есть два соглашения:

// Имя функции-конструктора должно начинаться с большой буквы.
// Функция-конструктор должна выполняться только с помощью оператора "new".

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Pasha");
// let user2 = new User("Ivanov");

// console.log(user.name); // Jack
// console.log(user.isAdmin); // false
// console.log(user);

// Когда функция вызывается как new User(...), происходит следующее:

// Создаётся новый пустой объект, и он присваивается this.
// Выполняется тело функции. Обычно оно модифицирует this, добавляя туда новые свойства.
// Возвращается значение this.
// Другими словами, new User(...) делает что-то вроде:

// function User(name) {
//     // this = {};  (неявно)

//     // добавляет свойства к this
//     this.name = name;
//     this.isAdmin = false;

//     // return this;  (неявно)
// }

// // Таким образом, let user = new User("Jack") возвращает тот же результат, что и:

<<<<<<< HEAD
=======
// let user = {
//     name: "Jack",
//     isAdmin: false
// };

>>>>>>> f423aace1415ba69dae133087f7f5aa0be5171e9
// console.log(new User('Alex'))
// console.log(new User('Pasha'))
// console.log(new User('Ann'))

// из конуструктора можно вернуть значение

// function BigUser() {
//     this.name = "John";
//     return { name: "Godzilla" };
// }

<<<<<<< HEAD
// console.log(new BigUser().name); //
=======
// console.log(new BigUser().name);  //
>>>>>>> f423aace1415ba69dae133087f7f5aa0be5171e9

// Задачи
// 1) Возможно ли создать функции A и B, чтобы new A() == new B()?

// let c = {};

// function A() {
//   return c;
// }

// function B() {
//   return c;
// }

// let a = new A();
// let b = new B();

// console.log(a == b); // true

// 2) Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
// read() получает два аргумента и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

// Пример:
// function Calculator() {
//   this.read = function (a, b) {
//     this.a = a;
//     this.b = b;
//   };

//   this.sum = function () {
//     return this.a + this.b;
//   };

//   this.mul = function () {
//     return this.a * this.b;
//   };
//   this.pasha = {
//     age: 29,
//   };
// }

// let calculator1 = {
//   read: function (a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum: function () {
//     return this.a + this.b;
//   },
//   mul: function () {
//     return this.a * this.b;
//   },
// };

// let calculator2 = {};
// Object.assign(calculator2, calculator1); // { read: function, sum: function, mul: function }
// let calculator3 = {};
// Object.assign(calculator3, calculator1);

// let calculator2 = new Calculator();
// let calculator3 = new Calculator();

// calculator3.read(5, 5);
// calculator3.pasha.name = "Pasha";
// console.log("2 Sum=" + calculator2.sum());
// console.log("2 Mul=" + calculator2.mul());
// console.log(calculator3);

// calculator3.pasha.name = "Pezduk";
// calculator3.read(2, 2);
// console.log("3 Sum=" + calculator3.sum());
// console.log("3 Mul=" + calculator3.mul());
// console.log(calculator3);
