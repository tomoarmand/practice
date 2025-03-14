let array1 = ["Jerome", "Lance"]

function targetLetter () {
    return array1[1][3];
}

console.log(targetLetter());

let string1 = "Balcony";

function lastLetter2 () {
    return string1[string1.length - 1]
}

console.log(lastLetter2());

let object1 = {
    name: "Shave",
    product: "Dagger",
    add: function () {
       return this.name + this.product;
    }
}

console.log(object1.add())


array1.push("Dave");
console.log(array1);

array1.unshift("Paul");
console.log(array1);

let object2 = {
    names: ["Jared", "Doreen", "Michaela"],
    product: "Pasta",
    number: 12,
    add: function () {
        return this.names + this.product + 12;
    }

   
}

console.log(object2.add())

function anon (val1, val2) {
    return val1 + val2;
}

console.log(anon("Seamus", 12));

let named = function (val1, val2){
    return val1 + val2;
}

console.log(named("James", 5));

let arrow = (val1, val2) => val1 + val2;

console.log(arrow(3, 5));