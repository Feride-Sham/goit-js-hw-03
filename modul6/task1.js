// map
// Получи массив имен всех пользователей(свойство name) используя деструктурирующее присваивание
// для параметра функции({ name }) без пробелов и переносов на новую строку.
// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.
// Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.
// Деструктурирующее присваивание для параметра функции

// Write code under this line
// const users = [
//   'Moore Hensley',
//   'Sharlene Bush',
//   'Ross Vazquez',
//   'Elma Head',
//   'Carey Barr',
//   'Blackburn Dotson',
//   'Sheree Anthony',
// ];

// -----первый вариант записи

// const getUserNames = array => {
//   return array.map(user => {
//     const { name } = user;
//     return name;
//   });
// };

// -----второй вариант записи
const getUserNames = array => array.map(({ name }) => name);

console.log(getUserNames(users));
