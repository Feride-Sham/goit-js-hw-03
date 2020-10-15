// function likes(names) {
//   let message = '';
//   if (names.length < 1) {
//     message = 'no one likes this';
//   } else if (names.length === 1) {
//     message = `${names[0]} likes this`;
//   } else if (names.length === 2) {
//     message = `${names[0]} and ${names[1]} like this`;
//   } else if (names.length === 3) {
//     message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else if (names.length >= 4) {
//     message = `${names[0]}, ${names[1]} and ${
//       names.length - 2
//     } others like this`;
//   }
//   return message;
// }
// console.log(likes(['Peter'])); // 'Peter likes this')
// console.log(likes([])); //, 'no one likes this'
// console.log(likes(['Jacob', 'Alex'])); //, 'Jacob and Alex like this'
// console.log(likes(['Max', 'John', 'Mark'])); //, 'Max, John and Mark like this'
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); //'Alex, Jacob and 2 others like this',

function areYouPlayingBanjo(name) {
  // Implement me
  return name.indexOf(0) == 'R' || name.indexOf(0) == 'r'
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}
console.log(areYouPlayingBanjo('Rikke')); //, 'Rikke plays banjo'
console.log(areYouPlayingBanjo('Martin')); //, 'Martin does not play banjo'
