// https://learn.javascript.ru/call-apply-decorators#primenenie-func-call-dlya-peredachi-konteksta
// Задачи:
// 1) Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.

// Например:
function work(a, b) {
    console.log(a + b); // произвольная функция или метод
}

function mul(x, y, z) {
    console.log(x * y * z);
}

function spy(funk) {
    return function wrap(...args) {
        wrap.calls = []
        wrap.calls.push(args)
        return funk.apply(this, args);
    }
}

let decorMul = spy(mul)

decorMul(1, 2, 4)
decorMul(4, 5, 6)

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

for (let args of decorMul.calls) {
    console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}

// ваш код:

// Пример того как вернуть функцию и вызвать в качестве переменной
// function sum(a, b) {
//   console.log(a, b);

//   return function () {
//     console.log(a, b);
//     console.log("I am Pasha");
//   };
// }

// let variable1 = sum(4, 5); //  console.log(4, 5) + в переменную variable положим функцию
// variable1();
