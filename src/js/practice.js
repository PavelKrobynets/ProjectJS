"use strict";



const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

document.querySelectorAll(".promo__adv img").forEach((item) => {
  item.remove();
});
const div = document.createElement("div"),
  poster = document.querySelector(".promo__bg"),
  genre = poster.querySelector(".promo__genre"),
  sortedMovies = movieDB.movies.sort(),
  ul = document.querySelector(".promo__interactive-list"),
  filmName = ul.querySelectorAll(".promo__interactive-item");

genre.textContent = "Драма";
poster.style.backgroundImage = `url("img/bg.jpg")`;

let li = document.createElement("li");
li.classList.add("promo__interactive-item");
for (let i = 0; i < sortedMovies.length; i++) {
  li = `${i + 1} ${sortedMovies[i]}\n`;
  filmName[i].textContent = li;
}

// movieDB.movies.forEach((film, i) => {
//   ul.innerHTML = +`
// 	<li class="promo__interactive-item">${i + 1} ${movieDB.movies[i]}
// 	<div class="delete"></div>
// 	</li>
// 	`;
// });
