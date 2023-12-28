// Остаточные параметры и оператор расширения - пишутся как ...

// остаточные параметры всегда находятся в конце
// function sum(a, b, ...rest) {
//   console.log(rest);

//   return a + b;
// }

// sum(1, 2, 3, 4, 5, 6, 7, 8);

// arguments - переменная, хранящая все аргументы, переданные в функцию
// function sum(a, b, ...rest) {
//   console.log(rest);

//   console.log(arguments);

//   return a + b;
// }

// sum(1, 2, 3, 4, 5);

// Оператор расширения - это тоже оператор, который обозначается троеточием, но испоьзуется в других целях
// let arr = [3, 5, 1];

// Math.max(1, 2, 3, 4, 5)

// console.log(Math.max(arr[0], arr[1], arr[2])); // вместо этого
// console.log(Math.max(...arr)); // делать это

// Этим же способом мы можем передать несколько итерируемых объектов:
// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];

// console.log(Math.max(...arr1, ...arr2)); // 1, -2, 3, 4, 8, 3, -8, 1

// Мы даже можем комбинировать оператор расширения с обычными значениями:
// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];

// console.log(Math.max(1, ...arr1, 2, ...arr2, 25)); // 1, 1, -2, 3, 4, 2, 8, 3, -8, 1, 25

// Оператор расширения можно использовать и для слияния массивов:
// let arr = [3, 5, 1];
// let arr2 = [8, 9, 15];

// let merged = [0, ...arr, 2, ...arr2]; // 0, 3, 5, 1, 2, 8, 9, 15

// console.log(merged); // 0, 3, 5, 1, 2, 8, 9, 15

// оператор расширения подойдёт для того, чтобы превратить строку в массив символов:
// let str = "Привет";

// console.log([...str]); // [П,р,и,в,е,т]
