let selection = prompt("Would you like to see the time or today's date?");
const date = new Date().toDateString();
const time = new Date().toTimeString();

if (selection === "date") {
    console.log(date);
}
else if (selection === "time"){
    console.log(time);
}
else {
    console.log("Invalid input: Please try again.")
}