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
  },
};

greatestSalary(obj);
