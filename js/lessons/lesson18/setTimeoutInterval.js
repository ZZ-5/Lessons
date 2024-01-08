// Мы можем вызвать функцию не в данный момент, а позже, через заданный интервал времени. Это называется «планирование вызова».

// Для этого существуют два метода:

// setTimeout позволяет вызвать функцию один раз через определённый интервал времени.
// setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.

// function showName(name) {
//   console.log(`My name is ${name}`);
// }

// // setTimeout(() => showName("Pasha"), 5000); // вызываем переданный колбэк через 5 секунд

// // setInterval(() => showName("Pasha"), 5000);

// setTimeout(() => showName("Pasha"), 0);

// showName("Alex");

// setTimeout(() => showName("Ivannikov"), 1500);

// showName("Sigeev");

// Alex Sigeev Pasha Ivannikov
