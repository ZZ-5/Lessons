// function name0(a, b) {
//     let name1 = () => {
//         console.log(arguments);
//     }
//     name1();
// }

// name0(2, 5);
let obj = { name: "Pasha" }

let arr = [0, 0, "a", "a", true, true, null, null, undefined, undefined, obj, obj];

let set = new Set(arr)

console.log(set);