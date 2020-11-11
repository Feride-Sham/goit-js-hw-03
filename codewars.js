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

// function areYouPlayingBanjo(name) {
//   // Implement me
//   return name.indexOf(0) == 'R' || name.indexOf(0) == 'r'
//     ? `${name} plays banjo`
//     : `${name} does not play banjo`;
// }
// console.log(areYouPlayingBanjo('Rikke')); //, 'Rikke plays banjo'
// console.log(areYouPlayingBanjo('Martin')); //, 'Martin does not play banjo'

// const input = [
//     {
// 		shortName: "article",
// 		name: "How to put testo into duhovka",
// 		advices: [
// 			{
// 				id: 1,
// 				photo: "testo.png",
// 				text: "Take testo"
// 			},
// 			{
// 				id: 2,
// 				photo: "hand.png",
// 				text: "Open the duhovka"
// 			},
// 			{
// 				id: 3,
// 				photo: "duhovka.png",
// 				text: "Put testo into duhovka"
// 			}
// 		]
// 	},
// 	{
// 		shortName: "article",
// 		name: "How to guess why testo ain't putting into duhovka",
// 		advices: [
// 			{
// 				id: 4,
// 				photo: "visual_studio.png",
// 				text: "Open visual studio"
// 			},
// 			{
// 				id: 5,
// 				photo: "keyboard.png",
// 				text: "add debugger"
// 			},
// 			{
// 				id: 6,
// 				photo: "console.png",
// 				text: "Find out why"
// 			}
// 		]
// 	},
// 	{
// 		shortName: "article",
// 		name: "How to stream webinars",
// 		advices: [
// 			{
// 				id: 7,
// 				photo: "zoom.png",
// 				text: "Start Zoom"
// 			},
// 			{
// 				id: 8,
// 				photo: "nice_beard.png",
// 				text: "hm, davaite posmotrim, shto u vas v lekcii, pochitaite potom sami"
// 			},
// 			{
// 				id: 9,
// 				photo: "kahoot.png",
// 				text: "oi kahoot opyat' ne pravil'niu"
// 			}
// 		]
// 	}
// ]

// function getAdviceById(id) {

// }

// //console.log(getAdviceById(1));
// //{
// //		shortName: "article",
// //		name: "How to put testo into duhovka",
// //		advice: [
// //			{
// //				id: 1,
// //				photo: "testo.png",
// //				text: "Take testo"
// //			}
// //		]
// //
// //}

//******** https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript
// const flip = (d, a) => {
//   switch (d) {
//     case 'R':
//       return a.sort(compareNaturalOrder);
//     case 'L':
//       return a.sort(compareReverseOrder);
//   }
// };

// function compareNaturalOrder(a, b) {
//   return a - b;
// }

// function compareReverseOrder(a, b) {
//   return b - a;
// }

// console.log(flip('R', [13, 2, 4, 7, 93]));
// console.log(flip('L', [1, 4, 5, 3, 5]));

//******** https://www.codewars.com/kata/57a386117cb1f31890000039/train/javascript
// function parseF(s) {
//   let value = Number.parseFloat(s);
//   if (Number.isNaN(value)) {
//     return null;
//   } else {
//     return value;
//   }

// }
// console.log(parseF('s'));
// console.log(parseF('5'));
// console.log(parseF(5));
// console.log(parseF(NaN));
// console.log(parseF(null));
// console.log(parseF(undefined));

//******** https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b/train/javascript
// function sakuraFall(v) {
//   const distance = 80 * 5;
//   return v > 0 ? distance / v : 0;
// }
// console.log(sakuraFall(5));
// console.log(sakuraFall(10));
// console.log(sakuraFall(-1));

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat(1));

//********https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
// function createPhoneNumber(numbers) {
//   let phoneNumber = '(';
//   numbers.forEach((num, idx) => {
//     if (idx === 3) phoneNumber = phoneNumber.concat(`) ${num}`);
//     else if (idx === 6) phoneNumber = phoneNumber.concat(`-${num}`);
//     else phoneNumber = phoneNumber.concat(num);
//   });

//   return phoneNumber;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));

//********www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript
// function giveMeFive(obj) {
//   let arr = [];
//   for (let key in obj) {
//     if (key.length === 5) arr.push(key);
//     if (obj[key].length === 5) arr.push(obj[key]);
//   }
//   return arr;
// }
// console.log(giveMeFive({ Our: 'earth', is: 'a', beautyful: 'world' }));
// console.log(
//   giveMeFive({ Ihave: 'enough', money: 'to', buy: 'a', car: 'model' }),
// );

// ********https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript
// const removeConsecutiveDuplicates = s =>
//   s
//     .split(' ')
//     .filter((element, idx, arr) => element != arr[idx - 1])
//     .join(' ');

// console.log(
//   removeConsecutiveDuplicates(
//     'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta',
//   ),
// );

// ********https://www.codewars.com/kata/56eb0be52caf798c630013c0/train/javascript
// function unluckyDays(year) {
//   let result = 0;
//   let obj = new Date(`January 13, ${year}`);
//   for (let i = 0; i < 12; i += 1) {
//     obj.setMonth(i);
//     if (obj.getDay() === 5) result += 1;
//   }

//   return result;
// }
// console.log(unluckyDays(1586));
// console.log(unluckyDays(1001));
// console.log(unluckyDays(2819));

// ********https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript
// const repeats = arr =>
//   arr
//     .filter((num, idx, arr) => arr.indexOf(num) === arr.lastIndexOf(num))
//     .reduce((result, num) => (result += num));
// console.log(repeats([4, 5, 7, 5, 4, 8]));
// console.log(repeats([9, 10, 19, 13, 19, 13]));
// console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]));

// function saleHotdogs(n) {
//   return n < 5 ? '100' * n : n >= 5 && n < 10 ? '95' * n : '90' * n;
// }
// console.log(saleHotdogs(1));
// console.log(saleHotdogs(4));
// console.log(saleHotdogs(5));
// console.log(saleHotdogs(11));

// function pickIt(arr) {
//   var odd = [];
//   var even = [];
//   //coding here
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] % 2 === 0) even.push(arr[i]);
//     else odd.push(arr[i]);
//   }

//   return [odd, even];
// }
// console.log(pickIt([1, 2]));
// console.log(pickIt([1, 2, 3]));
// console.log(pickIt([3, 2, 1]));
// console.log(pickIt([10, 20, 30]));

//******** https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript
// function colorOf(r, g, b) {
//   let red = r.toString(16);
//   let green = g.toString(16);
//   let blue = b.toString(16);
//   if (red.length === 1) red = 0 + red;
//   if (green.length === 1) green = 0 + green;
//   if (blue.length === 1) blue = 0 + blue;
//   return '#' + red + green + blue;
//   //coding here
// }
// console.log(colorOf(255, 0, 0));
// console.log(colorOf(0, 111, 0));
// console.log(colorOf(1, 2, 3));

//******** https://www.codewars.com/kata/57256064856584bc47000611/train/javascript
// function howManySmaller(arr, n) {
//   return arr.map(num => num.toFixed(2)).filter(num => num < n).length;

//   //coding here..
// }
// console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));
// console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19));
// console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212));

//******** https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript
// function cutIt(arr) {
//   //coding here...
//   let min = arr[0].length;
//   arr.forEach(element => {
//     if (element.length < min) min = element.length;
//   });
//   return arr.map(element => element.substr(0, min));
//  }
// console.log(cutIt(['ab', 'cde', 'fgh']));
// console.log(cutIt(['abc', 'defgh', 'ijklmn']));
// console.log(cutIt(['codewars', 'javascript', 'java']));

//********https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript
// function firstToLast(str, c) {
//   //coding here..
//   let length = str.lastIndexOf(c) - str.indexOf(c);
//   if (length != 0) {
//     return length;
//   } else if (str.indexOf(c) > 0) {
//     return length;
//   } else {
//     return -1;
//   }
// }
// console.log(firstToLast('ababc', 'a'));
// console.log(firstToLast('ababc', 'c'));
// console.log(firstToLast('ababc', 'd'));

