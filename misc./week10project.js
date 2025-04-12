let userInput = document.getElementById("user-input");
let displayField = document.getElementById("display-field");
let calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", function() {

    let currentDate = new Date();

    let currentYear = currentDate.getFullYear();

    let inputYear = parseInt(userInput.value);

    if (currentYear > inputYear) {
        let difference = currentYear - inputYear;
        displayField.innerText = difference;
    }
})

let colorInput = document.getElementById("color-input");
let colorButton = document.getElementById("color-button");
let circles = document.querySelectorAll(".circle");

colorButton.addEventListener("click", function() {

    let color = colorInput.value;

    circles.forEach(function(circle) {
        circle.style.backgroundColor = color;
    })

})

let clearButton = document.getElementById("clear-button");
let displayButton = document.getElementById("display-button")