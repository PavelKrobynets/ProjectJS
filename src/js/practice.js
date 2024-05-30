"use strict";

document.addEventListener("DOMContentLoaded", () => {
  /*
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

!!!!!!!!!!!!!!!!!!!!!!!!!!!!! wrong way
function movieList() {
	movieDB.movies.sort();
	movieDB.movies.forEach((film, i) => {
		filmName[i].textContent = `${i + 1} ${movieDB.movies[i]}\n`;
	});
}

form.addEventListener("submit", (event) => {
	const li = document.createElement("li"),
		newMovie = input.value;
	event.preventDefault();
	if (newMovie === "") {
		alert("Введите название фильма!");
		return false;
	}

	movieDB.movies.push(newMovie);
	movieDB.movies.sort();
	li.appendChild(document.createTextNode(newMovie));
	li.classList.add("promo__interactive-item");
	ul.appendChild(li);
	input.value = "";
	console.log(filmName);
});

let user = { name: "Jhon" },
  map = new WeakMap();
map.set(user, "data");

user = null;
console.log(map.has());

let cache = new WeakMap();

function cacheUser(user) {
  if (!cache.has(user)) cache.set(user, Date.now());
  return cache.get(user);
}

let lena = { name: "Elena" },
  alex = { name: "Alex" };

cacheUser(lena);
cacheUser(alex);

lena = null;
console.log(cache.has(lena));
console.log(cache.has(alex));

let messages = [
  { text: "Hello", from: "Jhon" },
  { text: "World", from: "Helen" },
  { text: "!!", from: "Amanda" },
  { text: "...", from: "Michel" },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

const now1 = new Date(2020, 5, 1, 20);
console.log(now1);

const now2 = new Date(0);
console.log(now2);

const now = new Date();
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getDay());

console.log(now.getTime());
console.log(now.getTimezoneOffset());

now.setHours(18);
console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++){
	let some = i ** 3;
}

let end = new Date();

alert(`${end - start} miliseconds`);
console.log(end);

const num = new Number(3);
console.log(num);

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}
class User {
	constructor(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
  }
  hello() {
    console.log(`Hello ${this.name}`);
  }
	exit(){
		console.log(`User ${this.name} left`);
	}
}

User.prototype.exit = function (name) {
  console.log(`User ${this.name} left`);
};

const ivan = new User("Ivan", 28);
const alex = new User("Alex", 20);

console.log(ivan);
console.log(alex);
ivan.hello();

function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }
  console.log(sum());
}
showThis(5, 2);

const obj = {
	a: 20,
	b: 15,
	sum: function(){
		console.log(this);
	}
};
obj.sum();

class User {
	constructor(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
  }
  hello() {
    console.log(`Hello ${this.name}`);
  }
	exit(){
		console.log(`User ${this.name} left`);
	}

class User1 {
  name = String;
  id = Number;
  human = Boolean;
}

let igor = new User1();
igor.name = "Igor";
igor.id = 47;
igor.human = true;

console.log(igor);

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
	this.hello = function(){
		console.log(`Hello i'm ${this.name}`);
	}
}

let ivan = new User("Ivan", 23);

function sayName(){
	console.log(this);
	console.log(this.name);
}

const user = {
	name: 'John'
}

sayName.call(user);
sayName.apply(user);

const btn = document.querySelector(".btn1");

btn.addEventListener("click", function () {
  console.log(this);
});

const obj = {
	num: 5,
	sayNumber: function(){
		const say = () => {
			console.log(this);
		}
		say();
	}
}

obj.sayNumber();

const double = (a) => a * 2 ;


class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calcArea() {
    return this.width * this.height;
  }
}

class ColoredRectangleWithText extends Rectangle {
	constructor(height, width, text, bgColor){
		super(height, width);
		this.text = text;
		this.bgColor = bgColor;
	}
	showMyProps(){
		console.log(`Text ${this.text}, color ${this.bgColor}`);
	}
}

const rect = new ColoredRectangleWithText(10, 10, "learning about classes", "red")
rect.showMyProps();
console.log(rect.calcArea());
const square = new Rectangle(15, 15);
const long = new Rectangle(20, 100);
console.log(square.calcArea());
console.log(long.calcArea());


var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomString = "";
randomString = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomString);
while (randomString.length < 7) {
  randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(randomString);

var input = "javascript is awesome";
var output = "";

for (let letter = 0; letter != input.length; letter++) {
  switch (input[letter]) {
    case "a":
      output += "4";
      continue;
    case "i":
      output += "1";
      continue;
    case "e":
      output += "3";
      continue;
    case "o":
      output += "0";
      continue;
    default:
      output += input[letter];
      continue;
  }
}
console.log(output);


const log = function (a, b, ...rest) {
  console.log(a, b, rest);
};

log("basic", "rest", "operator", "usage");

function calcOrDouble(number, basis = 2) {
  console.log(number * basis);
}

calcOrDouble(3, 5);


const person = {
  name: "John Doe",
  tel: "+74444444444",
  parents: {
    father: "Jonh Smith",
    mother: "Mary Johnson",
  },
};
const clone = JSON.parse(JSON.stringify(person));
console.log(clone);


const firstInput = document.querySelector(".firstInput"),
  secondInput = document.querySelector(".secondInput");

firstInput.addEventListener("input", () => {
  const request = new XMLHttpRequest();
  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  // request.addEventListener("readystatechange", () => {
  //   if (request.readyState === 4 && request.status === 200) {
  //     console.log(request.response);
  //     const data = JSON.parse(request.response);
  //     secondInput.value = (+firstInput.value / data.current.usd).toFixed(2);
  //   } else {
  // 		secondInput.value = `${request.statusText }`
  // 	}
  // });
  request.addEventListener("load", () => {
    if (request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      secondInput.value = (+firstInput.value / data.current.usd).toFixed(2);
    } else {
      secondInput.value = `${request.statusText}`;
    }
  });

  console.log("some code");

  const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Loading");

      const product = {
        name: "Product",
        price: 200,
      };

      resolve(product);
    }, 2000);
  });
  req.then((product) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        product.status = "ordered";
        resolve(product);
				reject();
      }, 2000);
    }).then((data) => {
			data.modify = true;
			return data;
    }).then((data) => {
			console.log(data);
		})
  }).catch(() => {
		console.error("Error");
	}).finally(() => {
		console.log("Finally");
	})

  const test = (time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  };
  // test(1000).then(() => {
  //   console.log("1000");
  // });
  // test(2000).then(() => {
  //   console.log("2000");
  // });

	Promise.all([test(1000), test(2000)]).then(() => {
		console.log("All");
	})
	

	//filter

	const names = ['Ivan', "Ann", "Vova", "Karina" ];

	const shortNames = names.filter(name => name.length < 5);
	console.log(shortNames);
	
  // map
  let answers = ["VovA", "AnNa", "IgOr"];
  answers = answers.map((item) => item.toLowerCase());
  console.log(answers);
	
  const some = [4, "someString", "asdasdas"];
  console.log(some.some((item) => typeof item === "number"));
  console.log(some.every((item) => typeof item === "number"));
	
  //reduce
	
  const arr = [4, 5, 1, 3, 2, 6];
	const res = arr.reduce((sum, current) => sum + current);
	console.log(res);
	
	const arr = ["pepper", "apple", 2, "orange"];
	const res = arr.reduce((sum, current) => sum + current, 0);
	console.log(res);
	
  const obj = {
		igor: "persone",
    ann: "persone",
    dog: "animal",
    cat: "animal",
  };
	const arr = Object.entries(obj)
	.filter(item => item[1] === "persone");
	console.log(arr);
	
  localStorage.setItem("numeber", "5");
  console.log(localStorage.getItem("numeber"));
  localStorage.removeItem("number");
  localStorage.clear();
	*/
  const checkbox = document.querySelector("#checkbox"),
    form = document.querySelector("form"),
    change = document.querySelector("#color");

  if (localStorage.getItem("isChecked")) {
    checkbox.checked = true;
  }

  checkbox.addEventListener("change", () => {
    localStorage.setItem("isChecked", true);
  });

  change.addEventListener("click", () => {
    if (localStorage.getItem("bg") === "changed") {
      localStorage.removeItem("bg");
      form.style.backgroundColor = "white";
    } else {
      localStorage.setItem("bg", "changed");
      form.style.backgroundColor = "yellow";
    }
  });

  const persone = {
    name: "Alex",
    age: 25,
  };

  const seralizedPerson = JSON.stringify(persone);
  localStorage.setItem("Alex", seralizedPerson);
	console.log(JSON.parse(localStorage.getItem('Alex')));
});
