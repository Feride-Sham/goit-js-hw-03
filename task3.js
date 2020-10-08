// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает
// имя самого продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненных задач содержатся как свойства объекта в формате "имя": "кол-во задач".

const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  const keys = Object.keys(employees);
  let bestEmployee = '';
  let largestNumber = 0;

  for (let key in employees) {
    if (employees[key] > largestNumber) {
      largestNumber = employees[key];
      bestEmployee = key;
    }
  }

  // for (let i = 0; i < keys.length; i += 1) {
  //   if (employees[keys[i]] > largestNumber) {
  //     largestNumber = employees[keys[i]];
  //     bestEmployee = keys[i];
  //   }

  return bestEmployee;
};
//[ann, david, helen, lorence]

console.log(findBestEmployee({}));

// Объекты и ожидаемый результат
const developers = {
  ann: 680,
  david: 300,
  helen: 520,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 1,
  mango: 128,
  ajax: 2,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
