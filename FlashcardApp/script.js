const cards = document.querySelector(".cards")
const prompt = document.querySelector(".prompt")
const answer = document.querySelector(".answer")
const category = document.querySelector(".category")

let questions = {
    "Dog":"Dogs are barky",
    "Cat":"Cats are furry",
    "Snail":"Snails are slow",
    "Bee":"Bees are busy"
}

let categories = ["Animals", "Not Animals"]

category.innerHTML = `<h2>${categories[0]}</h2>`

let terms = Object.entries(questions)

function displayTerms() {
    let x = 0
    for (term in terms) {
        cards.insertAdjacentHTML('beforeend', `<div class="cards"><h3>${terms[x][0]}</h3></div>`)
        x += 1;
    }
}