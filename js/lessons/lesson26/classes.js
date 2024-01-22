// Классы, как и конструкторы, нужны чтобы создавать обьекты одного вида по предварительно заданному шаблону

// Базовый синтаксис классов:

// class MyClass {
//   // методы класса
// constructor() { ... } - метод, который вызывается в момент создания обьекта на основе вашего класса. Другими словами, это метод, который будет инициализировать ваш будущий обьект начальными значениями.
//   method1() { ... } - любой метод, какой угоден вашей душе
//   method2() { ... }
// method3() { ... }
//   ...
// }

// Чтобы создать обьект на основе такого класса, как несложно догадаться, нужно использовать следующий синтаксис:

// let newObj = new MyClass()

// Возможно мы захотим инициализировать обьект начальными значениями

// class User {
//   constructor(name, lastname) {
//     this.name = name;
//     this.lastname = lastname;
//   }

//   sayHi() {
//     console.log(this.name);
//   }

//   walk = () => {
//     console.log(this.lastname);
//   };
// }

// let user = new User("Pasha", "Ivannikov");

// На самом деле класс - это ПОЧТИ синтаксический сахар для функции-конструктора
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(this.name);
//   }
// }

// console.log(typeof User); // function

// но есть небольшие отличия:
// 1) Во-первых, функция, созданная с помощью class, помечена специальным внутренним свойством [[IsClassConstructor]]: true. Поэтому это не совсем то же самое, что создавать её вручную.
// 2) Кроме того, строковое представление конструктора класса в большинстве движков JavaScript начинается с «class …»

// class User {
//   constructor() {}
// }

// console.log(User); // class User { ... }

// 3) Методы класса являются неперечислимыми. Определение класса устанавливает флаг enumerable в false для всех методов в "prototype".

// 4) Классы всегда используют use strict. Весь код внутри класса автоматически находится в строгом режиме.

// Class Expression

// let User = class {
//   sayHi() {
//     console.log("Привет");
//   }
// };

// "Named Class Expression"
// (в спецификации нет такого термина, но происходящее похоже на Named Function Expression)
// let User = class MyClass {
//   sayHi() {
//     console.log(MyClass); // имя MyClass видно только внутри класса
//   }
// };

// Мы даже можем динамически создавать классы «по запросу»:
// function makeClass(phrase) {
//   // объявляем класс и возвращаем его
//   return class {
//     sayHi() {
//       console.log(phrase);
//     };
//   };
// }

// // Создаём новый класс
// let User = makeClass("Привет");

// new User().sayHi(); // Привет

// геттеры/сеттеры

// class User {
//   constructor(name) {
//     // вызывает сеттер
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log("Имя слишком короткое.");
//       return;
//     }
//     this._name = value;
//   }
// }

// let user = new User("Иван");
// console.log(user.name); // Иван

// user = new User(""); // Имя слишком короткое.

// Пример с вычисляемым свойством в скобках [...]:
// class User {
//   ['say' + 'Hi']() {
//     console.log("Привет");
//   }
// }
// new User().sayHi();

// Наследование классов
// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//   }
//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} стоит неподвижно.`);
//   }
// }

// let animal = new Animal("Мой питомец");

// class Rabbit extends Animal {
//   // extends - наследовать
//   hide() {
//     console.log(`${this.name} прячется!`);
//   }
// }

// let rabbit = new Rabbit("Белый кролик");

// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.hide(); // Белый кролик прячется!

// Синтаксис создания класса допускает указывать после extends не только класс, но и любое выражение.
// Пример вызова функции, которая генерирует родительский класс:
// function f(phrase) {
//   return class {
//     sayHi() { console.log(phrase); }
//   };
// }

// class User extends f("Привет") {}
// new User().sayHi(); // Привет

// переопределение методов
// class Rabbit extends Animal {
//   stop() {
//     // ...теперь это будет использоваться для rabbit.stop()
//     // вместо stop() из класса Animal
//   }
// }

