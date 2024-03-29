"use strict";
// В первой главе этого раздела мы упоминали, что существуют современные методы работы с прототипами.

// Свойство __proto__ считается устаревшим, и по стандарту оно должно поддерживаться только браузерами.

// Современные же методы это:

// Object.create(proto, [descriptors]) – создаёт пустой объект со свойством [[Prototype]], указанным как proto, и необязательными дескрипторами свойств descriptors.
// Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj.
// Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto.
// Эти методы нужно использовать вместо __proto__.

// let animal = {
//   eats: true
// };

// // создаём новый объект с прототипом animal
// let rabbit = Object.create(animal);

// console.log(rabbit.eats); // true
// console.log(Object.getPrototypeOf(rabbit) === animal); // получаем прототип объекта rabbit

// Object.setPrototypeOf(rabbit, {}); // заменяем прототип объекта rabbit на {}

// У Object.create есть необязательный второй аргумент: дескрипторы свойств. Мы можем добавить дополнительное свойство новому объекту таким образом:
// let animal = {
//   eats: true
// };

// let rabbit = Object.create(animal, {
//   jumps: {
//     value: true
//   }
// });

// console.log(rabbit.jumps); // true

// Мы также можем использовать Object.create для «продвинутого» клонирования объекта, более мощного, чем копирование свойств в цикле for..in:
// клон obj c тем же прототипом (с поверхностным копированием свойств)
// let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

// Краткая история
// Если пересчитать все способы управления прототипом, то их будет много! И многие из них делают одно и то же!

// Почему так?

// В силу исторических причин.

// Свойство "prototype" функции-конструктора существует с совсем давних времён.
// Позднее, в 2012 году, в стандарте появился метод Object.create. Это давало возможность создавать объекты с указанным прототипом, но не позволяло устанавливать/получать его. Тогда браузеры реализовали нестандартный аксессор __proto__, который позволил устанавливать/получать прототип в любое время.
// Позднее, в 2015 году, в стандарт были добавлены Object.setPrototypeOf и Object.getPrototypeOf, заменяющие собой аксессор __proto__, который упоминается в Приложении Б стандарта, которое не обязательно к поддержке в небраузерных окружениях. При этом де-факто __proto__ всё ещё поддерживается везде.
// В итоге сейчас у нас есть все эти способы для работы с прототипом

// Не меняйте [[Prototype]] существующих объектов, если важна скорость
// Технически мы можем установить/получить [[Prototype]] в любое время. Но обычно мы устанавливаем прототип только раз во время создания объекта, а после не меняем: rabbit наследует от animal, и это не изменится.

// И JavaScript движки хорошо оптимизированы для этого. Изменение прототипа «на лету» с помощью Object.setPrototypeOf или obj.__proto__= – очень медленная операция, которая ломает внутренние оптимизации для операций доступа к свойствам объекта. Так что лучше избегайте этого кроме тех случаев, когда вы знаете, что делаете, или же когда скорость JavaScript для вас не имеет никакого значения.

// "Простейший" объект
// Как мы знаем, объекты можно использовать как ассоциативные массивы для хранения пар ключ/значение.

// …Но если мы попробуем хранить созданные пользователями ключи (например, словари с пользовательским вводом), мы можем заметить интересный сбой: все ключи работают как ожидается, за исключением "__proto__".

// Посмотрите на пример:
// let obj = {};

// let key = prompt("What's the key?", "__proto__");
// obj[key] = "some value";

// console.log(obj[key]); // [object Object], не "some value"!
// Если пользователь введёт __proto__, присвоение проигнорируется!

// И это не должно удивлять нас. Свойство __proto__ особенное: оно должно быть либо объектом, либо null, а строка не может стать прототипом.

// Задачи:
// 1)
// Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.

// Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.

// Вот так это должно работать:

// let dictionary = Object.create(null, {
//   toString: {
//     value: function () {
//       return Object.keys(this).join(",");
//     },
//   },
// });

// // // ваш код, который добавляет метод dictionary.toString

// // // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// // // только apple и __proto__ выведены в цикле
// // for (let key in dictionary) {
// //   console.log(key); // "apple", затем "__proto__"
// // }

// // // ваш метод toString в действии
// console.log(dictionary.toString()); // "apple,__proto__"

// 2)
// Давайте создадим новый объект rabbit:
// function Rabbit(name) {
//   this.name = name;
// } // prototype: { constructor: Rabbit }

// Rabbit.prototype.sayHi = function () {
//   console.log(this.name);
// }; //  prototype: { constructor: Rabbit, sayHi: function }

// let rabbit = new Rabbit("Rabbit"); // { name: 'Rabbit', __proto__: Rabbit.prototype }

// // Все эти вызовы делают одно и тоже или нет?

// rabbit.sayHi(); // Rabbit
// Rabbit.prototype.sayHi(); // undefined
// Object.getPrototypeOf(rabbit).sayHi(); // undefined
// rabbit.__proto__.sayHi(); // undefined

// function Animal() {
//   this.eats = true;
// } // Animal.prototype = { constructor: Animal }

// let rabbit = new Animal();

// // console.log(rabbit.jump); // undefined

// Animal.prototype.jump = () => {
//   console.log("i can jump");
// };

// Object.getPrototypeOf(rabbit).walk = () => {
//   console.log("i can walk");
// };

// rabbit.walk(); // i can walk
// rabbit.jump(); // i can jump

//
// let animal = {
//   eats: true,
// };

// let rabbit = {
//   __proto__: animal,
// };

// animal.jump = () => {
//   console.log("i can jump");
// };

// animal.walk = () => {
//   console.log("i can walk");
// };

// rabbit.walk(); // i can walk
// rabbit.jump(); // i can jump
