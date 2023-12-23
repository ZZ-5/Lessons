"user strict";
// Функции-конструкторы технически являются обычными функциями. Но есть два соглашения:

// Имя функции-конструктора должно начинаться с большой буквы.
// Функция-конструктор должна выполняться только с помощью оператора "new".

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jack");

// console.log(user.name); // Jack
// console.log(user.isAdmin); // false

// Когда функция вызывается как new User(...), происходит следующее:

// Создаётся новый пустой объект, и он присваивается this.
// Выполняется тело функции. Обычно оно модифицирует this, добавляя туда новые свойства.
// Возвращается значение this.
// Другими словами, new User(...) делает что-то вроде:

// function User(name) {
//   // this = {};  (неявно)

//   // добавляет свойства к this
//   this.name = name;
//   this.isAdmin = false;

//   // return this;  (неявно)
// }

// Таким образом, let user = new User("Jack") возвращает тот же результат, что и:

// let user = {
//   name: "Jack",
//   isAdmin: false
// };

// console.log(new User('Alex'))
// console.log(new User('Pasha'))
// console.log(new User('Ann'))

// из конуструктора можно вернуть значение

// function BigUser() {
//   this.name = "John";
//   return { name: "Godzilla" };
// }

// console.log( new BigUser().name );  //

// Задачи
// 1) Возможно ли создать функции A и B, чтобы new A() == new B()?
// function A() {}
// function B() {}

// let a = new A();
// let b = new B();

// alert( a == b ); // true

// 2) Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
// read() получает два аргумента и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

// Пример:
// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );
