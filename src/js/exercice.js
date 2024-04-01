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

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];
// log(...num);

// const array = ["a", "b"];
// const newArray = [...array];

// const obj = { one: 1, two: 2 };
// const newObj = { ...obj };
// console.log(newObj);

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function () {
//     console.log("Hello!");
//   },
// };

// const jhon = {
// 	health: 100
// }

// const jhon = Object.create(soldier);

//   //adding  properties to the already created object from parent object
// Object.setPrototypeOf(jhon, soldier);

// //to string

// console.log(typeof String(null));
// console.log(typeof String(4));

// console.log(typeof (5 + ""));

// const num = 5;
// console.log("https://instagram.com/catalog/" + num);

// const fontSize = 26 + "px";

// //To number

// console.log(typeof Number("4"));

// console.log(typeof +"5");

// console.log(typeof parseInt("15px", 10));

// let answer = +prompt("Some question", "");
// console.log(answer);

// //to boolean

// 0,'',null,undefined.NaN; - false

// let switcher = null;

// if (switcher) {
//   console.log("Working");
// }

// switcher = 1;
// console.log();
// if (switcher) {
//   console.log("Working");
// }

// console.log(typeof Boolean("4"));

// console.log(typeof !!"4");

// let someVar = 4;
// console.log(someVar); //true
// let number = 5; debugger;
// function logNumber() {
// 	let number = 4; debugger;
//   console.log(number);
// }

// number = 6;
// logNumber(); debugger;

// first stupid thing in js !!!!!!!!!!!!!!!!!!!!!!!!
// function createCounter() {
//   let counter = 0;
//   const myFunction = function () {
//     return (counter += 1);
//   };
// 	console.log(counter);
//   return myFunction;
// }

// const increment = createCounter();
// const c1 = increment(),
//   c2 = increment(),
//   c3 = increment();
// console.log(c1, c2, c3);

// increment;
// console.dir(increment);

// let x = 5;
// console.log(x++); // 5

// console.log([] + false - null + true );  // NaN

// let y = 1;
// let x = y = 2;
// console.log(x); //2

// console.log([] + 1 + 2); //"12"

// console.log("1"[0]);  //"1"

// console.log(2 && 1 && null && undefined);  //null

// console.log(null || 2 && 3 || 4);

// let a = [1, 2, 3],
// b = [1, 2, 3];
// console.log(a == b); //
// console.log(+"infinity");
// console.log("Ёжик">"яблоко");

// console.log(!!(1 && 2) === (1 && 2));
// console.log(0 || "" || 2 || undefined || true || false);

// let landmarks = [];
// landmarks.push("My house");
// landmarks.push("The bank");
// landmarks.push("The post office");
// landmarks.push("The town hall");
// landmarks.push("The park");
// landmarks.push("The library");
// landmarks.push("Friends house");

// console.log(`All the landmarks ${landmarks}`);

// for (let i = landmarks.length; i > 1; i--) {
//   landmarks.pop();
// 	console.log(landmarks);
// }
// console.log(landmarks[Math.floor(Math.random() * landmarks.length)]);

// const btn = document.getElementById("btn"),
//   overlay = document.querySelector(".overlay");
// const secondBtn = document.getElementById("secondBtn");
// const thirdBtn = document.getElementById("thirdBtn");
// btn.onclick = function () {
//   alert("Click");
// };
// const deleteElement = (e) => {
//   // e.target.remove();
//   console.log(e.target);
//   console.log(e.type);
// };

// btn.addEventListener("click", () => {
//   alert("click");
// });
// secondBtn.addEventListener("mouseenter", () => {
//   alert("hover");
// });
// secondBtn.addEventListener("mouseenter", () => {
//   secondBtn.style.backgroundColor = "red";
// });

// thirdBtn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

// const link = document.querySelector("a");

// link.addEventListener("click", (event) => {
//   event.preventDefault();
//   alert("You clicked on me!");
// });

// const btn = document.querySelectorAll('button');

// btn.forEach(btn => {
// 	btn.addEventListener("click", deleteElement, {once:true});
// })

// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
// console.log(document.querySelector('.heart').parentNode);
// console.log(document.querySelector('[data-current="5"]').nextSibling);
// console.log(document.querySelector('[data-current="5"]').previousSibling);

// for (let node  of document.body.childNodes) {
// 	if(node.nodeName == "#text"){
// 		continue;
// 	}
// 	console.log(node);
// }

// function pow(x, n) {
//   let res = 1;

//   for (let i = 0; i < n; i++) {
//     res *= x;
//   }
//   return res;
// }

// function powR(x, n) {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * powR(x, n - 1);
//   }
// }
// powR(2, 12);
// console.log(powR(2, 8));

let students = {
  js: [
    {
      name: "Jhon",
      progress: 100,
    },
    {
      name: "Iban",
      process: 60,
    },
  ],
  html: {
    basic: [
      {
        name: "Peter",
        progress: 20,
      },
      {
        name: "Ann",
        progress: 18,
      },
    ],
    pro: [
      {
        name: "Sam",
        progress: 10,
      },
    ],
  },
};

function getAverageProgress(data) {
  let total = 0;
  let students = 0;

  for (let course of Object.values(data)) {
    if (Array.isArray(course)) {
      students += course.length;

      for (let i = 0; i < course.length; i++) {
        total += course[i].progress;
      }
    } else {
      for (let subCourse of Object.values(course)) {
        students += subCourse.length;

        for (let i = 0; i < subCourse.length; i++) {
          total += subCourse[i].progress;
        }
      }
    }
  }

  return total / students;
}

console.log(getAverageProgress(students));

function getAverageProgressByRecurtion(data) {
  if (Array.isArray(data)) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }
    return [total, data.length];
  } else {
		let total = [0,0];
		for (let subData of Object.values(data)) {
			const subDataArr = getAverageProgressByRecurtion(subData);
			total[0] += subDataArr[0];
			total[1] += subDataArr[1];
		}
		return total;
  }
}

const  result = getAverageProgressByRecurtion(students);
console.log(`The average progress is ${result[0]} out of ${result[1]}`);
console.log(result);