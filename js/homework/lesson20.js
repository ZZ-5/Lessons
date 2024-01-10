// https://learn.javascript.ru/call-apply-decorators#primenenie-func-call-dlya-peredachi-konteksta
// Задачи:
// 1) Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.

// Например:
// function work(a, b) {
//   console.log(a + b); // произвольная функция или метод
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   console.log("call:" + args.join()); // "call:1,2", "call:4,5"
// }

// ваш код:
