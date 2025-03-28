function isEven(number) {
    return number % 2 == 0;
}

console.log(isEven(3))

function isAdult(age) {
    return age >= 18;
}

console.log(isAdult(12))

function canDrive(age, hasLicense) {
    return age >= 16 && hasLicense
}

function isLeapYear(year) {
    return year % 4 == 0 && !(year % 100 == 0) && year % 400 == 0;
}

console.log(isLeapYear(2024))