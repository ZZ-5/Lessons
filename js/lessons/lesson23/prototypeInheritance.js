"use strict";
// В программировании мы часто хотим взять что-то и расширить.

// Например, у нас есть объект user со своими свойствами и методами, и мы хотим создать объекты admin и guest как его слегка изменённые варианты. Мы хотели бы повторно использовать то, что есть у объекта user, не копировать/переопределять его методы, а просто создать новый объект на его основе.

// user (method1, method2, method3)
// -- admin (method1, method2, method3)
// -- guest (method1)
// -- moderator (method1, method2)

// В JavaScript объекты имеют специальное скрытое свойство [[Prototype]] (так оно названо в спецификации), которое либо равно null, либо ссылается на другой объект. Этот объект называется «прототип»:

// Прототип даёт нам немного «магии». Когда мы хотим прочитать свойство из object, а оно отсутствует, JavaScript автоматически берёт его из прототипа. В программировании такой механизм называется «прототипным наследованием». Многие интересные возможности языка и техники программирования основываются на нём.

// Свойство [[Prototype]] является внутренним и скрытым, но есть много способов задать его.

// Одним из них является использование __proto__, например так:

// let animal = {
//   eats: "Ем как не в себя",
// };

// let rabbit = {
//   jumps: true,
// };

// let fox = {
//   run: true,
// };

// rabbit.__proto__ = animal;
// fox.__proto__ = animal;

// console.log(rabbit.eats);
// console.log(fox.eats);

// Если мы ищем свойство в rabbit, а оно отсутствует, JavaScript автоматически берёт его из animal.

// let animal = {
//   eats: true
// };
// let rabbit = {
//   jumps: true
// };

// rabbit.__proto__ = animal; // (*)

// // теперь мы можем найти оба свойства в rabbit:
// console.log( rabbit.eats ); // true (**)
// console.log( rabbit.jumps ); // true

// Цепочка прототипов может быть длиннее:
// let animal = {
//   eats: true,
//   walk() {
//     console.log("Animal walk");
//   },
// };

// let rabbit = {
//   jumps: true,
// __proto__: animal,
// };

// let longEar = {
//   earLength: 10,
//   __proto__: rabbit,
// };

// // // walk взят из цепочки прототипов
// longEar.walk(); // Animal walk
// console.log(longEar.jumps); // true (из rabbit)

// Есть только два ограничения:
// Ссылки не могут идти по кругу. JavaScript выдаст ошибку, если мы попытаемся назначить __proto__ по кругу.
// Значение __proto__ может быть объектом или null. Другие типы игнорируются.

// Свойство __proto__ — исторически обусловленный геттер/сеттер для [[Prototype]]
// Свойство __proto__ немного устарело, оно существует по историческим причинам. Современный JavaScript предполагает, что мы должны использовать функции Object.getPrototypeOf/Object.setPrototypeOf вместо того, чтобы получать/устанавливать прототип. Мы также рассмотрим эти функции позже.

// let animal = {
//   eats: true,
//   walk() {
//     console.log("Animal walk");
//   },
// };

// let rabbit = {
//   jumps: true,
// };

// Object.setPrototypeOf(rabbit, animal);

// let longEar = {
//   earLength: 10,
// };

// Object.setPrototypeOf(longEar, rabbit);

// longEar.walk(); // Animal walk
// console.log(longEar.jumps); // true (из rabbit)
// console.log(Object.getPrototypeOf(longEar)); // { jumps: true }

// Операция записи не использует прототип
// let animal = {
//   eats: true,
//   walk() {
//     /* этот метод не будет использоваться в rabbit */
//   },
// };

// let rabbit = {
//   __proto__: animal,
// };

// rabbit.walk = function () {
//   console.log("Rabbit! Bounce-bounce!");
// };

// rabbit.walk(); // Rabbit! Bounce-bounce!

// Свойства-аксессоры – исключение, так как запись в него обрабатывается функцией-сеттером. То есть это фактически вызов функции.

// По этой причине admin.fullName работает корректно в приведённом ниже коде:

// let user = {
//   name: "John",
//   surname: "Smith",

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true,
// };

// console.log(admin.fullName); // John Smith (*)

