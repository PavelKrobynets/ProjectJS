"use strict";

document.addEventListener("DOMContentLoaded", () => {
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
    genre = poster.querySelector(".promo__genre");

  const ul = document.querySelector(".promo__interactive-list"),
    filmName = ul.querySelectorAll(".promo__interactive-item");

  const form = document.querySelector(".add"),
    input = form.querySelector(".adding__input"),
    checkBox = form.querySelector("[type='checkbox']");

  genre.textContent = "Драма";
  poster.style.backgroundImage = `url("img/bg.jpg")`;

  function createMovieList(films, parent) {
    parent.innerHTML = "";

    movieDB.movies.forEach((film, i) => {
      parent.innerHTML += `
			<li class="promo__interactive-item">${i + 1} ${film}
			</li>
			`;
    });
  }

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		
		const newFilm = input.ariaValueMax,
		favorite = checkBox.checked;
		movieDB.movies.push(newFilm);
		movieDB.movies.sort();
	})

  createMovieList(movieDB.movies, ul);

});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!! wrong way
// function movieList() {
// 	movieDB.movies.sort();
// 	movieDB.movies.forEach((film, i) => {
// 		filmName[i].textContent = `${i + 1} ${movieDB.movies[i]}\n`;
// 	});
// }

// form.addEventListener("submit", (event) => {
// 	const li = document.createElement("li"),
// 		newMovie = input.value;
// 	event.preventDefault();
// 	if (newMovie === "") {
// 		alert("Введите название фильма!");
// 		return false;
// 	}

// 	movieDB.movies.push(newMovie);
// 	movieDB.movies.sort();
// 	li.appendChild(document.createTextNode(newMovie));
// 	li.classList.add("promo__interactive-item");
// 	ul.appendChild(li);
// 	input.value = "";
// 	console.log(filmName);
// });
