"use strict";

let text = "Hello world!";

function someFunc(text) {
  console.log(text);
  let num = 20;
}
someFunc();

// function calc(a, b) {
//   return a + b;
// }

// console.log(calc(4, 6)); //

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
  console.log("Hello");
};

logger();

const calc = (a, b) => a + b;

const usdCurr = 38;
const eurCurr = 40;
const discount = 0.9;

function convert(amount, curr) {
  return curr * amount;
}

function promotion(result) {
  console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return;
  }
  console.log("Done");
}
test();

function doNothing() {}
console.log(doNothing() === undefined);

const str = "test";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello world!";
console.log(logg.slice(0, 5)); //
console.log(logg.slice(6, 12)); //

console.log(logg.substring(0, 5)); //

const number = 12.2;
console.log(Math.round(number));

const test1 = "12.2px";
console.log(parseInt(test1));
console.log(parseFloat(test1));

function first() {
  setTimeout(function () {
    console.log(1);
  }, 500);
}
function second() {
  console.log(2);
}
first();
second();

function learnJS(lang, callback) {
  console.log(`I am learning: ${lang}`);
  callback();
}
learnJS("JavaScript", function () {
  console.log("Done!");
});

const someObj = {
  name: "test",
  age: 35,
  isMarried: false,
  haveCars: ["bmw", "mercedes", "audi"],
  kids: {
    john: 6,
    melisa: 12,
    peter: 17,
  },
  job: "Software Engineer",
};

console.log(Object.keys(someObj));

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    background: "red",
  },
  makeTest: function () {
    console.log("Test");
  },
};

let counter = 0;
for (let key in options) {
  if (typeof options[key] === "object") {
    console.log(`${key}`);
    counter++;
    for (let i in options[key]) {
      console.log(`${i}: ${options[key][i]}`);
    }
  } else {
    console.log(`${key}: ${options[key]}`);
    counter++;
  }
}
console.log(counter);
console.log(Object.keys(options).length);

const { border, bg } = options.colors;

