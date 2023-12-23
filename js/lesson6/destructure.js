"user strict";
// Деструктурирующее присваивание – это специальный синтаксис, который позволяет нам «распаковать» массивы или объекты в несколько переменных, так как иногда они более удобны.

// у нас есть массив с именем и фамилией
// let arr = ["Ilya", "Kantor"];

// let a = arr[0];

// // деструктурирующее присваивание
// // записывает firstName = arr[0]
// // и surname = arr[1]
// let [firstName, surname] = ["Ilya", "Kantor"];
// let newArr = ["Pasha", "Alex", "Ann"];

// let name1 = newArr[0]
// let name2 = newArr[1]
// let name3 = newArr[2]

// тоже самое что:
// let [name1, name2, name3] = newArr;

// console.log(name1);
// console.log(name2);
// console.log(name3);
// console.log(newArr);

// console.log(firstName); // Ilya
// console.log(surname);  // Kantor
// console.log(arr) // ["Ilya", "Kantor"] - массив остался впорядке

// let [firstName, surname] = "Ilya Kantor".split(" ");
// console.log(firstName); // Ilya
// console.log(surname); // Kantor

// Можно пропускать элементы
// второй элемент не нужен
// let [firstName, , title] = [
//   "Julius",
//   "Caesar",
//   "Consul",
//   "of the Roman Republic",
// ];
// console.log(title); // Consul

// function useState() {
//   // ...
//   return [state, setState]
// }

// const [state, setState] = useState()

// можно сделать деструктуризацию с любым перебираемым обьектом
// let [a, b, c] = "abc";

// console.log(a);
// console.log(b);
// console.log(c);

// let [one, two, three] = new Set([1, 2, 3]);
// console.log(one);
// console.log(two);
// console.log(three);

// Можно даже через цикл
// let user = {
//   name: "John",
//   age: 30,
// };

// console.log(Object.entries(user)); // [name, John]

// // // цикл по ключам и значениям
// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key}:${value}`); // name:John, затем age:30
// }

// Остаточные параметры работают и здесь:
// let [name1, name2, ...rest] = [
//   "Julius",
//   "Caesar",
//   "Consul",
//   "of the Roman Republic",
// ];

// console.log(rest); // "Consul", "of the Roman Republic"
// console.log(rest.length); // 2

// Что будет в данном случае?
// let [firstName, surname] = [];

// console.log(firstName); // undefined
// console.log(surname); // undefined

// Деструктурировать можно и обьект
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };

// let { qwe, title, height } = options;

// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200

// В отличие от массива порядок не имеет значения:
// let obj = { title: "Menu", height: 200, width: 100 };
// let { height, width, title } = obj;

// Если мы хотим достать свойство обьекта, то придется обращаться к нему по названию ключа. А что если у нас уже есть переменная с таким названием и мы хотим назвать ее по-другому? Тогда это можно сделать так:
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };

// let title = "";
// let width = "";
// let height = "";

// let { title: myTitle, width: myWidth, height: myHeight } = options;

// также мы можем задать начальные значения для свойств, которых потенциально нет
// let options = {
//   title: "Menu",
//   width: 500,
// };

// let { width = 100, height = 200, title } = options;

// console.log(title); // Menu
// console.log(width); // 500
// console.log(height); // 200

// Как в данном случае работают остаточные параметры:
// let options = {
//   title: "Menu",
//   height: 200,
//   width: 100,
// };

// // // title = свойство с именем title
// // // rest = объект с остальными свойствами
// let { title, ...rest } = options; // - кстати, тут важен тип переменной. Если будет const, то мы не сможем менять её далее в скрипте.

// // // сейчас title="Menu", rest={height: 200, width: 100}
// console.log(rest); //
// console.log(rest.height); //
// console.log(rest.width); //

// Вложенная деструктуризация
// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// // // деструктуризация разбита на несколько строк для ясности
// let {
//   size: { // положим size сюда
//     width,
//     height
//   },
//   items: [item1, item2], // добавим элементы к items
//   title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
// } = options;

// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200
// console.log(item1);  // Cake
// console.log(item2);  // Donut

// Умные параметры функций
// function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
//   // ...
//   console.log(title); //
//   console.log(width); //
//   console.log(height); //
//   console.log(items); //
// }

// showMenu();

// Можно передать параметры как обьект
// мы передаём объект в функцию
// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"],
// };

// // ...и она немедленно извлекает свойства в переменные
// function MyComponent({
//   title = "Untitled",
//   width = 200,
//   height = 100,
//   items = [],
// }) {
//   // title, items – взято из options,
//   // width, height – используются значения по умолчанию
//   alert(`${title} ${width} ${height}`); // My Menu 200 100
//   alert(items); // Item1, Item2
// }

// showMenu(options);

// 1) Задача: достать из обьекта свойства
// let user = {
//   name: "John",
//   years: 30,
// };

// let name = "Alex",
//   years = 29;

// let { name: myName, years: myYears } = user;

// 2) Задача: достать из обьекта свойства и назвать их a и y
// let user = {
//   name: "John",
//   years: 30
// };

// 3) Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Alex: 300,
//   Mary: 250,
// };

// function topSalary(salaries) {
//   let arrSalaries = Object.entries(salaries);

//   if (arrSalaries.length === 0) {
//     return null;
//   }

//   let maxSalary = ["", 0];

//   arrSalaries.forEach((i) => {
//     const [name, salary] = i;

//     if (salary > maxSalary[1]) {
//       maxSalary = i;
//     }
//   });

//   const [name] = maxSalary;

//   return name;
// }

// console.log(topSalary(salaries));
