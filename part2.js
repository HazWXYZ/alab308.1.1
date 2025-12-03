
//You are planning a cross-country road trip!

// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

// const variables
const distance = 1500;
const costPerGal = 3;
const budget = 175;

// dynamic variables
let speed = 55;
let mpg = 30;

// formula variables
let totalGallons = distance / mpg;
let totalCost = totalGallons * costPerGal;
let time = distance / speed;

console.log(
    `Distance: ${distance},
    speed: ${speed}mph,
    MPG: ${mpg},
    Total time: ${time} hours,
    Gallons of fuel: ${totalGallons},
    Cost: ${totalCost},
    isFeasible: ${totalCost <= budget}`
);