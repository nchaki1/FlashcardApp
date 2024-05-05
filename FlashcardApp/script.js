const cards = document.querySelector(".cards")
const category = document.querySelector(".category")

var sqlite = require("sqlite3").verbose();

const db = new sqlite3.Database('./flash.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected');
  });

let categories = ["Animals", "Not Animals"]

category.innerHTML = `<h2>${categories[0]}</h2>`

function displayTerms() {
    let questions = {
        "Dog":"Dogs are barky",
        "Cat":"Cats are furry",
        "Snail":"Snails are slow",
        "Bee":"Bees are busy"
    }

    let terms = Object.entries(questions)

    let x = 0
    for (term in terms) {
        cards.insertAdjacentHTML('beforeend', `<div class="cards"><h3>${terms[x][0]}</h3></div>`);
        x += 1;
    }
}