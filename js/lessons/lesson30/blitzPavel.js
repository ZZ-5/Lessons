// 1) Написать функцию getEvenNumbers, которая принимает массив любых значений и возвращает массив только четных чисел
// let arr = ["1", 2, 3, 4, 5, 6, 7, 8, null, undefined, "324", "3.14zda"];

// let getEvenNumbers = (arr) => {
//   let arr2 = arr
//     .map((i) => {
//       return +i;
//     })
//     .filter((i) => {
//       if (i % 2 === 0) {
//         return +i;
//       }
//     });
//   return arr2;
// };

// const getEvenNumbers = (arr) =>
//   arr.reduce((acc, item) => {
//     if (item && item % 2 === 0) {
//       acc.push(+item);
//     }

//     return acc;
//   }, []);

// console.log(getEvenNumbers(arr));

// 2) Написать функцию isSortedAndHow, которая принимает массив чисел и
// - если массив отсортирован по убыванию выведет "По убыванию"
// - если массив отсортирован по возрастанию выведет "По возрастанию"
// - если массив не отсортирован выведет "Не отсортирован"

// 3) Написать функцию minValuesSum, которая находит сумму минимальных значений каждой строки двумерного массива
// Пример:
// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ] // 1 + 5 + 20 = 26

// 1) пройтись по массиву
// 2) для каждого элемента дернуть минимальное число
// 3) закинуть минимальное число в sum

// let arr = [
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 9],
//   [20, 21, 34, 56, 100],
// ];

// function minValuesSum(arr) {
//   let sum = 0;

//   arr.forEach((element) => {
//     let min = Math.min(...element);
//     sum = sum + min;
//   });

//   return sum;
// }

// Альтернативный способ
// console.log(arr.reduce((sum, i) => sum + Math.min(...i), 0))

// let res = minValuesSum(arr);

// console.log(res);

// 4) Написать функцию matrixAddition(arr1, arr2), которая сложит попарно все числа в матрицах

// Пример:
// matrixAddition(
//   [ [1, 2, 3],
//     [3, 2, 1],
//     [1, 1, 1] ],
// //      +
//   [ [2, 2, 1],
//     [3, 2, 3],
//     [1, 1, 3] ] )

// // returns:
//   [ [3, 4, 4],
//     [6, 4, 4],
//     [2, 2, 4] ]