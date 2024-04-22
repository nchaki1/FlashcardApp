const prompt = document.querySelector(".prompt")
const answer = document.querySelector(".answer")
const category = document.querySelector(".category")
const showButton = document.querySelector(".show")
const nextButton = document.querySelector(".next")

let questions = {
    "Dog":"Dogs are barky",
    "Cat":"Cats are furry",
    "Snail":"Snails are slow"
}

let categories = ["Animals", "Not Animals"]

category.innerHTML = `<h2>${categories[0]}</h2>`

let terms = Object.entries(questions)

function displayTerms() {
    let x = 0
    for (term in terms) {
        console.log(terms[x][0])
        x += 1;
    }
}