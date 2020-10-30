// ilter, map
// Получи массив имен пользователей(значение свойства name) по полу(значение свойства gender).

// Используй деструктурирующее присваивание для параметра функции({ name }) без пробелов и переносов на новую строку.

// Write code under this line
// -----первый вариант записи
const getUsersWithGender = (array, gender) => {
  return array
    .filter(user => {
      const { gender: userGender } = user;
      return userGender === gender;
    })
    .map(user => {
      const { name } = user;
      return name;
    });
};

// -----второй вариант записи
const getUsersWithGender = (array, gender) =>
  array
    .filter(({ gender: userGender }) => userGender === gender)
    .map(({ name }) => name);

// console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",
  "Carey Barr",
  "Blackburn Dotson"
] */
