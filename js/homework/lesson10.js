// 1. https://learn.javascript.ru/closure - ещё раз почитать про замыкания и сделать задачи  в конце + коспект сюда же + задачи после главы
// 2. https://learn.javascript.ru/garbage-collection - почитать про сборку мусора в js
// 3.


// Задача 1:
/* .. ваш код для inBetween и inArray */
// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//     return
// }

// function inArray(arr) {
//     return
// }








// alert(arr.filter(inBetween(3, 6))); // 3,4,5,6
// alert(arr.filter(inArray([1, 2, 10]))); // 1,2


// // Задача 2: Напишите функцию byField, которая может быть использована для этого.

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(params) {
//     return
// }



// users.sort(byField('name'));
// users.sort(byField('age'));



// // Задача 3: Почините код, чтобы он работал как задумано.
// function makeArmy() {
//     let shooters = [];

//     let i = 0;
//     while (i < 10) {
//         let shooter = function () { // функция shooter
//             return i;// должна выводить порядковый номер
//         };
//         shooters.push(shooter()); // и добавлять стрелка в массив
//         i++;
//     }

//     // ...а в конце вернуть массив из всех стрелков
//     return shooters;
// }



// function makeArmy() {
//     let shooters = [];
//     let i;
//     for (i = 0; i < 10; i++) {
//         // console.log(i)
//         shooters.push(i);
//     }
//     return shooters;
// }

// let army = makeArmy();

// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
// army[0](); // 10 от стрелка с порядковым номером 0
// army[1](); // 10 от стрелка с порядковым номером 1
// army[2](); // 10 ...и т.д.

console.log(army);