"use strict";

let numberOfFilms = +prompt("How  many films you watched ?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Last movie you saw?", ""),
	b = prompt("Rate movie from 1 to 10", ""),
	c = prompt("Last movie you saw?", ""),
	d = prompt("Rate movie from 1 to 10", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);