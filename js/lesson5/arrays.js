"user strict";
// массив - упорядоченная коллекция данных
// массив можно перебирать и производить какие-то операции с элементами массива

// - Варианты объявления массива
// let arr = []
// let arr1 = new Array()

// - Если создавать не пустой массив, то аналогично
// let arr = [1, 2, 3, 4, 5, 6];
// let arr1 = new Array(1, 2, 3, 4, 5, 6);

// - Массив может быть многомерным:
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(arr);
// console.log(arr1);

// - Массив может содержать разные данные
// let arr = [
//   1,
//   2,
//   "Pasha",
//   undefined,
//   null,
//   true,
//   Symbol("asd"),
//   { name: "Alex" },
//   [1, 2, 3],
// ]; // важно лишь то что эта коллекция упорядоченная и её элементы можно перебрать по порядку

// console.log(arr);

// - Каждый элемент в массиве имеет свой порядковый номер - индекс
// - Индексы в массиве начинаются с 0
// - Соответственно, если массив состоит из 5 элементов, то его первый индекс = 0, а последний = 4

// - Обратиться к индексу массива можно через квадратные скобки:
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr[2]); //
// console.log(arr[4]); //

// - Заменить элемент в массиве можно так же: обращаемся к элементу через квадратные скобки и присваиваем новое значение:
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr[2]); // 3
// arr[2] = 999;
// console.log(arr[2]); // 999

// - Также можно добавить новый элемент в массив:
// let arr = [1, 2, 3, 4, 5, 6];
// arr[6] = 999;
// console.log(arr); // 999

// - А если мы ошибемся и укажем другой индекс?
// let arr = [1, 2, 3, 4, 5, 6];
// arr[10] = 999;
// console.log(arr); // [ 1, 2, 3, 4, 5, 6, <4 empty items>, 999 ]

// - Если мы хотим добавить элемент ровно в конец массива, то можно сделать это так:
// let arr = [1, 2, 3, 4, 5, 6];
// arr.push(999); // метод push добавит элемент в конец массива
// console.log(arr);

//  или так:
// arr[arr.length - 1] = 999; // свойство length возвращает длину массива, к которому применяется
// console.log(arr);

// - Сравнение массивов:
// - Не сравнивать массивы с помощью ==. Они ведут себя как обьекты
// - Если нужно проводить сравнение, то поэлементно

// Полезные методы для работы с массивами
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// let arr = [1, 2, 3];
// let arr2 = [4, 5, 6];

// 1) array.push(elem1, elem2, elem3, ..., elemN) - добавить элемент в конец
// 2) array.pop() - убрать последний элемент
// 3) array.shift() - убрать первый элемент
// 4) array.unshift(elem1, elem2, elem3, ..., elemN) - добавить элементы в начало

// const myFish = ["angel", "clown", "mandarin", "sturgeon"];

// myFish.unshift("alex", "alex2");

// console.log(myFish);

// Методы для обхода массива
// for, while, do while, for...of - любым циклом

// 5) array.map(callback(item, index, array), thisArg) - обходит массив и возвращает новый массив, к каждому элемента которого применен указанный вами callback. Callback принимает следующие значение внутри map: (currentItem, index, currentArray) => { ... }, thisArg - значение, которое будет использоваться как this при вызове callback.

// let arr = [1, 2, 3];

// function doSmthWithElem(item) {
//   return item * 2;
// }

// let res = [];

// for (let i = 0; i < arr.length; i++) {
//   res.push(doSmthWithElem(arr[i]));
// }

// let arr2 = arr.map(doSmthWithElem); // вернёт массив с измененными элементами

// console.log("arr2 ", arr2);

// Задача: Обойти массив и умножить все числовые значения на 2
// let arr = [1, 2, 3, 4, 5, undefined, 6, 7, 8, null, true, "Pasha", 9, 10, 11];

// currentItem - текущий элемент
// currentIndex - индекс текущего элемента
// currentArray - текущий массив
// function multiplyNumeric(currentItem, currentIndex, currentArray) {
//   if (typeof currentItem == "number") {
//     return currentItem * 2;
//   }
//   return currentItem;
// }

// let arr2 = arr.map(multiplyNumeric);

// console.log(arr2);

