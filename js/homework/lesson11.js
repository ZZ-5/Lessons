// решить 5 задач на codewars 7 уровня. решения скопировать в файл

// Задача 1:   https://www.codewars.com/kata/538835ae443aae6e03000547/train/javascript

// Create a function add(n)/Add(n) which returns a function that always adds n to any number
// Note for Java: the return type and methods have not been provided to make it a bit more challenging.

// var addOne = add(1);
// addOne(3); // 4

// var addThree = add(3);
// addThree(3); // 6

// РЕШЕНИЕ:
// // function add(n) {
//   return function (x) {
//     return x + n;
//   }
// }

// Задача 2:     https://www.codewars.com/kata/54b7c8d2cd7f51a839000ebf/train/javascript

// Write the processArray function, which takes an array and a callback function as parameters.
// The callback function can be, for example, a mathematical function that will be applied on each element of this array.
// Optionally, also write tests similar to the examples below.

// Examples
// Array [4, 8, 2, 7, 5] after processing with function

// var myArray = [4, 8, 2, 7, 5];
// myArray = processArray(myArray,function (a) {
//   return a * 2;
// });
// will be [ 8, 16, 4, 14, 10 ].

// Array [7, 8, 9, 1, 2] after processing with function

// var myArray = [7, 8, 9, 1, 2];
// myArray = processArray(myArray, function (a) {
//   return a + 5;
// });
// will be [ 12, 13, 14, 6, 7 ].

// РЕШЕНИЕ:
// function processArray(arr, callback) {
//     return arr.map(callback)
// }

// Задача 3:   https://www.codewars.com/kata/57e0206335e198f82b00001d/train/javascript

// // In this kata you must take an input string, reverse the order of the words, and reverse the order of the letters within the words.

// But, as a bonus, every test input will end with a punctuation mark (! ? .) and the output should be returned with the mark at the end.

// // A few examples should help clarify:

// // esrever("hello world.") == "dlrow olleh."

// esrever("Much l33t?") == "t33l hcuM?"

// esrever("tacocat!") == "tacocat!"
// Quick Note: A string will always be passed in (though it may be empty) so no need for error-checking other types.

// РЕШЕНИЕ:    function esrever( str ){
//   let arr = str.split('').reverse()
//   let first = arr.shift();
//   arr.push(first)
//   return arr.join('')
// }

// Задача 4:    https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

// // Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// РЕШЕНИЕ:
// function longest(s1, s2) {
//   let arr = s1 + s2;
//   arr = arr.split("").sort();
//   let arr2 = [];

//   arr.forEach((item) => {
//     if (!arr2.includes(item)) {
//       arr2.push(item);
//     }
//   });

//   return arr2.join("");
// }
