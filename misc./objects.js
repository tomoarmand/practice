let person = {
    name: "James",
    occupation: "Drug Dealer",
    age: 35,
    location: "Mumbai",
    hobbies: ["Walking", "Driving", "Meditation"],
    address: {
        number: 28,
        street: "William Street",
        suburb: "Indian Suburb"
    },
    contact: {
        phone: 214537989,
        email: "jamesanderson@gmail.com"
    },
    greet: function () {
        return `Hello, my name is ${this.name}, I am ${this.age} and live in ${this.location}`;
    },
    getAge: function () {
        return `I am ${this.age} years old`
    },
    hasHobby: function (hobby) {
        return this.hobbies.includes(hobby)
    },
    newHobby: function (newHobby) {
        this.hobbies.push(newHobby);
        return newHobby + " has been added to my hobbies."
    },

};

console.log(person.greet());
console.log(person.getAge());
console.log("Do I enjoy driving? " + person.hasHobby("Driving"));
console.log("Do I enjoy running? " + person.hasHobby("Running"));
console.log(person.newHobby("Running"))
console.log(person.hobbies);
console.log(person.hasHobby("Running"));



