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

// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript
const flip = (d, a) => {
  switch (d) {
    case 'R':
      return a.sort(compareNaturalOrder);
    case 'L':
      return a.sort(compareReverseOrder);
  }
};

function compareNaturalOrder(a, b) {
  return a - b;
}

function compareReverseOrder(a, b) {
  return b - a;
}

console.log(flip('R', [13, 2, 4, 7, 93]));
console.log(flip('L', [1, 4, 5, 3, 5]));
