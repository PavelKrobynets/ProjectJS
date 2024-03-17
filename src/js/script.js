"use strict";

for (let i = 0; i < 3; i++) {
  console.log(i);
  for (let j = 0; j < 3; j++) {
    console.log(`j = ${j}`);
  }
}

let res = "";
const length = 7;

for (let i = 1; i < length; i++) {
  for (let k = 0; k < i; k++) {
    res += "*";
		console.log(k);
  }
  res += "\n";
}

console.log(res);

first: for (let i = 0; i < 3; i++) {
  console.log(`First level ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`second level = ${j}`);
    for (let k = 0; k < 3; k++) {
			if (k === 2) continue first; // skip the rest of this loop and go to  next iteration of outer loop
      console.log(`third level = ${k}`);
    }
  }
}
