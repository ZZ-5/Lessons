// Допустим, нам нужно запустить множество промисов параллельно и дождаться, пока все они выполнятся.

// Например, параллельно загрузить несколько файлов и обработать результат, когда он готов.

// Для этого как раз и пригодится Promise.all.

// Синтаксис:
// let promise = Promise.all(iterable);

// Метод Promise.all принимает массив промисов (может принимать любой перебираемый объект, но обычно используется массив) и возвращает новый промис.

// Новый промис завершится, когда завершится весь переданный список промисов, и его результатом будет массив их результатов.

// Например, Promise.all, представленный ниже, выполнится спустя 3 секунды, его результатом будет массив [1, 2, 3]:

// Promise.all([
//   new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(console.log); // когда все промисы выполнятся, результат будет 1,2,3
// // каждый промис даёт элемент массива

// Обратите внимание, что порядок элементов массива в точности соответствует порядку исходных промисов. Даже если первый промис будет выполняться дольше всех, его результат всё равно будет первым в массиве.

// Часто применяемый трюк – пропустить массив данных через map-функцию, которая для каждого элемента создаст задачу-промис, и затем обернуть получившийся массив в Promise.all.

// Например, если у нас есть массив ссылок, то мы можем загрузить их вот так:

// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://api.github.com/users/jeresig'
// ];

// // Преобразуем каждый URL в промис, возвращённый fetch
// let requests = urls.map(url => fetch(url));

// // Promise.all будет ожидать выполнения всех промисов
// Promise.all(requests)
//   .then(responses => responses.forEach(
//     response => console.log(`${response.url}: ${response.status}`)
//   ));

//   А вот пример побольше, с получением информации о пользователях GitHub по их логинам из массива (мы могли бы получать массив товаров по их идентификаторам, логика та же):

//   let names = ['iliakan', 'remy', 'jeresig'];

// let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

// Promise.all(requests)
//   .then(responses => {
//     // все промисы успешно завершены
//     for(let response of responses) {
//       console.log(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки
//     }

//     return responses;
//   })
//   // преобразовать массив ответов response в response.json(),
//   // чтобы прочитать содержимое каждого
//   .then(responses => Promise.all(responses.map(r => r.json())))
//   // все JSON-ответы обработаны, users - массив с результатами
//   .then(users => users.forEach(user => console.log(user.name)));

//   Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, немедленно завершается с этой ошибкой.

// Например:

// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).catch(console.log); // Error: Ошибка!

// Здесь второй промис завершится с ошибкой через 2 секунды. Это приведёт к немедленной ошибке в Promise.all, так что выполнится .catch: ошибка этого промиса становится ошибкой всего Promise.all.

// - В случае ошибки, остальные результаты игнорируются
// - Promise.all(iterable) разрешает передавать не-промисы в iterable (перебираемом объекте)

// Promise.allSettled

// let promise = Promise.allSettled(iterable);

// Метод Promise.allSettled всегда ждёт завершения всех промисов. В массиве результатов будет

// {status:"fulfilled", value:результат} для успешных завершений,
// {status:"rejected", reason:ошибка} для ошибок.

// Пример:

// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://no-such-url'
// ];

// Promise.allSettled(urls.map(url => fetch(url)))
//   .then(results => { // (*)
//     results.forEach((result, num) => {
//       if (result.status == "fulfilled") {
//         console.log(`${urls[num]}: ${result.value.status}`);
//       }
//       if (result.status == "rejected") {
//         console.log(`${urls[num]}: ${result.reason}`);
//       }
//     });
//   });

// Promise.race

// Метод очень похож на Promise.all, но ждёт только первый выполненный промис, из которого берёт результат (или ошибку).

// Синтаксис:
// let promise = Promise.race(iterable);

// Например, тут результат будет 1:

// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then(console.log); // 1

// Promise.any

// Метод очень похож на Promise.race, но ждёт только первый успешно выполненный промис, из которого берёт результат.

// Если ни один из переданных промисов не завершится успешно, тогда возвращённый объект Promise будет отклонён с помощью AggregateError – специального объекта ошибок, который хранит все ошибки промисов в своём свойстве errors.

// Синтаксис:

// let promise = Promise.any(iterable);

// Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then(console.log); // 1

// Вот пример, в котором все промисы отклоняются:

// Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ещё одна ошибка!")), 2000))
// ]).catch(error => {
//   console.log(error.constructor.name); // AggregateError
//   console.log(error.errors[0]); // Error: Ошибка!
//   console.log(error.errors[1]); // Error: Ещё одна ошибка!
// });

// Promise.resolve/reject

// Методы Promise.resolve и Promise.reject редко используются в современном коде, так как синтаксис async/await (мы рассмотрим его чуть позже) делает их, в общем-то, не нужными.

// Мы рассмотрим их здесь для полноты картины, а также для тех, кто по каким-то причинам не может использовать async/await.

// Promise.resolve
// Promise.resolve(value) создаёт успешно выполненный промис с результатом value.

// let promise = new Promise(resolve => resolve(value));

// Например, функция loadCached ниже загружает URL и запоминает (кеширует) его содержимое. При будущих вызовах с тем же URL он тут же читает предыдущее содержимое из кеша, но использует Promise.resolve, чтобы сделать из него промис, для того, чтобы возвращаемое значение всегда было промисом:

// let cache = new Map();

// function loadCached(url) {
//   if (cache.has(url)) {
//     return Promise.resolve(cache.get(url)); // (*)
//   }

//   return fetch(url)
//     .then(response => response.text())
//     .then(text => {
//       cache.set(url,text);
//       return text;
//     });
// }

// Promise.reject

// Promise.reject(error) создаёт промис, завершённый с ошибкой error.

// let promise = new Promise((resolve, reject) => reject(error));

// На практике этот метод почти никогда не используется.

// Резюме:
// Мы ознакомились с шестью статическими методами класса Promise:
// Promise.all(promises) – ожидает выполнения всех промисов и возвращает массив с результатами. Если любой из указанных промисов вернёт ошибку, то результатом работы Promise.all будет эта ошибка, результаты остальных промисов будут игнорироваться.
// Promise.allSettled(promises) (добавлен недавно) – ждёт, пока все промисы завершатся и возвращает их результаты в виде массива с объектами, у каждого объекта два свойства:
// status: "fulfilled", если выполнен успешно или "rejected", если ошибка,
// value – результат, если успешно или reason – ошибка, если нет.
// Promise.race(promises) – ожидает первый выполненный промис, который становится его результатом, остальные игнорируются.
// Promise.any(promises) (добавлен недавно) – ожидает первый успешно выполненный промис, который становится его результатом, остальные игнорируются. Если все переданные промисы отклонены, AggregateError становится ошибкой Promise.any.
// Promise.resolve(value) – возвращает успешно выполнившийся промис с результатом value.
// Promise.reject(error) – возвращает промис с ошибкой error.
// Из всех перечисленных методов, самый часто используемый – это, пожалуй, Promise.all.
