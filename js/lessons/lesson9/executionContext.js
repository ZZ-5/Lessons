// 1)Global Execution context
// (1.1) this = global Object
// (1.2) Lexical Environment = {
//   EnvironmentRecord: {
//     walk: function,
//     step: uninitialized,
//   },
//   outer: null
// }
// (1.3) VariableEnvironment: {
//   EnvironmentRecord: {
//     a: undefined
//   },
//   outer: null
// }

function walk() {
  console.log("i can walk"); // // 3) Fuction Execution Context = {
  // (3.1) this = console object
  // (3.2) Lexical Environment = {
  //   EnvironmentRecord: {},
  //   outer: walk
  // }
  // (3.3) VariableEnvironment: {
  //   EnvironmentRecord: {},
  //   outer: walk
  // }
  // }
}

var a = "Pasha";

console.log(step);

let step = function () {
  // let - uninitialized
  console.log("i can step");
};

walk(); // 2) Fuction Execution Context = {
// (2.1) this = global object
// (2.2) Lexical Environment = {
//   EnvironmentRecord: {},
//   outer: global object
// }
// (2.3) VariableEnvironment: {
//   EnvironmentRecord: {},
//   outer: global object
// }
// }
