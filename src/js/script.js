"use strict";
/*
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (this.count == "" || this.count == null || isNaN(this.count)) {
      this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
        b = prompt("На сколько оцените его?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        alert("error");
        i--;
      }
      if (i === 1) {
        alert("Thank you for your answers!!");
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 4; i++) {
      const genre = prompt(`You favorite genre ${i}?`, "");
      if (genre != null && genre != "") {
        personalMovieDB.genres.push(genre);
      } else {
        i--;
        alert("Error");
      }
    }
    this.genres.forEach(function (genre, i) {
      console.log(`Favorite genre #${i + 1} - ${genre}`);
    });
  },
  toggleVisibleNyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  showMyDB: function () {
    if (!personalMovieDB.privat) {
      console.log(personalMovieDB);
    }
  },
};

personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleNyDB(personalMovieDB.privat);
console.log(personalMovieDB.privat);
personalMovieDB.showMyDB();

const box = document.getElementById("box"),
  buttons = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  hearts = document.querySelectorAll(".heart"),
  oneHeart = document.querySelector(".heart"),
  wrapper = document.querySelector(".wrapper");

box.style.backgroundColor = "blue";
box.style.width = "500px";
box.style.height = "375px";

buttons[0].style.borderRadius = "25px";
circles[0].style.backgroundColor = "black";

box.style.cssText = "background-color: teal; width: 500px; height: 375px;";

for (let i = 0; i < hearts.length; i++) {
	hearts[i].style.cssText = "background-color: red; height: 20px; width: 20px;"
}

hearts.forEach((item) => {
  item.style.cssText = "background-color: red; height: 20px; width: 20px;";
});

const div = document.createElement("div"),
  text = document.createTextNode("I am a new DIV");

div.classList.add("newDiv");

document.body.append(div);
document.body.appendChild(div);
document.querySelector('.wrapper').append(div);
wrapper.prepend(div);
hearts[0].before(div);

circles[0].remove();

hearts[0].replaceWith(circles[0]);

console.log(1 << 3);
const arr = [1, 14 , "string", {name: 'Bill'}];
console.log(arr.length);

*/