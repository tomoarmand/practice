const numbers = [1, 2, 3, 4, 5];

console.log(numbers.map((number) => number * 2));
console.log(numbers.forEach((number) => number * 2));

const names = ["Alice", "Bob", "Charlie"];

console.log(names.map((name) => `Hello ${name}`));

const users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 22 }
];

console.log(users.map((object) => object.name));

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers1.filter((number) => number % 2 == 0));

const words = ["apple", "banana", "grape", "kiwi", "strawberry"];

console.log(words.filter((word) => word.length > 5));

const users1 = [
    { name: "John", age: 16 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 18 }
  ];
  
console.log(users1.filter((object) => object.age >= 18))

const users2 = [
    { name: "John", isPremium: false, email: "john@example.com" },
    { name: "Jane", isPremium: true, email: "jane@example.com" },
    { name: "Bob", isPremium: true, email: "bob@example.com" }
];

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers2.filter((number) => number % 2 == 0).map((number) => number * number));

const users3 = [
    { name: "John", isPremium: false, email: "john@example.com" },
    { name: "Jane", isPremium: true, email: "jane@example.com" },
    { name: "Bob", isPremium: true, email: "bob@example.com" }
  ];

  console.log(users3.filter((user) => user.isPremium).map((user) => `PREMIUM: ${user.email}`))



