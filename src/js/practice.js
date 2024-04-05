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

  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const div = document.createElement("div"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre");

  const ul = document.querySelector(".promo__interactive-list"),
    filmName = ul.querySelectorAll(".promo__interactive-item");

  const form = document.querySelector(".add"),
    input = form.querySelector(".adding__input"),
    checkBox = form.querySelector("[type='checkbox']");

  const makeChanges = () => {
    genre.textContent = "Драма";
    poster.style.backgroundImage = `url("img/bg.jpg")`;
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  function createMovieList(films, parent) {
    parent.innerHTML = "";
		sortArr(films);

    movieDB.movies.forEach((film, i) => {
      parent.innerHTML += `
			<li class="promo__interactive-item">${i + 1} ${film}
			<div class="delete"></div>
			</li>
			`;
    });

    document.querySelectorAll(".delete").forEach((el, i) => {
      el.addEventListener("click", () => {
        el.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovieList(films, parent);
      });
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilm = input.value,
      favorite = checkBox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }
			favorite ? console.log("Adding favorite movie") : null;
      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);
      createMovieList(movieDB.movies, ul);
    } else {
      alert("Edit mobie name");
    }
    event.target.reset();
  });

  deleteAdv(document.querySelectorAll(".promo__adv img"));
  makeChanges();
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