//********https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript
// function splitAndMerge(string, separator) {
//   return string
//     .split(' ')
//     .map(element => element.split('').join(separator))
//     .join(' ');
// }
// console.log(splitAndMerge('My name is John', ' '));
// console.log(splitAndMerge('My name is John', '-'));
// console.log(splitAndMerge('Hello World!', '.'));

// ********https://www.codewars.com/kata/5728203b7fc662a4c4000ef3
// function alienLanguage(str) {
//   return str
//     .toUpperCase()
//     .split(' ')
//     .map(
//       word =>
//         word.substr(0, word.length - 1) + word[word.length - 1].toLowerCase(),
//     )
//     .join(' ');
//   //coding here...
// }
// console.log(alienLanguage('My name is John'));
// console.log(alienLanguage('this is an example'));
// console.log(alienLanguage('Hello World'));
// console.log(alienLanguage('HELLO WORLD'));

// ********www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript

// function fiveLine(s) {
//   let str = s.trim();
//   return `${str}\n${str}${str}\n${str}${str}${str}\n${str}${str}${str}${str}\n${str}${str}${str}${str}${str}`;
//   //coding here...
// }
// console.log(fiveLine('  a'));
// console.log(fiveLine('\txy \n'));
// console.log(fiveLine('           Ok               '));

// ********https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/train/javascript
// const shuffleIt = (arr, ...ind) => {
//   //coding here...
//   arr.forEach(element => {
//     if (element.indexOf() === ind[i])
//   });
// }
// console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2]));
// console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4]));
// console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3]));

// ********https://www.codewars.com/kata/572cb264362806af46000793/train/javascript
// function threeInOne(arr) {
//   let array = [];
//   for (let i = 0; i <= arr.length; i += 3) {
//     array.push(arr.slice(i, i + 3));
//   }
//   return array.map(el => el.reduce((acc, el) => acc + el, 0)).slice(0, -1);
// }
// console.log(threeInOne([1, 2, 3]));
// console.log(threeInOne([1, 2, 3, 4, 5, 6]));
// console.log(threeInOne([1, 3, 5, 2, 4, 6, 7, 7, 7]));

// function monkeyCount(n) {
//   return Array.from({ length: n }, (v, k) => k + 1);
//   // your code here
// }
// console.log(monkeyCount(5));

// var summation = function (num) {
//   return Array.from({ length: num }, (v, k) => k + 1).reduce(
//     (acc, el) => (acc += el),
//   );
//   // your code here
// };
// console.log(summation(1));
// console.log(summation(8));

// ********https://www.codewars.com/kata/572df796914b5ba27c000c90/train/javascript

// function sortIt(arr) {
//   let tempArray = arr.slice();
//   tempArray.sort((a, b) => b - a);
//   let tempArray2 = [];
//   let result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     let startIndex = tempArray.indexOf(tempArray[i]);
//     let endIndex = tempArray.lastIndexOf(tempArray[i]);
//     if (startIndex === endIndex) {
//       result.push(tempArray[i]);
//     } else {
//       tempArray2.push(tempArray[i]);
//     }
//   }
//   let objectsArray = [];
//   let currentVal;
//   let entries = 0;
//   for (let i = 0; i < tempArray2.length; i++) {
//     if (currentVal != tempArray2[i]) {
//       currentVal = tempArray2[i];
//       entries = 1;
//     } else {
//       entries++;
//     }
//     if (i === tempArray2.length - 1 || tempArray2[i] != tempArray2[i + 1]) {
//       objectsArray.push({
//         value: currentVal,
//         quantity: entries,
//       });
//     }
//   }
//   objectsArray.sort((a, b) => a.quantity - b.quantity);
//   for (let i = 0; i < objectsArray.length; i++) {
//     for (let j = 0; j < objectsArray[i].quantity; j++) {
//       result.push(objectsArray[i].value);
//     }
//   }
//   return result;
//   //coding here...
// }

// //7,7,7,6,6,5,5,4,4
// console.log(sortIt([1, 1, 1, 2, 2, 3]));
// console.log(sortIt([1, 1, 1, 2, 2, 2, 3, 3, 3]));
// console.log(sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7, 7]));

