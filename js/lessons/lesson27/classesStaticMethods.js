// Мы также можем присвоить метод самому классу
// class User {
//   static staticMethod() {
//     console.log(this === User);
//   }
// }
// User.staticMethod(); // true

// let obj = new User();

// console.log(obj.staticMethod);

// // Это фактически то же самое, что присвоить метод напрямую как свойство функции:
// class User {}
// User.staticMethod = function () {
//   alert(this === User);
// };

// Обычно статические методы используются для реализации функций, которые будут принадлежать классу в целом, но не какому-либо его конкретному объекту.

// export class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }

//   static compare(articleA, articleB) {
//     return articleA.date - articleB.date;
//   }
// }

// // использование
// let articles = [
//   new Article("HTML", new Date(2019, 1, 1)),
//   new Article("CSS", new Date(2019, 0, 1)),
//   new Article("JavaScript", new Date(2019, 11, 1)),
// ];

// articles.sort(Article.compare);

// console.log(articles[0].title); // CSS

// или
// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }

//   static createTodays() {
//     // помним, что this = Article
//     return new this("Сегодняшний дайджест", new Date());
//   }
// }

// let article = Article.createTodays();

// console.log( article.title ); // Сегодняшний дайджест

// Статические методы недоступны для отдельных объектов

// Статические свойства также возможны, они выглядят как свойства класса, но с static в начале:
// class Article {
//   static publisher = "Илья Кантор";
// }
// console.log(Article.publisher); // Илья Кантор

// let obj = new Article();
// console.log(Article.publisher); // Илья Кантор

// Статические свойства и методы наследуются.
// class Animal {
//   constructor(name, speed) {
//     this.speed = speed;
//     this.name = name;
//   }

//   run(speed = 0) {
//     this.speed += speed;
//     console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//   }

//   static compare(animalA, animalB) {
//     return animalA.speed - animalB.speed;
//   }
// }

// Наследует от Animal
// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} прячется!`);
//   }
// }

// let rabbits = [new Rabbit("Белый кролик", 10), new Rabbit("Чёрный кролик", 5)];

// rabbits.sort(Rabbit.compare);

// rabbits[0].run(); // Чёрный кролик бежит со скоростью 5.

// Задачи
// 1)
// Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта, например hasOwnProperty.

// Пример:
// class Rabbit {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit("Rab");

// // метод hasOwnProperty от Object.prototype
// console.log( rabbit.hasOwnProperty('name') ); // true

// Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?
// В чем разница?
// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

// class Rabbit extends Object {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit("Кроль");

// console.log(rabbit.hasOwnProperty("name")); // Ошибка
