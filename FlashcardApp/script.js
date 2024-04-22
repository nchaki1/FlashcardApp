const prompt = document.querySelector(".prompt")
const answer = document.querySelector(".answer")
const showButton = document.querySelector(".show")
const nextButton = document.querySelector(".next")

let questions = {
    "Dog":"barky",
    "Cat":"furry",
    "Snail":"slow"
}

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
    console.log("You clicked next button")
})