// ********https://www.codewars.com/kata/55d277882e139d0b6000005d/train/javascript
// const findAverage = nums => {
//   let total = 0;
//   for (let num of nums) {
//     total += num / nums.length;
//   }
//   return total;
// };
// };
//   nums.reduce((total, el) => {
//     total = total + el;
//     return total / nums.length;
//   }, 0);

// console.log(findAverage([1]));
// console.log(findAverage([1, 3, 5, 7]));

// // ********https://www.codewars.com/kata/5702f077e55d30a7af000115/train/javascript
// function countName(anArr, name) {
//   let result = [];
//   for (let i = 0; i < anArr.length; i += 1) {
//     if ()
//   }

//anArr is an array of strings. name is a single string
//This function should return the total number of times the name string is found in anArr.
//Your code here
// }
// const MAINLIST = [
//   'Bob',
//   'Ted',
//   'Amy',
//   'Alice',
//   'Bob',
//   'Ted',
//   'Amy',
//   'Ted',
//   'Amy',
//   'Fred',
// ];
// console.log(countName(MAINLIST, 'Ted'));
// console.log(countName(MAINLIST, 'Amy'));

// ********https://www.codewars.com/kata/572fdeb4380bb703fc00002c/train/javascript
// const isolateIt = arr => {
//   return arr.map(elem => {
//     let partSting = elem.length;
//     if (partSting % 2 != 0) {
//       return (
//         elem.slice(0, (partSting - 1) / 2) +
//         '|' +
//         elem.slice((partSting - 1) / 2 + 1)
//       );
//     } else {
//       return elem.slice(0, partSting / 2) + '|' + elem.slice(partSting / 2);
//     }
//   });
// };
//  ------второй вариант решения этой задачи
// const isolateIt = arr =>
//   arr.map(elem =>
//     elem.length % 2 != 0
//       ? elem.slice(0, (elem.length - 1) / 2) +
//         '|' +
//         elem.slice((elem.length - 1) / 2 + 1)
//       : elem.slice(0, elem.length / 2) + '|' + elem.slice(elem.length / 2),
//   );

// console.log(isolateIt(['abcd', 'efgh']));
// console.log(isolateIt(['abcde', 'fghij']));
// console.log(isolateIt(['1234', '56789']));

//******** https://www.codewars.com/kata/573023c81add650b84000429/train/javascript
// const countGrade = scores => {
//   let grade = {};
//   grade['A'] = scores.filter(el => el < 100 && el >= 90).length;
//   grade['B'] = scores.filter(el => el < 90 && el >= 80).length;
//   grade['C'] = scores.filter(el => el < 80 && el >= 60).length;
//   grade['D'] = scores.filter(el => el < 60 && el >= 0).length;
//   grade['S'] = scores.filter(el => el === 100).length;
//   grade['X'] = scores.filter(el => el === -1).length;

//   return grade;
// };
// console.log(countGrade([50, 60, 70, 80, 90, 100]));
// console.log(countGrade([65, 75, , 85, 85, 95, 100, 100]));
// console.log(countGrade([65, 75, , 85, 85, 95, 100, 100]));
// console.log(countGrade([-1, -1, -1, -1, -1, -1]));

// const solution = (a, b) => (a.length > b.length ? b + a + b : a + b + a);
// console.log(solution('45', '1'));
// console.log(solution('13', '200'));

// const generateRange = (min, max, step) => {
//   let result = [];
//   let i = 0;
//   do {
//     i += step;
//     result.push(i);
//   } while (i != max);
//   return result;
// };

// const generateRange = (min, max, step) => {
//   let result = [];
//   let i = min;
//   result.push(i);
//   while (i + step <= max) {
//     i += step;
//     result.push(i);
//   }
//   return result;
// };

// console.log(generateRange(2, 10, 2));
// console.log(generateRange(1, 10, 3));

//********https://www.codewars.com/kata/57a5015d72292ddeb8000b31/train/javascript
const isPalindrome = line =>
  `${line}`.split('').reverse().join('') === `${line}` ? true : false;
console.log(isPalindrome('anna'));
console.log(isPalindrome('walter'));
console.log(isPalindrome(12321));
