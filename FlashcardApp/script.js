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
    let randTerm = terms[0][0]

    terms.forEach(element => {
        console.log(terms)
    });
}