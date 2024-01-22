// В этой главе мы разберём цепочку промисов.

// Она выглядит вот так:

// Идея состоит в том, что результат первого промиса передаётся по цепочке обработчиков .then.

// { state: 'pending/fulfilled/rejected', result: value/err }
// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000); // (*)
// })
//   .then(function (result) {
//     // (**)

//     console.log(result); // 1
//     return result * 2;
//   })
//   .then(function (result) {
//     // (***)

//     console.log(result); // 2
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result); // 4
//     return result * 2;
//   });

// console.log("result ", promise); // 8

// Пример с ошибкой:

// Это не цепочка промисов, это просто множество обработчиков одного промиса:

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// });

// promise.then(function (result) {
//   console.log(result); // 1
//   return result * 2;
// });

// promise.then(function (result) {
//   console.log(result); // 1
//   return result * 2;
// });

// promise.then(function (result) {
//   console.log(result); // 1
//   return result * 2;
// });

// Возвращаем промисы
// Обработчик handler, переданный в .then(handler), может вернуть промис.
// В этом случае дальнейшие обработчики ожидают, пока он выполнится, и затем получают его результат.
// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     console.log(result); // 1

//     return new Promise((resolve, reject) => {
//       // (*)
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then(function (result) {
//     // (**)

//     console.log(result); // 2

//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(result); // 4
//   });

// Пример с загрузкой скрипта:

// loadScript("/article/promise-chaining/one.js")
//   .then(function(script) {
//     return loadScript("/article/promise-chaining/two.js");
//   })
//   .then(function(script) {
//     return loadScript("/article/promise-chaining/three.js");
//   })
//   .then(function(script) {
//     // вызовем функции, объявленные в загружаемых скриптах,
//     // чтобы показать, что они действительно загрузились
//     one();
//     two();
//     three();
//   })

// Перепишем компакнее:

// loadScript("/article/promise-chaining/one.js")
//   .then(script => loadScript("/article/promise-chaining/two.js"))
//   .then(script => loadScript("/article/promise-chaining/three.js"))
//   .then(script => {
//     // скрипты загружены, мы можем использовать объявленные в них функции
//     one();
//     two();
//     three();
//   });

// Thenable
// Если быть более точными, обработчик может возвращать не именно промис, а любой объект, содержащий метод .then, такие объекты называют «thenable», и этот объект будет обработан как промис.

// Смысл в том, что сторонние библиотеки могут создавать свои собственные совместимые с промисами объекты. Они могут иметь свои наборы методов и при этом быть совместимыми со встроенными промисами, так как реализуют метод .then.

// Вот пример такого объекта:

// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     console.log(resolve); // function() { native code }
//     // будет успешно выполнено с аргументом this.num*2 через 1 секунду
//     setTimeout(() => resolve(this.num * 2), 1000); // (**)
//   }
// }

// new Promise((resolve) => resolve(1))
//   .then((result) => {
//     return new Thenable(result); // (*)
//   })
//   .then(console.log); // показывает 2 через 1000мс

// Более сложный пример:

// let promise = fetch(url);

// fetch('/article/promise-chaining/user.json')
//   // .then в коде ниже выполняется, когда удалённый сервер отвечает
//   .then(function(response) {
//     // response.text() возвращает новый промис,
//     // который выполняется и возвращает полный ответ сервера,
//     // когда он загрузится
//     return response.text();
//   })
//   .then(function(text) {
//     // ...и здесь содержимое полученного файла
//     console.log(text); // {"name": "iliakan", isAdmin: true}
//   });

// Переделаем со стрелочными функциями
// то же самое, что и раньше, только теперь response.json() читает данные в формате JSON
// fetch('/article/promise-chaining/user.json')
//   .then(response => response.json())
//   .then(user => console.log(user.name)); // iliakan, получили имя пользователя

//   Сделаем что-нибудь с полученными данными:
//   Например, мы можем послать запрос на GitHub, чтобы загрузить данные из профиля пользователя и показать его аватар:
//   // Запрашиваем user.json
// fetch('/article/promise-chaining/user.json')
// // Загружаем данные в формате json
// .then(response => response.json())
// // Делаем запрос к GitHub
// .then(user => fetch(`https://api.github.com/users/${user.name}`))
// // Загружаем ответ в формате json
// .then(response => response.json())
// // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
// .then(githubUser => {
//   let img = document.createElement('img');
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);

//   setTimeout(() => img.remove(), 3000); // (*)
// });

// Чтобы сделать наш код расширяемым, нам нужно возвращать ещё один промис, который выполняется после того, как завершается показ аватара.

// fetch("/article/promise-chaining/user.json")
//   .then((response) => response.json())
//   .then((user) => fetch(`https://api.github.com/users/${user.name}`))
//   .then((response) => response.json())
//   .then(
//     (githubUser) =>
//       new Promise(function (resolve, reject) {
//         // (*)
//         let img = document.createElement("img");
//         img.src = githubUser.avatar_url;
//         img.className = "promise-avatar-example";
//         document.body.append(img);

//         setTimeout(() => {
//           img.remove();
//           resolve(githubUser); // (**)
//         }, 3000);
//       })
//   )
//   // срабатывает через 3 секунды
//   .then((githubUser) => console.log(`Закончили показ ${githubUser.name}`));

// То есть, обработчик .then в строке (*) будет возвращать new Promise, который перейдёт в состояние «выполнен» только после того, как в setTimeout (**) будет вызвана resolve(githubUser).

// Как разбить код, представленный выше, чтобы было красивее:

// function loadJson(url) {
//   return fetch(url)
//     .then(response => response.json());
// }

// function loadGithubUser(name) {
//   return fetch(`https://api.github.com/users/${name}`)
//     .then(response => response.json());
// }

// function showAvatar(githubUser) {
//   return new Promise(function(resolve, reject) {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser);
//     }, 3000);
//   });
// }

// // // Используем их:
// loadJson('/article/promise-chaining/user.json')
//   .then(user => loadGithubUser(user.name))
//   .then(showAvatar)
//   .then(githubUser => console.log(`Показ аватара ${githubUser.name} завершён`));
// ...

// Задачи:
// Являются ли фрагменты кода ниже эквивалентными? Другими словами, ведут ли они себя одинаково во всех обстоятельствах, для всех переданных им обработчиков?

// new Promise(function (resolve, reject) {}).then(res => {}, rej => {}).catch(err => {}).finally(() => )

// promise.then(f1).catch(f2);

// Против:

// promise.then(f1, f2);

// Ошибка передаётся по цепочке, но во втором примере нет продолжения цепочки после f1.

// Другими словами, .then передаёт результат или ошибку следующему блоку .then/catch. Так как в первом примере в цепочке далее имеется блок catch, а во втором – нет, то ошибка в нём останется необработанной.
