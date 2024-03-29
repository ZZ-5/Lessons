// Иногда нам нужен класс, у которого будут свои внутренние свойства, которые нельзя использовать к его экземплярах
// Например:

// class CoffeeMachine {
//   _waterAmount = 0; // защищенное поле, его нельзя изменить напрямую, можно только через функции  setWaterAmount и getWaterAmount. Но это не фича языка, а соглашение разработчиков, как и то, что защищенные поля называются с _. Защищённые поля наследуются

//   #waterLimit = 200; // Приватное поле. Недоступно за пределами самого класса, даже для обьектов, созданных на базе этого класса. Приватные поля не наследуются

//   constructor(power) {
//     this._power = power;
//   }

//   setWaterAmount(value) {
//     if (value < 0) throw new Error("Отрицательное количество воды");

//     this._waterAmount = value;
//   }

//   getWaterAmount() {
//     return this._waterAmount;
//   }

//   #checkWater(value) {
//     if (value < 0) throw new Error("Отрицательный уровень воды");
//     if (value > this.#waterLimit) throw new Error("Слишком много воды");
//   }
// }

// // создаём новую кофеварку
// let coffeeMachine = new CoffeeMachine(100);

// устанавливаем количество воды
// coffeeMachine.setWaterAmount(-10); // Error: Отрицательное количество воды

// снаружи  нет доступа к приватным методам класса
// coffeeMachine.#checkWater(); // Error
// coffeeMachine.#waterLimit = 1000; // Error

// Зачем это нужно:
// В терминах ООП отделение внутреннего интерфейса от внешнего называется инкапсуляция.

// Это даёт следующие выгоды:

// Защита для пользователей, чтобы они не выстрелили себе в ногу
// Представьте себе, что есть команда разработчиков, использующая кофеварку. Она была изготовлена компанией «Лучшие Кофеварки» и работает нормально, но защитный кожух был снят. Внутренний интерфейс стал доступен извне.

// Все разработчики культурны – они используют кофеварку по назначению. Но один из них, Джон, решил, что он самый умный, и сделал некоторые изменения во внутренностях кофеварки. После чего кофеварка вышла из строя через два дня.

// Это, конечно, не вина Джона, а скорее человека, который снял защитный кожух и позволил Джону делать свои манипуляции.

// То же самое в программировании. Если пользователь класса изменит вещи, не предназначенные для изменения извне – последствия непредсказуемы.

// Поддерживаемость
// Ситуация в программировании сложнее, чем с реальной кофеваркой, потому что мы не просто покупаем её один раз. Код постоянно подвергается разработке и улучшению.

// Если мы чётко отделим внутренний интерфейс, то разработчик класса сможет свободно менять его внутренние свойства и методы, даже не информируя пользователей…

// Если вы разработчик такого класса, то приятно знать, что приватные методы можно безопасно переименовывать, их параметры можно изменять и даже удалять, потому что от них не зависит никакой внешний код.

// В новой версии вы можете полностью всё переписать, но пользователю будет легко обновиться, если внешний интерфейс остался такой же.

// Сокрытие сложности
// Люди обожают использовать простые вещи. По крайней мере, снаружи. Что внутри – это другое дело.

// Программисты не являются исключением.

// Всегда удобно, когда детали реализации скрыты, и доступен простой, хорошо документированный внешний интерфейс.

// Для сокрытия внутреннего интерфейса мы используем защищённые или приватные свойства:

// Защищённые поля имеют префикс _. Это хорошо известное соглашение, не поддерживаемое на уровне языка. Программисты должны обращаться к полю, начинающемуся с _, только из его класса и классов, унаследованных от него.
// Приватные поля имеют префикс #. JavaScript гарантирует, что мы можем получить доступ к таким полям только внутри класса.
// В настоящее время приватные поля не очень хорошо поддерживаются в браузерах, но можно использовать полифил.

// Расширение встроенных классов
// От встроенных классов, таких как Array, Map и других, тоже можно наследовать.

// Например, в этом примере PowerArray наследуется от встроенного Array:

// // добавим один метод (можно более одного)
// class PowerArray extends Array {
//   isEmpty() {
//     return this.length === 0;
//   }
// }

// let arr = new PowerArray(5, 10, 20, 30);
// console.log(arr.isEmpty()); // false

// let filteredArr = arr.filter((item) => item >= 10);
// console.log(filteredArr); // 10, 50
// console.log(filteredArr.isEmpty()); // false

// У встроенных объектов есть собственные статические методы, например Object.keys, Array.isArray и т. д.
// Как мы уже знаем, встроенные классы расширяют друг друга.

// Обычно, когда один класс наследует другой, то наследуются и статические методы. Это было подробно разъяснено в главе Статические свойства и методы.

// Но встроенные классы – исключение. Они не наследуют статические методы друг друга.

// Например, и Array, и Date наследуют от Object, так что в их экземплярах доступны методы из Object.prototype. Но Array.[[Prototype]] не ссылается на Object, поэтому нет методов Array.keys() или Date.keys().

// Как видите, нет связи между Date и Object. Они независимы, только Date.prototype наследует от Object.prototype.

// В этом важное отличие наследования встроенных объектов от того, что мы получаем с использованием extends.

// ############################################################
// Проверка класса: "instanceof"

// Оператор instanceof позволяет проверить, принадлежит ли объект указанному классу, с учётом наследования.
// class Animal {}
// class Rabbit {}
// let rabbit = new Rabbit();

// // // это объект класса Rabbit?
// console.log(rabbit instanceof Animal); // true

// Также это работает с функциями-конструкторами:
// // вместо класса
// function Rabbit() {}
// console.log( new Rabbit() instanceof Rabbit ); // true

// …И для встроенных классов, таких как Array:
// let arr = [1, 2, 3];
// console.log(arr instanceof Array); // true
// console.log(arr instanceof Object); // true

// Примеси
// Простейший способ реализовать примесь в JavaScript – это создать объект с полезными методами, которые затем могут быть легко добавлены в прототип любого класса.

// В примере ниже примесь sayHiMixin имеет методы, которые придают объектам класса User возможность вести разговор:
// примесь
// let sayHiMixin = {
//   sayHi() {
//     console.log(`Привет, ${this.name}`);
//   },
//   sayBye() {
//     console.log(`Пока, ${this.name}`);
//   },
// };

// // // использование:
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// // // копируем методы
// Object.assign(User.prototype, sayHiMixin);

// // теперь User может сказать Привет
// new User("Вася").sayHi(); // Привет, Вася!

// Это не наследование, а просто копирование методов.

// Задачи:
// 1) Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().
// function A() {}
// function B() {}

// A.prototype = B.prototype = {};
// let a = new A();
// console.log(a instanceof B); //
