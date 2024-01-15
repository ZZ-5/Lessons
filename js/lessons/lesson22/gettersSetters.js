// Свойства - геттеры и сеттеры

// Первый тип это свойства-данные (data properties). Мы уже знаем, как работать с ними. Все свойства, которые мы использовали до текущего момента, были свойствами-данными.

// Второй тип свойств мы ещё не рассматривали. Это свойства-аксессоры (accessor properties). По своей сути это функции, которые используются для присвоения и получения значения, но во внешнем коде они выглядят как обычные свойства объекта.

// let user = {
//   name: "John",
//   surname: "Smith",
//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },
// };

// console.log(user.fullName);
// user.fullName = "Павел Иванников";
// console.log(user.fullName);

// user.fullName = "Сергей Соловьев";
// console.log(user.fullName);

// Дескрипторы свойств-аксессоров отличаются от «обычных» свойств-данных.
// Свойства-аксессоры не имеют value и writable, но взамен предлагают функции get и set.
// То есть, дескриптор аксессора может иметь:

// get – функция без аргументов, которая сработает при чтении свойства,
// set – функция, принимающая один аргумент, вызываемая при присвоении свойства,
// enumerable – то же самое, что и для свойств-данных,
// configurable – то же самое, что и для свойств-данных.

// let pasha = {
//   name: "Pasha",
//   lastname: "Ivannikov",
// };

// Object.defineProperty(pasha, "fullName", {
//   get: function () {
//     return `${this.name} ${this.lastname}`;
//   },
//   set: function (value) {
//     [this.name, this.lastname] = value.split(" ");
//   },
// });

// console.log(pasha.fullName);
