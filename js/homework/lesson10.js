// 1. https://learn.javascript.ru/closure - ещё раз почитать про замыкания и сделать задачи  в конце + коспект сюда же + задачи после главы
// 2. https://learn.javascript.ru/garbage-collection - почитать про сборку мусора в js
// 3.

// Задача 1:
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

// callback(item, index, array)
// filter(callback, thisArg)
// let arr = [0, 1, 2, 3, 4, 5, 6, 7];

// let arr2 = arr.filter(function (item) {
//   return item >= 3 && item <= 6 ? true : false;
// });

// function inBetween(a, b) {
//   // храним a и b лексическом окружении текущего вызова функции inBetween
//   return function (item) {
//     if (item >= a && item <= b) {
//       return true;
//     } else {
//       return false;
//     }
//   };
// }

// function inArray(arr) {
//   return function (item) {
//     return arr.includes(item);
//   };
// }

// это
// const a = inBetween(0, 3)
// const filteredArray = arr.filter(a)
// console.log(filteredArray)

// тоже самое что и:

// console.log(arr.filter(inBetween(0, 3))); // 0, 1, 2, 3
// console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// // Задача 2:

// У нас есть массив объектов, который нужно отсортировать:
// Обычный способ был бы таким:
// // по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);
// // по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);

// Можем ли мы сделать его короче, например вот таким?
// users.sort(byField('name'));
// users.sort(byField('age'));

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];

// // Напишите функцию byField, которая может быть использована для этого.
// function byField(params) {
//   // params === "name"
//   return function (a, b) {
//     return a[params] > b[params] ? 1 : -1;
//   };
// }

// console.log(users.sort(byField("name")));
// console.log(users.sort(byField("age")));

// // Задача 3:
// Следующий код создаёт массив из стрелков (shooters).
// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
// Почините код, чтобы он работал как задумано.

// function makeArmy() {
//   let shooters = [];
//   let i = 0;

//   while (i < 10) {
//     let x = i; // 0, 1, 2, 3, 4, 5...
//     let shooter = function () {
//       console.log(x);
//     };
//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// let army = makeArmy(); // [function, function, function...], arr.length = 10

// // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)

// army[0](); // 0 x = 0, i = 10
// army[1](); // 1 x = 1, i = 10
// army[2](); // 2 x = 2, i = 10

// Функция возвращает массив.
// Позже вызов army[0]() получит элемент army[0] из массива (это будет функция) и вызовет её.
// Теперь, почему все эти функции показывают одно и то же?
// Всё потому, что внутри функций shooter нет локальной переменной i. Когда вызывается такая функция, она берёт i из своего внешнего лексического окружения.

// …Мы увидим, что оно живёт в лексическом окружении, связанном с текущим вызовом makeArmy(). Но, когда вызывается army[5](), makeArmy уже завершила свою работу, и последнее значение i: 10 (конец цикла while).

// Как результат, все функции shooter получат одно и то же значение из внешнего лексического окружения: последнее значение i=10.
