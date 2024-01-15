"user strict";
// Преобразования типов

// const a = "Pasha";
// const b = 123;
// const c = "123";

// console.log(a + b); // "Pasha123"
// console.log(c); // "123"
// console.log(b + c); // 123123
// console.log(c + b); // 123123
// console.log(+c); // 123
// console.log(+a); // "Pasha"

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// let a = 123;
// console.log("a0 is ", Boolean(a)); // True

// a = -123;
// console.log("a1 is ", Boolean(a)); // True

// a = 123.123;
// console.log("a2 is ", Boolean(a)); // True

// a = 0;
// console.log("a2 is ", Boolean(a)); // False

// boolean
// let a = true;
// let b = false;
// let c = Boolean(0);

// console.log("c0 is ", c); // False

// c = Boolean(-1);
// console.log("c1 is ", c); // True

// c = Boolean("");
// console.log("c2 is ", c); // False

// c = Boolean("Pasha");
// console.log("c3 is ", c); // True

// c = Boolean(123);
// console.log("c4 is ", c); // True

// c = Boolean({});
// console.log("c5 is ", c); // True

// c = Boolean(undefined);
// console.log("c6 is ", c); // False

// c = Boolean(null);
// console.log("c7 is ", c); // False

// c = Boolean([]);
// console.log("c8 is ", c); // True

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// let a;

// console.log(a); // undefined
// console.log(typeof a); // undefined

// a = "Me";

// console.log(a); // "Me"
// console.log(typeof a); // string

// Оператор typeof
// let c = {};
// console.log(typeof c); // object

// c = undefined;
// console.log(typeof c); // undefined

// c = null;
// console.log(typeof c); // object

// c = [];
// console.log(typeof c); // object

// c = 123;
// console.log(typeof c); // number

// c = "qweqew";
// console.log(typeof c); // string

// c = "123123";
// console.log(typeof c); // string

// c = () => new Promise();
// console.log(typeof c); // object

// c = () => new Promise();
// console.log(c); //  object
