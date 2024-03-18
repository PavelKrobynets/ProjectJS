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
