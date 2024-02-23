// The initial numbers that must be verified.
const totaltrip = 1500;
const totalbudget = 175;
const fuelcost = 3;
var  totalfuel = (totalbudget/fuelcost);
console.log("Total available fuel for $175  (fuel cost $3 per/gallon) : " + totalfuel + "\n");
// travelling with 55 avg speed detaits
console.log("travelling with 55 avg speed detaits \n");
console.log("=====================================");
console.log("How many gallons of fuel will you need for the entire trip? : " + (totaltrip/30)  + "\n");
var budjetenough = ((totaltrip/30)*3) < 175;
console.log("Will your budget be enough to cover the fuel expense? : " + budjetenough + "\n");
console.log("How long will the trip take, in hours? : " + totaltrip / 55 + "\n");
// travelling with 60 avg speed detaits
console.log("travelling with 60 avg speed detaits \n");
console.log("=====================================");
console.log("How many gallons of fuel will you need for the entire trip? : " + (totaltrip/28)  + "\n");
var budjetenough = ((totaltrip/28)*3) < 175;
console.log("Will your budget be enough to cover the fuel expense? : " + budjetenough + "\n");
console.log("How long will the trip take, in hours? : " + totaltrip / 60 + "\n");
// travelling with 75 avg speed detaits
console.log("travelling with 60 avg speed detaits \n");
console.log("=====================================");
console.log("How many gallons of fuel will you need for the entire trip? : " + (totaltrip/23)  + "\n");
var budjetenough = ((totaltrip/23)*3) < 175;
console.log("Will your budget be enough to cover the fuel expense? : " + budjetenough + "\n");
console.log("How long will the trip take, in hours? : " + totaltrip / 75 + "\n");