"user strict";
// Циклы for, while, do-while, for...of, for...in

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Цикл for
// Назначение: перебор итерируемой структуры данных, выполнение набора однотипных действий много раз
// Простыми словами: если мы хотим вывести в консоль числа от 1 до 10000, то мы не будем 10000 раз писать console.log, а напишем цикл, который сделает это за нас
// Синтаксис: for (начало; условие; шаг цикла) { тело цикла }

// Пример:
// for (let i = 0; i < 10; i = i + 1) {
//   console.log("i = ", i);
// }

// Задачи:
// 1. Посчитать количество четных чисел в массиве:
// const array = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 13, 14, 14, 20, 23, 27, 43, 57,
// ];

// console.log(array[0]); // первый элемент массива
// console.log(array[5]); // пятый элемент массива
// console.log(array.length); // длина массива
// console.log(array[array.length - 1]); // последний элемент массива

// let sumEven = 0;
// for (let i = 0; i < array.length; i = i + 1) {
//   if (array[i] % 2 === 0) {
//     sumEven = sumEven + 1;
//   }
// }
// console.log(sumEven);

// 2. Найти сумму чисел в массиве:
// const array = [
//   1, 2, 3, 4, 5, -6, 7, 8, 9, 10, 11, -12, 13, -13, 13, 14, 14, -20, 23, 27, 43,
//   57,
// ];

// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   sum = sum + array[i];
// }

// console.log(sum);

// 3. Найти количество входов подстроки в строку (сколько раз данная подстрока присутствует в исходной строке)
// const str =
//   "pashapashapashaasdfasdfpashapashapashaadsfasdfasfpashapashaadfasdfasdfasdfadfadsfpashaadfasdfpashalkljljkpashaljkljkljadsfasfpashalkjlkjasdfadspashalkjasdfasdflkjpashaadfasdlfkjpashapashaadsfasdflkjlkjasdfasdfpashapashaasdfasdfasdfpashapasha"; // result: 20
// const substr = "pasha";

// for (let i = 0; i < array.length; i++) {

// }

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Цикл while
// Назначение: такое же как и у for, но синтаксис другой
// While будет выполняться пока условие истинно
// Синтаксис: while (условие) { тело цикла }

// Пример:
// let i = 9;
// while (i < 10) {
//   console.log("i = ", i);
//   i = i + 1;
// }

// Задачи: такие же как и у for, только с использованием цикла while
// 1. Посчитать количество четных чисел в массиве:
// const array = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 13, 14, 14, 20, 23, 27, 43, 57,
// ];
// let sumEven = 0;
// let i = 0;
// while (i < array.length) {
//   if (array[i] % 2 === 0) {
//     sumEven = sumEven + 1;
//   }
//   i = i + 1;
// }

// console.log(sumEven);

// 2. Найти сумму чисел в массиве:
// const array = [
//   1, 2, 3, 4, 5, -6, 7, 8, 9, 10, 11, -12, 13, -13, 13, 14, 14, -20, 23, 27, 43,
//   57,
// ];

// let sum = 0;
// let i = 0;
// // while - когда
// while (i < array.length) {
//   sum = sum + array[i];
//   i++;
// }
// console.log(sum);

// 3. Найти количество входов подстроки в строку (сколько раз данная подстрока присутствует в исходной строке)
// const str = "pashapashapashaasdfasdfpashapashapashaadsfasdfasfpashapashaadfasdfasdfasdfadfadsfpashaadfasdfpashalkljljkpashaljkljkljadsfasfpashalkjlkjasdfadspashalkjasdfasdflkjpashaadfasdlfkjpashapashaadsfasdflkjlkjasdfasdfpashapashaasdfasdfasdfpashapasha"
// const substr = "pasha";

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Цикл do-while
// Назначение: такое же как у while, но с одним отличием: do-while выполнится как минимум один раз
// Синтаксис: do { тело цикла } while (условие)

// Пример:
// let i = 0;
// do {
//   console.log("Я выполнюсь только 1 раз");
//   i = i + 1;
// } while (i <= 0);

// Задачи:
// 1. Павел и Алексей собрались посидеть в дружеской обстановке и выпить пива. Поскольку Паша и Алексей являются хорошими друзьями, Павел отлично знает, что Алексею нельзя выпивать больше 3 литров пива за одну встречу, иначе обстановка перестаёт быть дружеской. Напишите цикл, который будет считать количество выпитого пива до отметки, когда Алексею хватит. Считать количество выпитого пива нужно в банках объемом 0.5л.
// let beerCount = 0;
// let liters = 0;
// const vol = 0.5;
// do {
//   console.log("beerCount ", beerCount);
//   liters = liters + vol;
//   beerCount = beerCount + 1;
// } while (liters < 3);

// console.log("beerCount ", beerCount);

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Цикл for...in
// Назначение: Для перебора всех свойств объекта
// Синтаксис: while (условие) { тело цикла }

// Пример:
// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// for (let key in user) {
//   // ключи
//   console.log(key); // name, age, isAdmin
//   // значения ключей
//   console.log(user[key]); // John, 30, true
// }

// Задачи:
// 1. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// console.log(multiplyNumeric(menu));

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Цикл for...of
// Назначение: Позволяет обойти итерируемый обьект (Array, Map, Set). Не даёт доступа к индексу элемента, только к значению.
// Синтаксис: while (условие) { тело цикла }

// Пример:
// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// for (let key in user) {
//   // ключи
//   console.log(key); // name, age, isAdmin
//   // значения ключей
//   console.log(user[key]); // John, 30, true
// }

// Задачи:
// 1. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// console.log(multiplyNumeric(menu));

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Прерывание цикла и переход к следующей итерации

// Если возникает необходимость выйти из цикла раньше, чем его условие станет равным false, то можно использовать break:

// let i = 0;

// while (i < 10) {
//   if (i > 6) break;

//   i = i + 1;
//   console.log("i = ", i);
// }

// Если нам не нужно экстренно завершать цикл, а всего лишь перейти к следующей итерации, то можно использоваться continue:

// for (let i = 0; i < 10; i++) {
//   // если true, пропустить оставшуюся часть тела цикла
//   if (i % 2 == 0) continue;

//   console.log(i); // 1, 3, 5, 7, 9
// }

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// ВАЖНО: Поскольку массив является обьектом, его можно обойти с помощью for...in, но так лучше не делать.
// Цикл for..in выполняет перебор всех свойств объекта, а не только цифровых.

// 1. В браузере и других программных средах также существуют так называемые «псевдомассивы» – объекты, которые выглядят, как массив. То есть, у них есть свойство length и индексы, но они также могут иметь дополнительные нечисловые свойства и методы, которые нам обычно не нужны. Тем не менее, цикл for..in выведет и их. Поэтому, если нам приходится иметь дело с объектами, похожими на массив, такие «лишние» свойства могут стать проблемой.

// 2. Цикл for..in оптимизирован под произвольные объекты, не массивы, и поэтому в 10-100 раз медленнее. Увеличение скорости выполнения может иметь значение только при возникновении узких мест. Но мы всё же должны представлять разницу.