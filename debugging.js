// This function has multiple bugs - use console.log to find and fix them
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i <= numbers.length; i++) {
      sum += numbers[i];
    }
    console.log(sum);
    const average = sum / numbers.length;
    return average;
  }
  
  // Test data
  const testNumbers = [10, 20, 30, 40, 50];
  console.log(testNumbers)
  const result = calculateAverage(testNumbers);
  console.log("The average is:", result); // This will not give the correct result

  