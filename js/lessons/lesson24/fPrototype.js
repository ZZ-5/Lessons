// JavaScript использовал прототипное наследование с момента своего появления. Это одна из основных особенностей языка.

// Но раньше, в старые времена, прямого доступа к прототипу объекта не было. Надёжно работало только свойство "prototype" функции-конструктора, описанное в этой главе. Поэтому оно используется во многих скриптах.

// Как мы помним, новые объекты могут быть созданы с помощью функции-конструктора new F().
// Если в F.prototype содержится объект, оператор new устанавливает его в качестве [[Prototype]] для нового объекта.

// Обратите внимание, что F.prototype означает обычное свойство с именем "prototype" для F. Это ещё не «прототип объекта», а обычное свойство F с таким именем.

// let animal = {
//   eats: true,
// };

// let pasha = {
//   drinks: "i like to drink juice",
// };

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

// console.log(rabbit.eats); // true

// Rabbit.prototype = pasha;

// console.log(rabbit.drinks); // undefined

// let rabbit2 = new Rabbit("Pasha Rabbit");

// console.log(rabbit2.drinks); // "i like to drink juice"

// Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее: "При создании объекта через new Rabbit() запиши ему animal в [[Prototype]]".

// Важно: F.prototype используется только в момент вызова new F
// F.prototype используется только при вызове new F и присваивается в качестве свойства [[Prototype]] нового объекта.
// Если после создания свойство F.prototype изменится (F.prototype = <другой объект>), то новые объекты, созданные с помощью new F, будут иметь в качестве [[Prototype]] другой объект, а уже существующие объекты сохранят старый.

// F.prototype по умолчанию, свойство constructor
// У каждой функции (за исключением стрелочных) по умолчанию уже есть свойство "prototype".

// По умолчанию "prototype" – объект с единственным свойством constructor, которое ссылается на функцию-конструктор.

// function Rabbit() {}

/* прототип по умолчанию
Rabbit.prototype = { constructor: Rabbit };
*/

// console.log(Rabbit.prototype.constructor == Rabbit); // true

// Если мы ничего не меняем, то свойство constructor будет доступно всем кроликам через [[Prototype]]:

// function Rabbit() {}
// // по умолчанию:
// Rabbit.prototype = { constructor: Rabbit };

// console.log(Rabbit.prototype); // { constructor: [Function: Rabbit] }

// function pasha() {}
// const pasha1 = () => {};
// const pasha2 = function () {};

// console.log(pasha.prototype); // {}
// console.log(pasha1.prototype); // undefined
// console.log(pasha2.prototype); // {}

// let rabbit = new Rabbit(); // наследует от {constructor: Rabbit}

// console.log(rabbit.constructor == Rabbit); // true (свойство получено из прототипа)

// Мы можем использовать свойство constructor существующего объекта для создания нового.
// Пример:
// function Rabbit(name) {
//   this.name = name;
//   console.log(name);
// }

// let rabbit = new Rabbit("White Rabbit"); // { constructor: [function Rabbit] }
// let rabbit2 = new rabbit.constructor("Black Rabbit"); // тоже самое что и строчкой выше

// Это удобно, когда у нас есть объект, но мы не знаем, какой конструктор использовался для его создания (например, он мог быть взят из сторонней библиотеки), а нам необходимо создать ещё один такой объект.
// Но, пожалуй, самое важное о свойстве "constructor" это то, что JavaScript сам по себе не гарантирует правильное значение свойства "constructor".
// Да, оно является свойством по умолчанию в "prototype" у функций, но что случится с ним позже – зависит только от нас.
// В частности, если мы заменим прототип по умолчанию на другой объект, то свойства "constructor" в нём не будет.

// function Rabbit() {}

// // Rabbit.prototype = { constructor: [function Rabbit] }

// Rabbit.prototype = {
//   jumps: true,
// };

// let rabbit = new Rabbit();
// console.log(rabbit.constructor); // [Function: Object], а не [function Rabbit]
// console.log(rabbit.constructor === Rabbit); // false

// Таким образом, чтобы сохранить верное свойство "constructor", мы должны добавлять/удалять/изменять свойства у прототипа по умолчанию вместо того, чтобы перезаписывать его целиком:

// function Rabbit() {}
// Не перезаписываем Rabbit.prototype полностью,
// а добавляем к нему свойство
// Rabbit.prototype.jumps = true
// Прототип по умолчанию сохраняется, и мы всё ещё имеем доступ к Rabbit.prototype.constructor

// Или мы можем заново создать свойство constructor:
// Rabbit.prototype = {
//   jumps: true,
//   constructor: Rabbit
// };
// теперь свойство constructor снова корректное, так как мы добавили его

// Задачи:
// 1)
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };

// let rabbit = new Rabbit();
// console.log(rabbit.eats); //

// 2)
// function Rabbit() {}

// Rabbit.prototype = {
//   eats: true,
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// let rabbit2 = new Rabbit();

// console.log(rabbit.eats); //
// console.log(rabbit2.eats); //

// 3)
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// console.log(rabbit.eats); //

// 4)
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };

// let rabbit = new Rabbit();
// delete rabbit.eats;
// console.log(rabbit.eats); //

// 5)
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };

// let rabbit = new Rabbit();
// delete Rabbit.prototype.eats;
// console.log(rabbit.eats); //

// 6)
// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.
// function User(name) {
//   this.name = name;
// }
// User.prototype = {};
// // User.prototype = { constructor: User }

// let user1 = new User("Pasha");
// let user2 = new user1.constructor("Alex");

// console.log(user1.name);
// console.log(user2.name);

// Можем ли мы сделать так?
// let obj2 = new obj.constructor();

// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.
