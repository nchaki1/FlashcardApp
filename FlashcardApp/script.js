const prompt = document.querySelector(".prompt");
const answer = document.querySelector(".answer")
const showButton = document.querySelector(".show");
const nextButton = document.querySelector(".next");

showButton.addEventListener('click', function() {
    answer.style.display = "block";
});

nextButton.addEventListener('click', function() {
    console.log("You clicked next button");
});