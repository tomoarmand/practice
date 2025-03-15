let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i=0; i < numbers.length; i++) {
    console.log(numbers[i]);
};

for(let i=1; i < 11; i++) {
    console.log(i);
};

for(let i=10; i >= 1; i--) {
    console.log(i);
};

for(let i=2; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
};

for(let i=2; i <= 20; i += 2) {
    console.log(i);
}

let sum = 0;

for(let i=1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);

let fruit = ["Banana", "Dragonfruit", "Blueberries", "Avocado", "Papaya"];

for(let i=0; i < fruit.length; i++) {
console.log(fruit[i]);
}

let string = "Decorum";

for(let i=0; i < string.length; i++) {
    console.log(string[i])
}

let randomNumber = Math.floor(Math.random() * 11);
let guess = 0;
while(guess !== randomNumber){
    guess = parseInt(prompt("Please enter a number between 1 and 10"));

    if (guess > randomNumber) {
        console.log("Guess Lower!");
    }else if (guess < randomNumber) {
        console.log("Guess Higher!");
    }else {
        console.log("You Are Correct!");
    }
    
}
