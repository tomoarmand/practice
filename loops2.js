const numbers = [1, 2, 3, 4, 5];

function convertToStrings(arr) {
    return arr.map(function(el) {
       return el.toString();
    })
  
}

// Test the function
const stringArray = convertToStrings(numbers);
console.log(stringArray); // Should output: ["1", "2", "3", "4", "5"]
console.log(numbers); // Should remain unchanged: [1, 2, 3, 4, 5]