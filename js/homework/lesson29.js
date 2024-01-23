// 12) Написать функцию greatestSalary, которая принимает обьект и выводит сотрудника, у которого самая большая зп в формате:
// "Alex is a senior developer and his salary is 9999999". Если у сотрудника в качестве зарплаты массив ежемесячных зарплат, то нужно считать среднюю и сравнивать её.
let obj = {
  Alex: {
    grade: "senior",
    salary: [350000, 500000, 450000, 700000],
  },
  Serg: {
    grade: "middle",
    salary: 300000,
  },
  Paul: {
    grade: "junior",
    salary: [0, 120000, 150000, 999999],
  }
};


let greatestSalary = (obj) => {

  let entries = Object.entries(obj)

  let values = Object.values(obj)

  values.forEach((el) => {

    for (let key in el) {

      if (Array.isArray(el[key])) {

        let length = el[key].length;

        el[key] = el[key].reduce((res, item) => {
          res = res + item
          return res
        }, 0)

        el[key] = el[key] / length
        Math.round(el[key])

        return el[key] // Math.round почему-то сбрасывается
      }
    }
  })

  entries.sort((a, b) => b[1].salary - a[1].salary)

  return `${entries[0][0]} is a senior developer and his salary is ${entries[0][1].salary}`;
}

console.log(greatestSalary(obj));
