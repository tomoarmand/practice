<<<<<<< Updated upstream
<<<<<<< Updated upstream
const numbers = [1, 2, 3, 4, 5];
=======
=======
>>>>>>> Stashed changes
// const numbers = [1, 2, 3, 4, 5];

// let print = (num) => console.log(num);

// numbers.forEach(print);
<<<<<<< Updated upstream


// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// function withIndex(el, index) {
//     console.log(el, index)
// };

// fruits.forEach(withIndex);


// const prices = [19.99, 25.50, 32.99, 12.75, 45.00];

// let discount = (num) => {
//     console.log(num * 0.9)
// };

// prices.forEach(discount);


// const mixed = [10, 'hello', true, 25, false, 'world', 30];

// function timesTwo(num) {
//     if(typeof num === "number") {
//         console.log(num * 2);
//     }
// }

// mixed.forEach(timesTwo);


// const products = [
//     { name: 'Laptop', price: 999, inStock: true },
//     { name: 'Phone', price: 699, inStock: false },
//     { name: 'Tablet', price: 399, inStock: true },
//     { name: 'Headphones', price: 199, inStock: true },
//     { name: 'Camera', price: 499, inStock: false }
//   ];

// function inStock (el) {
//     if(el.inStock === true) {
//         console.log(el);
//     }
// };

// products.forEach(inStock);


// const numbers = [1, 2, 3, 4, 5];

// function double(num) {
//     let sum;
//     sum = num * num;
//     return sum;
// }

// console.log(numbers.map(double));


// const names = ['john', 'sarah', 'mike', 'jennifer'];

// function firstUpper (el) {
//     return el.charAt(0).toUpperCase() + el.slice(1);
// }

// console.log(names.map(firstUpper));



const numbers = [10, 20, 30, 40, 50];

for (const number of numbers) {
  console.log(number);
};

const fruits = ['apple', 'banana', 'orange'];

for (const fruit of fruits) {
  console.log(`I like ${fruit}s.`);
}

const values = [5, 10, 15, 20];
let sum = 0;

for (const value of values) {
  sum += value;
}

console.log(`The sum is: ${sum}`);

let userInput;

do {
  userInput = prompt("Enter a number greater than 10:");
} while (userInput <= 10);

console.log(`You entered: ${userInput}`);





>>>>>>> Stashed changes

function convertToStrings(arr) {
    return arr.map(function(el) {
       return el.toString();
    })
  
}

<<<<<<< Updated upstream
// Test the function
const stringArray = convertToStrings(numbers);
console.log(stringArray); // Should output: ["1", "2", "3", "4", "5"]
console.log(numbers); // Should remain unchanged: [1, 2, 3, 4, 5]
=======




>>>>>>> Stashed changes
=======


// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// function withIndex(el, index) {
//     console.log(el, index)
// };

// fruits.forEach(withIndex);


// const prices = [19.99, 25.50, 32.99, 12.75, 45.00];

// let discount = (num) => {
//     console.log(num * 0.9)
// };

// prices.forEach(discount);


// const mixed = [10, 'hello', true, 25, false, 'world', 30];

// function timesTwo(num) {
//     if(typeof num === "number") {
//         console.log(num * 2);
//     }
// }

// mixed.forEach(timesTwo);


// const products = [
//     { name: 'Laptop', price: 999, inStock: true },
//     { name: 'Phone', price: 699, inStock: false },
//     { name: 'Tablet', price: 399, inStock: true },
//     { name: 'Headphones', price: 199, inStock: true },
//     { name: 'Camera', price: 499, inStock: false }
//   ];

// function inStock (el) {
//     if(el.inStock === true) {
//         console.log(el);
//     }
// };

// products.forEach(inStock);


// const numbers = [1, 2, 3, 4, 5];

// function double(num) {
//     let sum;
//     sum = num * num;
//     return sum;
// }

// console.log(numbers.map(double));


// const names = ['john', 'sarah', 'mike', 'jennifer'];

// function firstUpper (el) {
//     return el.charAt(0).toUpperCase() + el.slice(1);
// }

// console.log(names.map(firstUpper));



const numbers = [10, 20, 30, 40, 50];

for (const number of numbers) {
  console.log(number);
};

const fruits = ['apple', 'banana', 'orange'];

for (const fruit of fruits) {
  console.log(`I like ${fruit}s.`);
}

const values = [5, 10, 15, 20];
let sum = 0;

for (const value of values) {
  sum += value;
}

console.log(`The sum is: ${sum}`);

let userInput;

do {
  userInput = prompt("Enter a number greater than 10:");
} while (userInput <= 10);

console.log(`You entered: ${userInput}`);











>>>>>>> Stashed changes
