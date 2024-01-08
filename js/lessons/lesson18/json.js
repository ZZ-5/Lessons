// JSON - javascript object notation

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
  alex: undefined,
  pasha: {
    lastname: "Ivannikov",
  },
};

let json = JSON.stringify(student); // преобразование js обьекта к строке

console.log(typeof json);

console.log(json);

let parsedJSON = JSON.parse(json); // преобразование строки в формате json к обьекту

console.log(typeof parsedJSON);
console.log(parsedJSON);
