// Обычно мы смотрели на обьект как на структуру с набором свойств в виде ключ-значение. На самом деле свойств обьекта есть не только значения, но и специальный атрибуты, который называются флагами:

// writable - булевый флаг. Если он находится в значении true, то свойство обьекта можно изменить
// enumerable - если true указывает что свойство отобразится, когда мы будем обходить обьект с помощью цикла
// configurable - если true, то свойство можно удалить, т.е. удалять свойства и менять значения дескрипторов. Если false, то ничего нельзя сделать.

// let pasha = {};

// Object.defineProperties(pasha, {
//   name: {
//     value: "Pasha",
//     writable: false,
//     enumerable: true,
//     configurable: true,
//   },
//   lastname: {
//     value: "Ivannikov",
//     writable: false,
//     enumerable: true,
//     configurable: true,
//   },
//   job: { value: null, enumerable: false, writable: true, configurable: true },
//   likeBeer: {
//     value: true,
//     configurable: false,
//     writable: true,
//     enumerable: true,
//   },
// });

// pasha.name = "Alex";
// pasha.lastname = "Ivanov";

// // let descriptor = Object.getOwnPropertyDescriptors(pasha);
// // console.log(descriptor);

// console.log(pasha.name);
// console.log(pasha.lastname);
// console.log(pasha);
// console.log("\n");
// // console.log(Object.keys(pasha));

// for (let i in pasha) {
//   console.log(i);
// }

// Глобальное запечатывание объекта
// Дескрипторы свойств работают на уровне конкретных свойств.

// Но ещё есть методы, которые ограничивают доступ ко всему объекту:

// Object.preventExtensions(obj) - Запрещает добавлять новые свойства в объект.
// Object.seal(obj) - Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.
// Object.freeze(obj) - Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false для всех существующих свойств.

// А также есть методы для их проверки:
// Object.isExtensible(obj) - Возвращает false, если добавление свойств запрещено, иначе true.
// Object.isSealed(obj) - Возвращает true, если добавление/удаление свойств запрещено и для всех существующих свойств установлено configurable: false.
// Object.isFrozen(obj) - Возвращает true, если добавление/удаление/изменение свойств запрещено, и для всех текущих свойств установлено configurable: false, writable: false.
