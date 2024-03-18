"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
  if (i === 1) {
    alert("Thank you for your answers!!");
  }
}

if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}

console.log(personalMovieDB);

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

const logger = function() {
	console.log("Hello");
};

logger();


const calc = (a, b) => a + b;