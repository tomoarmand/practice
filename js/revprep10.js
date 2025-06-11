alertButton = document.getElementById("alert");
blackButton = document.getElementById("black");
whiteButton = document.getElementById("white");
switchButton = document.getElementById("switch");

alertButton.addEventListener("click", function() {
    alert("Hello");
})

blackButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
})

whiteButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
})

switchButton.addEventListener("click", function() {
    if (document.body.style.backgroundColor == "black") {
        document.body.style.backgroundColor = "white"
    }
    else {
        document.body.style.backgroundColor = "black"
    }
    }
)