// Создать новый массив, в котором заменить нулями все нечетные числа массива
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function replaceWhisZeros(item) {
//   if (item % 2 === 1) {
//     return 0;
//   } else {
//     return item;
//   }
// }

// let arr2 = arr.map(replaceWhisZeros); // возвращает новый массив элементов

// console.log(arr2);

// 6) array.forEach(callback, thisArg) - обходит массив на месте и меняет элементы в соответствии с поведением, описанным в callback. callback такой же, как и в map. Метод forEach ничего не возвращает, потому что меняет элементы в исходном массиве

// Задача: с помощью forEach обойти массив и создать новый, в которо все четные элементы заменены пустой строкой
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let res = [];

// function replaceWhisEmptyString(item) {
//   if (item % 2 === 0) {
//     res.push("");
//   } else {
//     res.push(item);
//   }
// }

// arr.forEach(replaceWhisEmptyString); // ничего не возвращает. делает действия над старым массивом

// console.log(arr);
// console.log(res);

// Задача: Обойти массив и умножить все числовые значения на 2
// let arr = [1, 2, 3, 4, 5, undefined, 6, 7, 8, null, true, "Pasha", 9, 10, 11];

// 7) array.reduce(callback, initialValue) - обходит массив, собирает все элементы в единственное значение и возвращает его. Callback: (acc, currentItem, currentIndex, currentArray) => { ... }. Reduce схлопывает массив и возвращает единственное значение, описанное в callback

// Задача: Найти сумму элементов массива
// let arr = [100, 200, 300, 400, 500, 600, 1]; // 2101

// let sum = arr.reduce((res, item) => {
//   res = res + item;
//   return res;
// }, 0);

// console.log(sum);

// Методы для поиска значения в массиве:
// 8) array.find(callback, thiaArg) - ищет первый попавшийся элемент в массиве, удовлетворяющий условию в callback, если не находит, возвращает undefined. Callback такой же, как и в map

// Задача: Найти в массиве элемент со значением 'Pasha' и положит его в переменную.
// let arr = [1, 2, 3, 4, 5, undefined, 6, 7, 8, null, true, "Pasha", 9, 10, 11];

// let res = arr.find((item) => {
//   return item === "Pasha";
// });

// console.log(res);

// 9) array.findIndex(callback, thiaArg) - тоже самое что find, только возвращает индекс элемент, а не сам элемент. Если не находит - возвращает -1

// let resIndex = arr.findIndex((item) => item === "Pasha");

// arr[resIndex] = "Alex";
// console.log(arr);

// Задача: Найти в массиве индекс элемента со значением 'Pasha' и положит его в переменную.
// let arr = [1, 2, 3, 4, 5, undefined, 6, 7, 8, null, true, "Pasha", 9, 10, 11];

// 10) array.findLast(callback, thiaArg) - тоже самое что find, только ищет первый попавшийся элемент с конца массива
// 11) array.findLastIndex(callback, thiaArg) - тоже самое что findIndex, только ищет первый попавшийся элемент с конца массива

// Фильтрация и сортировка массива:
// 12) array.sort(compareFn) - сортирует массив в соответствии с заданной функцией сравнения элементов (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). Если функция не задана, то сортирует по-умолчанию: числа по возрастанию, строки посимвольно

// Функция выглядит так:
// function compareFn(a, b) {
//   if (a is less than b by some ordering criterion) {
//     return -1;
//   } else if (a is greater than b by the ordering criterion) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }

// Задачи: сортировка  массива строк и сортировка массива чисел
// let arr = [1, 23, 456, 3, 6, 999, 555, 25];

// arr.sort((a, b) => b - a);
// console.log(arr);

// 13) array.filter(callback, thiaArg) - фильтрует массив в соответствии с заданным callback. Callback принимает те же аргументы, что и у map

// let arr = [1, 2, 4, "", null, 5, 6, 7, undefined, 8, 9, 10];

// let arr2 = arr.filter((item) => {
//   return typeof item === "number";
// });

// console.log(arr2);

// Другие полезные методы массива: // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// 14) array.join(separator) - обьединяет массив по заданному сепаратору
// let arr = ["i", "am", "puzo"];

// let str = "My name is Alex Ivanov";

// let newArr = str
//   .split(" ")
//   .filter((item) => item[0] === item[0].toUpperCase())
//   .join(" ");

// console.log(newArr);

// 15) array.reverse() - разворачивает массив на месте
// 16) array1.concat(array2, array3, array4, ..., arrayN) - обьединяет массивы и возвращает новый
// let arr = [1, 2, 3];
// let arr2 = [3, 4, 5];
// let arr3 = [6, 7, 8];

// let res = arr.concat(arr2, arr3);

// console.log(res);

// 17) array.every(callback, thiaArg) - проверяет каждый элемент на условие, заданное в callback. Если все элементы удовлетворяют условию, то возвращает true, иначе - false
// let arr = [1, 2, 3, null, undefined, ""];

// let res = arr.every((item) => typeof item === "number");
// console.log(res);

// 18) array.fill(value, start, end) - заполяет массив заданным значением от start (индекс) до end (индекс)
// let arr = new Array(10);
// let res = arr.fill("Pasha", 0, 10);
// console.log(res);

// 19) Array.isArray(arr) - проверяет является ли структура массивом
// let a = {};
// let b = "";
// let c = [];

// console.log(Array.isArray(a));
// console.log(Array.isArray(b));
// console.log(Array.isArray(c));

// 20) array.some(callback, thiaArg) - проверяет удовлетворяет ли хотя бы один элемент в массиве заданному условию в callback

// Задачи:
// 1) Что выведет console.log?
// let fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");

// // что в fruits?
// console.log(fruits.length); // 4

// 2) Давайте произведём 5 операций с массивом.
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.

// let styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// console.log(styles);
// // splice(start, deleteCount, item1)
// styles.splice(Math.floor(styles.length / 2), 0, "«Классика»");
// console.log(styles);
// console.log(styles.shift());
// styles.unshift("Реп", "Регги");
// console.log(styles);

// 3) Каков результат? Почему?
// let arr = ["a", "b"];

// arr.push(function () {
//   console.log(this);
// }); // ['a', 'b', function]

// arr[2](); // [ 'a', 'b', [Function (anonymous)] ]

// 4) https://www.codewars.com/kata/5583090cbe83f4fd8c000051
// 5) https://www.codewars.com/kata/558fc85d8fd1938afb000014
// 6) https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
// 7) https://www.codewars.com/kata/5949481f86420f59480000e7

// 8) https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c
// 9) https://www.codewars.com/kata/545a4c5a61aa4c6916000755
// 10) https://www.codewars.com/kata/539ee3b6757843632d00026b
