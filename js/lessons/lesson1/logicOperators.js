"user strict";
// Операнд - это число по одну или другую сторону от оператора
// a + b - в этом случае + является бинарным оператором, потому что по бокам от него стоят 2 операнда: a и b
// +b - в этом случае + является унарным оператором, потому что по бокам от него стоит 1 операнд: b

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// Условия и логические операторы
// Конструкция if: if (условие) { действия } else { действия }
// Тернарный оператор: условие ? действия при true : действия при false
// const a = 2;
// const b = "Pasha";

// if (a === 2) {
//   console.log(true);
// } else {
//   console.log(false);
// } // true

// console.log(a == "2" ? true : false); // true
// console.log(a === "2" ? false : true); // true

// && - логическое И. В случае с логическим И правило работает так, что для истинности все условия должны быть истинны
// Пример:
// if (a === 2 && b === "Lesha") {
//   console.log("Всё верно");
// } else {
//   console.log("Всё неверно");
// } // Все неверно

// || - логическое ИЛИ. Условие будет истинным если истинно хотя бы 1 подусловие.
// if (a === 2 || (b === "Lesha" && false)) {
//   console.log("Всё верно");
// } else {
//   console.log("Всё неверно");
// } // Все верно

// const b = false;
// let a = "pasha" && b;
// let c;

// c = a ? true : false; // false

// console.log("c = ", c); // true

// a = "pasha" || b;
// c = a ? true : false; // true
// console.log("c = ", c); // true

// != - не равно
// == - нестрогое равенство (пытается сделать приведение типов)
// === - строгое равенство
// > - больше
// < - меньше
// >= - больше или равно
// <= - меньше или равно
// Оператор нулевого слияния (??) - оператор ?? возвращает первый аргумент, если он не null/undefined, иначе второй

// const a = undefined;
// const b = "Hello";

// const c = a ?? "Сергей";
// const d = b ?? "It's me";

// console.log(c); //
// console.log(d); //

// let a = 10;

// if (a == 10) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// } //

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
