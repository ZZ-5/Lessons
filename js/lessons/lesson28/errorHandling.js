// Обработка ошибок
// Конструкция try..catch состоит из двух основных блоков: try, и затем catch:

// try {
//   // код...
// } catch (err) {
//   // обработка ошибки
// }

// Пример:
// try {
//   console.log("Начало блока try"); // (1) <--
//   console.log("Конец блока try"); // (2) <--
// } catch (err) {
//   console.log("Catch игнорируется, так как нет ошибок"); // (3)
// }

// try..catch работает только для ошибок, возникающих во время выполнения кода

// try..catch работает синхронно

// try {
//   setTimeout(function () {
//     noSuchVariable; // скрипт упадёт тут
//   }, 1000);
// } catch (e) {
//   console.log("не сработает");
// }

// ##################################################################################################################

// Объект ошибки
// Когда возникает ошибка, JavaScript генерирует объект, содержащий её детали. Затем этот объект передаётся как аргумент в блок catch:
// try {
//   // ...

//   await getData()
// } catch (err) {
//   // <-- объект ошибки, можно использовать другое название вместо err
//   // ...
//   // renderNotification({ title: err.name, body: err.message })
// }

// name - Имя ошибки. Например, для неопределённой переменной это "ReferenceError".
// message - Текстовое сообщение о деталях ошибки. В большинстве окружений доступны и другие, нестандартные свойства. Одно из самых широко используемых и поддерживаемых – это:
// stack - Текущий стек вызова: строка, содержащая информацию о последовательности вложенных вызовов, которые привели к ошибке. Используется в целях отладки.

// try {
//   lalala; // ошибка, переменная не определена!
// } catch (err) {
//   console.log(err.name); // ReferenceError
//   console.log(err.message); // lalala is not defined
//   console.log(err.stack); // ReferenceError: lalala is not defined at (...стек вызовов)

//   // Можем также просто вывести ошибку целиком
//   // Ошибка приводится к строке вида "name: message"
//   console.log(err); // ReferenceError: lalala is not defined
// }

// Если нам не нужны детали ошибки, в catch можно её пропустить:
// try {
//   // ...
// } catch { //  <-- без (err)
//   // ...
// }

// Использование «try…catch»
// let json = '{"name":"John", "age": 30}'; // данные с сервера

// let user = JSON.parse(json); // преобразовали текстовое представление в JS-объект

// // // теперь user - объект со свойствами из строки
// console.log( user.name ); // John
// console.log( user.age );  // 30

// try…catch…finally
// Подождите, это ещё не всё.

// Конструкция try..catch может содержать ещё одну секцию: finally.

// Если секция есть, то она выполняется в любом случае:

// после try, если не было ошибок,
// после catch, если ошибки были.

// try {
//   // ... пробуем выполнить код...
//   // получить данные и показать
// } catch (e) {
//   // ... обрабатываем ошибки ...
//   // Если ошибка, то бросить ошибку в консоль
// } finally {
//   // ... выполняем всегда ...
//   // вне зависимости от успеха или ошибки закрыть модальное окно
// }

// try {
//   console.log("try");
//   if (confirm("Сгенерировать ошибку?")) BAD_CODE();
// } catch (e) {
//   console.log("catch");
// } finally {
//   console.log("finally");
// }

// Блок finally срабатывает при любом выходе из try..catch, в том числе и return.
// В примере ниже из try происходит return, но finally получает управление до того, как контроль возвращается во внешний код.

// function func() {
//   try {
//     return 1;
//   } catch (e) {
//     /* ... */
//   } finally {
//     console.log("finally");
//   }
// }

// console.log(func()); // сначала срабатывает alert из finally, а затем этот код

// Задачи:
// 1)
// Первый использует finally для выполнения кода после try..catch:

// try {
//   // начать работу
//   // работать
// } catch (e) {
//   // обработать ошибку
// } finally {
//   // очистить рабочее пространство
// }

// Второй фрагмент просто ставит очистку после try..catch:

// try {
//   // начать работу
//   // работать
// } catch (e) {
//   // обработать ошибку
// }

// function clear() {
//   console.log("clear");
// }

// function func() {
//   try {
//     // начать работу
//     // работать
//     myVar;
//   } catch (e) {
//     // обработать ошибку
//     throw new Error("new error");
//   } finally {
//     clear();
//   }
// }

// func();

// очистить рабочее пространство

// Нам определённо нужна очистка после работы, неважно возникли ошибки или нет.
// Есть ли здесь преимущество в использовании finally или оба фрагмента кода одинаковы? Если такое преимущество есть, то дайте пример, когда оно проявляется.

// function func(params) {
//     let count = 0;
//     try {
//         count++;
//     } catch {
//         console.log('Error');
//     } finally {
//       count = 0
//     }
// }

// func()

// Пример с асинхронной функцией

// const getData = async () => {}

// const showNotification = () => {
//   setIsOpen(true)
// }

// cosnt [isModalOpen, setIsModalOpen] = useState();

// async function getComics() {
//   try {
//     const res = await getData();

//     return res;
//   } catch (e) {
//     showNotification({ title: e.name, desc: e.message })
//   } finally {
//     setIsModalOpen(false);
//   }
// }