// // срабатывает сеттер!
// admin.fullName = "Alice Cooper"; // (**)
// console.log(admin.name); // Alice
// console.log(admin.surname); // Cooper

// console.log(user.fullName);
// console.log(admin);

// Значение «this»
// В приведённом выше примере может возникнуть интересный вопрос: каково значение this внутри set fullName(value)? Куда записаны свойства this.name и this.surname: в user или в admin?

// Ответ прост: прототипы никак не влияют на this

// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       console.log(`I walk`);
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   }
// };

// let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal
// };

// // модифицирует rabbit.isSleeping
// rabbit.sleep();

// console.log(rabbit.isSleeping); //
// console.log(animal.isSleeping); //

// Цикл for..in проходит не только по собственным, но и по унаследованным свойствам объекта.
// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// // Object.keys возвращает только собственные ключи
// console.log(Object.keys(rabbit)); // jumps

// // // for..in проходит и по своим, и по унаследованным ключам
// for (let prop in rabbit) console.log(prop); // jumps, затем eats

// Если унаследованные свойства нам не нужны, то мы можем отфильтровать их при помощи встроенного метода obj.hasOwnProperty(key): он возвращает true, если у obj есть собственное, не унаследованное, свойство с именем key.

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// for (let prop in rabbit) {
// let isOwn = rabbit.hasOwnProperty(prop); // вернется true если это собственное свойство rabbit

//   if (isOwn) {
//     console.log(`Our: ${prop}`); // Our: jumps
//   } else {
//     console.log(`Inherited: ${prop}`); // Inherited: eats
//   }
// }

// Заметим ещё одну деталь. Откуда взялся метод rabbit.hasOwnProperty? Мы его явно не определяли. Если посмотреть на цепочку прототипов, то видно, что он берётся из Object.prototype.hasOwnProperty. То есть он унаследован.

// Резюме:
// В JavaScript все объекты имеют скрытое свойство [[Prototype]], которое является либо другим объектом, либо null.
// Мы можем использовать obj.__proto__ для доступа к нему (исторически обусловленный геттер/сеттер, есть другие способы, которые скоро будут рассмотрены).
// Объект, на который ссылается [[Prototype]], называется «прототипом».
// Если мы хотим прочитать свойство obj или вызвать метод, которого не существует у obj, тогда JavaScript попытается найти его в прототипе.
// Операции записи/удаления работают непосредственно с объектом, они не используют прототип (если это обычное свойство, а не сеттер).
// Если мы вызываем obj.method(), а метод при этом взят из прототипа, то this всё равно ссылается на obj. Таким образом, методы всегда работают с текущим объектом, даже если они наследуются.
// Цикл for..in перебирает как свои, так и унаследованные свойства. Остальные методы получения ключей/значений работают только с собственными свойствами объекта.

// Задачи:
// 1)
// let animal = {
//   jumps: null,
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };

// console.log(rabbit.jumps); // ? (1) true

// delete rabbit.jumps;

// console.log(rabbit.jumps); // ? (2) null

// delete animal.jumps;

// console.log(rabbit.jumps); // ? (3) undefined

// 2)
// У нас есть объекты:
// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed,
// };

// const timestamp = Date.now();
// console.log(pockets.glasses);
// const timestamp1 = Date.now();

// console.log(timestamp1 - timestamp);

// const timestamp2 = Date.now();
// console.log(head.glasses);
// const timestamp3 = Date.now();

// console.log(timestamp3 - timestamp2);

// 2.1) С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).

// 2.2) Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.

// ОТВЕТ!!!!!: head.glasses???

// 3) Объект rabbit наследует от объекта animal.
// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

// let animal = {
//   eat() {
//     this.full = true;
//   },
// };

// let rabbit = {
//   __proto__: animal,
// };

// rabbit.eat(); // rabbit

// console.log(animal);
// console.log(rabbit);

// 4)
// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   },
// };

// let speedy = {
//   __proto__: hamster,
//   stomach: [],
// };

// let lazy = {
//   __proto__: hamster,
//   stomach: [],
// };

// // // Этот хомяк нашёл еду
// speedy.eat("apple");
// console.log(speedy.stomach); // apple

// // // У этого хомяка тоже есть еда. Почему? Исправьте
// console.log(lazy.stomach); // apple
