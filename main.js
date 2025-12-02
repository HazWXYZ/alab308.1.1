// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Check if all numbers are divisible by 5. Cache the result in a variable.
const allDivisibleBy5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
const allDivisibleBy5alt = (n1 + n2 + n3 + n4) % 5 === 0;



// Check if the first number is larger than the last. Cache the result in a variable.
const isFirstLargerThanTheLast = n1 > n4;

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
const arthmeticChain = (n2 - n1) * n3 % n4;

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
// is under?
const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;

// Before continuing, go back through your code and add console log statements for each check. 
// Use string concatenation or template literals to format the outputs in a reasonable way.
// For example, instead of console.log(isValid), we could write console.log (`The four numbers are valid according to the provided criteria: ${isValid}.`) or something similar.
// gonna come back to this later
const 
console.log (`The four numbers are valid according to the provided criteria: ${isValid}.`)

//You are planning a cross-country road trip!

// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

// I'm going to calculate the average mpg
// const averageMPG = (30 + 28 + 23) / 3;
// Dividing distance by average mpg 
// actually I read more of the problem and see it wants per speed, which is unrealistic to maintain in the real world

const distance = 1500;
const gallonCost = 3;
const budget = 175;

const 55mphfuel = 