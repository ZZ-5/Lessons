// Рекурсия и стек https://learn.javascript.ru/recursion
// Рекурсия – это приём программирования, полезный в ситуациях, когда задача может быть естественно разделена на несколько аналогичных, но более простых задач. Или когда задача может быть упрощена до несложных действий плюс простой вариант той же задачи. Или, как мы скоро увидим, для работы с определёнными структурами данных.

// Другими словами: рекурсия - это прием в программировании, когда функция вызывает сама себя + обладает атомарным условием для завершения

// В качестве первого примера напишем функцию pow(x, n), которая возводит x в натуральную степень n. Иначе говоря, умножает x на само себя n раз.

// pow(2, 2) = 4
// pow(2, 3) = 8
// pow(2, 4) = 16

// итеративный способ
// function pow(x, n) {
//   let res = 1;

//   for (let i = 0; i < n; i++) {
//     res = res * x; // 1 * 5 * 5 * 5
//   }

//   return res;
// }

// console.log(pow(5, 3));

// рекурсивный способ
// function pow1(x, n) {
//   if (n === 1) return x;

//   return x * pow1(x, n - 1);
// }

// pow1(5, 3);

// Function exec context #1
// Lexical env
// Variable env
// x = 5, n = 3
// return x * pow1(5, 2) {
//// Function exec conxtext #2
//// Lexical env
//// Variable env
//// x = 5, n = 2
//// return x * pow1(5, 1) {
////// Function exec conxtext #3
////// Lexical env
////// Variable env
////// x = 5, n = 1
////// return x
//// }
// }

// 1. Найти атомарное условие, при котором вызов функции завершится
// 2. Вернуть выражение, которое будет содержать вызов фукции с уменьшенными аргументами

// Call stack будет выглядеть так:
// 3) pow1(5, 1) -> return 5
// 2) pow1(5, 2) -> return 5 * 5
// 1) pow1(5, 3) -> 5 * 25

// let company = {
//   sales: [
//     {
//       name: "John",
//       salary: 1000,
//     },
//     {
//       name: "Alice",
//       salary: 600,
//     },
//   ],
//   development: {
//     sites: [
//       {
//         name: "Peter",
//         salary: 2000,
//       },
//       {
//         name: "Alex",
//         salary: 1800,
//       },
//     ],
//     internals: [
//       {
//         name: "Jack",
//         salary: 1300,
//       },
//     ],
//   },
// };

// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((sum, item) => (sum += item.salary), 0);
//   } // если department - это массив, то я посчитаю сумму зарплат внутри этого массива и верну её

//   let summary = 0;
//   let miniDeps = Object.values(department);

//   console.log("miniDeps ", miniDeps);

//   for (let miniDep of miniDeps) {
//     summary += sumSalaries(miniDep);
//   }

//   return summary;
// }

// console.log(sumSalaries(company));

// Вызов 1: sumSalaries(company), let summary = 0; let miniDeps = [sales, development];
// 1.1) summary = summary + sumSalaries(sales) -> 1600
// 1.2) summary = summary + sumSalaries(development)
// 1.2.1) let summary = 5100; let miniDeps = [sites, internals]

// Связанный список
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// let list = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };
// list.next.next.next.next = null;

// итеративное решение (решение с помощью итераций, то есть с использованием цикла)
// function sum(n) {
//   let res = 0;
//   for (let i = 0; i <= n; i++) {
//     res = res + i;
//   }
//   return res;
// }

// рекурсивное решение
// function sum(n) {
//   if (n === 1) return n;

//   return n + sum(n - 1);
// }

// sum(10) -> 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 (1)
// // sum (9) -> 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 (2)
// // // sum (8) -> 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 (3)
// // // // sum (7) -> 7 + 6 + 5 + 4 + 3 + 2 + 1 (4)
// // // // // sum (6) -> 6 + 5 + 4 + 3 + 2 + 1 (5)
// // // // // // sum (5) -> 5 + 4 + 3 + 2 + 1 (6)
// // // // // // // sum (4) -> 4 + 3 + 2 + 1 (7)
// // // // // // // // sum (3) -> 3 + 2 + 1 (8)
// // // // // // // // // sum (2) -> 2 + 1 (9)
// // // // // // // // // // sum (1) -> 1 (10)

// решение с использованием фукнции арифметической прогрессии:
// Сумма первых n членов арифметической прогрессии: S = a ((n + 1) / 2) * n
// function sum(n) {
//   return (n * (n + 1)) / 2;
// }

// console.log(sum(10));

// Посчитать факториал 2 способами:

// 5! = 1 * 2 * 3 * 4 * 5
// 6! = 1 * 2 * 3 * 4 * 5 * 6

// // итеративное решение
// function fact(n) {
//   let res = 1;

//   for (let i = 1; i <= n; i++) {
//     res = res * i;
//   }

//   return res;
// }

// console.log(fact(5)); // 1 * 2 * 3 * 4 * 5 = 120

// рекурсивное решение
// function fact(n) {
//   if (n === 1) return n;

//   return n * fact(n - 1);
// }

// console.log(fact(10));
