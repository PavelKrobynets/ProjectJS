"use strict";

// let text = "Hello world!";

// function someFunc(text) {
//   console.log(text);
//   let num = 20;
// }
// someFunc();

// // function calc(a, b) {
// //   return a + b;
// // }

// // console.log(calc(4, 6)); //

// function ret() {
//   let num = 50;
//   return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//   console.log("Hello");
// };

// logger();

// const calc = (a, b) => a + b;

// const usdCurr = 38;
// const eurCurr = 40;
// const discount = 0.9;

// function convert(amount, curr) {
//   return curr * amount;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 3) return;
//   }
//   console.log("Done");
// }
// test();

// function doNothing() {}
// console.log(doNothing() === undefined);

// const str = "test";

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const fruit = "Some fruit";
// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world!";
// console.log(logg.slice(0, 5)); //
// console.log(logg.slice(6, 12)); //

// console.log(logg.substring(0, 5)); //

// const number = 12.2;
// console.log(Math.round(number));

// const test1 = "12.2px";
// console.log(parseInt(test1));
// console.log(parseFloat(test1));

// function first() {
//   setTimeout(function () {
//     console.log(1);
//   }, 500);
// }
// function second() {
//   console.log(2);
// }
// first();
// second();

// function learnJS(lang, callback) {
//   console.log(`I am learning: ${lang}`);
//   callback();
// }
// learnJS("JavaScript", function () {
//   console.log("Done!");
// });

// const someObj = {
//   name: "test",
//   age: 35,
//   isMarried: false,
//   haveCars: ["bmw", "mercedes", "audi"],
//   kids: {
//     john: 6,
//     melisa: 12,
//     peter: 17,
//   },
//   job: "Software Engineer",
// };

// console.log(Object.keys(someObj));

// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     background: "red",
//   },
//   makeTest: function () {
//     console.log("Test");
//   },
// };

// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     console.log(`${key}`);
//     counter++;
//     for (let i in options[key]) {
//       console.log(`${i}: ${options[key][i]}`);
//     }
//   } else {
//     console.log(`${key}: ${options[key]}`);
//     counter++;
//   }
// }
// console.log(counter);
// console.log(Object.keys(options).length);

// const { border, bg } = options.colors;

// const arr = [11, 2, 44, 16, 38, 94];
// // arr.pop();
// // console.log(arr);
// // arr.push(5);
// // console.log(arr);
// console.log(arr.sort(compareNum)); //!!!!!!!!!!!!!!!

// function compareNum(a, b) {   // !!!!!!!!!!!!!
//   return a - b;
// }

// for (let value of arr) {
//   console.log(value);
// }

// arr.forEach(function (item, i, arr) {
//   console.log(`Item #${i + 1}: ${item}`);
// });

// const	str = prompt("products", "");
// const products = str.split(", ");
// console.log(products);

// let a = 5,
//   b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
// 	a: 5,
// 	b: 1
// }

// const copy = obj;  // link
// copy.a = 10;
// console.log(copy);
// console.log(obj);
//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function copy(mainObj) {
//   let objCopy = {};
//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }
// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// };

// const add = {
//   d: 17,
//   e: 20,
// };

// const x = Object.assign({}, add);

// const oldArray = ["a", "b", "c"];
// const newArr = oldArray.slice();
// newArr[1] = "bbbb";
// console.log(newArr);

// const video = ["youtube", "vimeo", "tiktok"],
//   blogs = ["wordpress", "livejournal", "blogger"],
//   internet = [...video, ...blogs, "facebook"];
// console.log(internet);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];
log(...num);
