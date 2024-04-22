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

function selectTerm() {
    let randTerm = terms[Math.floor(Math.random() * terms.length)]
    prompt.innerHTML = `<h3>${randTerm[0]}</h3>`
    answer.innerHTML = `<h3>${randTerm[1]}</h3>`
}

showButton.addEventListener('click', function() {
    answer.style.display = "block"
})

nextButton.addEventListener('click', function() {
    selectTerm()
    answer.style.display = "none"
})