// Если у тебя есть свой метод с таким же именем, но ты все равно хочешь вызвать родительский, то для этого можно использовать ключевое слово super:

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }

//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//   }

//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} стоит неподвижно.`);
//   }
// }

// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} прячется!`);
//   }

//   stop() {
//     super.stop(); // вызываем родительский метод stop
//     this.hide(); // и затем hide
//   }
// }

// let rabbit = new Rabbit("Белый кролик");

// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!

// У стрелочных функций нет super!!!
// При обращении к super стрелочной функции он берётся из внешней функции

// Переопределение конструктора
// С конструкторами немного сложнее.
// До сих пор у Rabbit не было своего конструктора.
// Согласно спецификации, если класс расширяет другой класс и не имеет конструктора, то автоматически создаётся такой «пустой» конструктор:

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   // ...
// }

// class Rabbit extends Animal {
//   constructor(name, earLength) {
//     this.speed = 0;
//     this.name = name;
//     this.earLength = earLength;
//   }

//   // ...
// }

// // Не работает!
// let rabbit = new Rabbit("Белый кролик", 10); // Error: this is not defined.

// Конструкторы в наследуемых классах должны обязательно вызывать super(...), и (!) делать это перед использованием this..

// …Но почему? Что происходит? Это требование кажется довольно странным.

// Конечно, всему есть своё объяснение. Давайте углубимся в детали, чтобы вы действительно поняли, что происходит.

// В JavaScript существует различие между «функцией-конструктором наследующего класса» и всеми остальными. В наследующем классе соответствующая функция-конструктор помечена специальным внутренним свойством [[ConstructorKind]]:"derived".

// Разница в следующем:

// Когда выполняется обычный конструктор, он создаёт пустой объект и присваивает его this .
// Когда запускается конструктор унаследованного класса, он этого не делает. Вместо этого он ждёт, что это сделает конструктор родительского класса.
// Поэтому, если мы создаём собственный конструктор, мы должны вызвать super, в противном случае объект для this не будет создан, и мы получим ошибку.

// Чтобы конструктор Rabbit работал, он должен вызвать super() до того, как использовать this, чтобы не было ошибки:

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }

//   // ...
// }

// class Rabbit extends Animal {
//   constructor(name, earLength) {
//     super(name);
//     this.earLength = earLength;
//   }

//   // ...
// }

// // теперь работает
// let rabbit = new Rabbit("Белый кролик", 10);
// console.log(rabbit.name); // Белый кролик
// console.log(rabbit.earLength); // 10

// Задачи:
// 1) В коде ниже класс Rabbit наследует Animal.
// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// console.log(rabbit.name);

// 2) У нас есть класс Clock. Сейчас он выводит время каждую секунду
// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// const clock = new Clock({ template: "h:m:s" });

// clock.start();

// class ExtendedClock extends Clock {
//   constructor(options) {
//     super(options);
//     const { precision = 3000 } = options;
//     this.precision = precision;
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// }

// const extClock = new ExtendedClock({ template: "h:m:s", precision: 5000 });

// extClock.start();

// Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.

// Сохраните ваш код в файл extended-clock.js
// Не изменяйте класс clock.js. Расширьте его.

// 3) Написать класс для hangman cо следующими методами:
// - newGame() - создает новую игру
// - createComponent(params) - создает компонент для поля (виселица, клавиатура, вопрос-ответ)
// - validateAnswer(word) - проверяет соответствие текущей буквы ответу
// - renderHangman() - рисует человечка по частям на основе текущего значения итератора
// - gameOver() - вызывается когда мы ответили правильно, либо проиграли. рисует текст и кнопку "начать заново"

// class Hangman {
//   constructor() {}

//   // createComponent(jsonObj) {
//   //   // пробежаться по jsonObj и сделать все createElement и append в соответствии со структурой обьекта

//   // }
// }
