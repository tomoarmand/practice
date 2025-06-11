let randomNumber = Math.floor(Math.random() * 100);
let container = document.getElementById("container");
let displayMessage = document.getElementById("message");
let userInput = document.getElementById("input");
let button = document.getElementById("button");
let counter = document.getElementById("counter");

function checkGuess() {
    let guess = parseInt(userInput.value);
    if (guess === randomNumber) {
        endGame("https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3VucWFzczV2ejVoMDNwd2ZvZmFvMmk0MmhqdTV4M3I1MjNkdzY0eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yf9T23zeArZh6/giphy.gif");
        restartButton();
    } else if (guess > randomNumber) {
        displayMessage.innerText = "A little lower...";
    } else if (guess < randomNumber) {
        displayMessage.innerText = "A little higher...";
    } else if (isNaN(guess)) {
        displayMessage.innerText = "Please enter a number!";
    };
}

button.addEventListener("click", checkGuess);
button.addEventListener("click", guessesLeft);

counter.innerText = 10;

function guessesLeft() {
    let text = parseInt(counter.innerText);
    if (text > 1) {
        userInput.value = "";
        //Resets input field
        text--;
        counter.innerText = text;
        //counter.innerText set to 10 at top of page
        //Don't forget to update counter.innerText with new value in function
    } else if (text == 1) {
        endGame("https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTlwOXdqMWg2bDNtMWpsbjA5NmVscDg3Nzg1MjF1OXR3aTI5cjFvcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eJ4j2VnYOZU8qJU3Py/giphy.gif");
        restartButton();
    }
}

function endGame(url) {
    container.style.display = "none";
    let img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
    //Appends the created img element to the html body
    //Appends means to add to the end of a list/sequence
}

function restartButton() {
    let restart = document.createElement("button");
    restart.style.height = "50px";
    restart.style.width = "200px";
    restart.innerText = "RESTART";
    restart.style.marginTop = "20px";
    document.body.appendChild(restart);
    restart.focus();
    //Gives the restart button keyboard focus!!!
    restart.addEventListener("click", function () {
        window.location.reload();
    })
    restart.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            restart.click();
        }
    });
}

input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        button.click();
    }
});

