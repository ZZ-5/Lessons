// Switch
// Конструкция switch заменяет собой сразу несколько if-else.
// Синтаксис:
// switch(x) {
//   case 'value1':  // if (x === 'value1')
//     ...
//     [break]

//   case 'value2':  // if (x === 'value2')
//     ...
//     [break]

//   default:
//     ...
//     [break]
// }

// const me = "Ivanov";

// мы можем сделать так

// if (me === "Pasha") console.log("Hello, i am Pasha");
// if (me === "Ivanov") console.log("С ним лучше не пить");
// if (me === "Sigeev") console.log("мажорный");
// if (me === "Solovev") console.log("голубая кровь");

// или так

// if (me === "Pasha") {
//   console.log("Hello, i am Pasha");
// } else if (me === "Ivanov") {
//   console.log("С ним лучше не пить");
// } else if (me === "Sigeev") {
//   console.log("мажорный");
// } else if (me === "Solovev") {
//   console.log("голубая кровь");
// }

// а лучше так:
// switch (me) {
//   case "Pasha": {
//     console.log("Pasha пришел на вечеринку");
//     break;
//   }
//   case "Ivanov": {
//     console.log("Ivanov пришел на вечеринку");
//     break;
//   }
//   case "Sigeev": {
//     console.log("Sigeev пришел на вечеринку");
//     break;
//   }
//   case "Solovev": {
//     console.log("Solovev пришел на вечеринку");
//     break;
//   }
//   default: {
//     console.log("Никто не пришел на вечеринку");
//   }
// }

// Задачи:
// 1. Перепишите следующий код на if...else:
// const browser = "Firefox";
// switch (browser) {
//   case "Edge":
//     console.log("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     console.log("Okay we support these browsers too");
//     break;

//   default:
//     console.log("We hope that this page looks ok!");
// }

// if (browser === "Edge") {
//   console.log("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   console.log("Okay we support these browsers too");
// } else {
//   console.log("We hope that this page looks ok!");
// }

// 1. Перепишите следующий код на switch:
// const number = 0;

// if (number === 0) {
//   console.log("число 0");
// }

// if (number === 1) {
//   console.log("число 1");
// }

// if (number === 2 || number === 3) {
//   console.log("число 2 или 3");
// }

// if (number === 4) {
//   console.log("число 4");
// }

// if (number === 5) {
//   console.log("число 5");
// }

// switch (number) {
//   case 0: {
//     console.log("число 0");
//     console.log("число 123");
//   }
//   case 1: {
//     console.log("число 1");
//     break;
//   }
//   case 2:
//   case 3: {
//     console.log("число 2 или 3");
//     break;
//   }
//   case 4: {
//     console.log("число 4");
//     break;
//   }
//   case 5: {
//     console.log("число 5");
//     break;
//   }
//   default:
//     break;
// }

// переписать на switch
// const browser = "Firefox";

// if (browser === "Edge") {
//   console.log("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   console.log("Okay we support these browsers too");
// } else {
//   console.log("We hope that this page looks ok!");
// }

// switch (browser) {
//   case "Edge": {
//     console.log("You've got the Edge!");
//     break;
//   }
//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera": {
//     console.log("Okay we support these browsers too");
//     break;
//   }
//   default: {
//     console.log("We hope that this page looks ok!");
//     break;
//   }
// }
