// Преобразования типов

// const a = "Pasha";
// const b = 123;
// const c = "123";

// console.log("a + b = ", a + b); // Pasha123
// console.log("с = ", c); // "123"
// console.log("с = ", b + c); // "123123"
// console.log("с = ", c + b); // "123123"
// console.log("с = ", +c); // 123
// console.log("a = ", +a); // NaN (not a number)

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// let a = 123;
// console.log("a0 is ", Boolean(a)); // true

// a = -123;
// console.log("a1 is ", Boolean(a)); // true

// a = 123.123;
// console.log("a2 is ", Boolean(a)); // true

// a = 0;
// console.log("a2 is ", Boolean(a)); // false

// boolean
// let a = true;
// let b = false;
// let c = Boolean(0);

// console.log("c0 is ", c); // false

// c = Boolean(-1);
// console.log("c1 is ", c); // true

// c = Boolean("");
// console.log("c2 is ", c); // false

// c = Boolean("Pasha");
// console.log("c3 is ", c); // true

// c = Boolean(123);
// console.log("c4 is ", c); // true

// c = Boolean({});
// console.log("c5 is ", c); // true

// c = Boolean(undefined);
// console.log("c6 is ", c); // false

// c = Boolean(null);
// console.log("c7 is ", c); // false

// c = Boolean([]);
// console.log("c8 is ", c); // true

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// let a;

// console.log("a1 is ", a); // undefined
// console.log("a1 is ", typeof a); // undefined

// a = "Me";

// console.log("a2 is ", a); // Me
// console.log("a2 is ", typeof a); // string

// Оператор typeof
// let c = {};
// console.log("c1 is ", typeof c); // object

// c = undefined;
// console.log("c2 is ", typeof c); // undefined

// c = null;
// console.log("c3 is ", typeof c); // object

// c = [];
// console.log("c4 is ", typeof c); // object

// c = 123;
// console.log("c5 is ", typeof c); // number

// c = "qweqew";
// console.log("c6 is ", typeof c); // string

// c = "123123";
// console.log("c7 is ", typeof c); // string

// c = () => new Promise();
// console.log("c8 is ", typeof c); // function

// c = () => new Promise();
// console.log("c9 is ", c); // function
