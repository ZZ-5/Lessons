// 12) Написать функцию greatestSalary, которая принимает обьект и выводит сотрудника, у которого самая большая зп в формате:
// "Alex is a senior developer and his salary is 9999999".
// - Если у сотрудника в качестве зарплаты массив ежемесячных зарплат, то нужно считать среднюю и сравнивать её.
// let obj = {
//   Alex: {
//     grade: "senior",
//     salary: [350000, 500000, 450000, 700000],
//   },
//   Serg: {
//     grade: "middle",
//     salary: 300000,
//   },
//   Paul: {
//     grade: "junior",
//     salary: [0, 120000, 150000, 999999],
//   },
// };

// function getAverage(arr) {
//   let sum = arr.reduce((a, b) => a + b, 0);
//   return sum / arr.length;
// }

// function greatestSalary(obj) {
//   let employee = "";
//   let employeeGrade = "";
//   let maxSalary = 0;

//   for (let key in obj) {
//     let salary = obj[key].salary;

//     console.log("salary ", salary);

//     salary = Array.isArray(salary) ? getAverage(salary) : obj[key].salary;

//     if (maxSalary < salary) {
//       maxSalary = salary;
//       employee = key;
//       employeeGrade = obj[key].grade;
//     }
//   }

//   return `${employee} is a ${employeeGrade} developer and his salary is ${maxSalary}`;
// }

// console.log(greatestSalary(obj));

// ###################################################################################################
// ###################################################################################################

// 1) Написать функцию getEvenNumbers, которая принимает массив любых значений и возвращает массив только четных чисел
// let arr = ["1", 2, 3, 4, 5, 6, 7, 8, null, undefined, "324", "3.14zda"];

// function getEvenNumbers(arr) {
//   let array = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (
//       arr[i] && // 1) это приведется к true или false // 3) оператор сравнит то, что привелось к true или false с обеих сторон
//       arr[i] % 2 == 0 // 2) это приведетя к true или false
//     ) {
//       array.push(+arr[i]);
//     }
//   }
//   return array;
// }

// console.log(getEvenNumbers(arr));

// 2) Написать функцию isSortedAndHow, которая принимает массив чисел и
// - если массив отсортирован по убыванию выведет "По убыванию"
// - если массив отсортирован по возрастанию выведет "По возрастанию"
// - если массив не отсортирован выведет "Не отсортирован"

// let array = [-2, 1, 3, 4, 5, 6, 7, 25, 35, 10, 11, 12];
// let array = [1, 2, 3];
// let array = [3, 2, 1];

// function isSortedAndHow(arr) {
//   let ascend = true;
//   let descend = true;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1]) {
//       descend = false;
//     } else if (arr[i] > arr[i + 1]) {
//       ascend = false;
//     }
//   }
//   if (ascend) {
//     return "По возрастанию";
//   }
//   if (descend) {
//     return "По убыванию";
//   } else return "Не отсортирован";
// }

// console.log(isSortedAndHow(array));

// 3) Написать функцию minValuesSum, которая находит сумму минимальных значений каждой строки двумерного массива
// Пример:
// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ] // 1 + 5 + 20 = 26

// let array = [
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 9],
//   [20, 21, 34, 56, 100],
// ];

// function minValuesSum(arr) {
//   let sum = 0;
//   let min = 0;

//   for (let i = 0; i < arr.length; i++) {
//     min = arr[i][0];

//     for (let j = 0; j < arr[i].length; j++) {
//       if (min > arr[i][j]) {
//         min = arr[i][j];
//       }
//     }
//     sum += min;
//     console.log("sum ", sum);
//   }

//   return sum;
// }

// console.log(minValuesSum(array));

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
