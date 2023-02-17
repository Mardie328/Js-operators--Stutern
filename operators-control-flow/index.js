"use strict";

// Question 3
const classGroup = "Arts";

const scienceSubjects = [
  "Physics",
  "Chemistry",
  "Biology",
  "Technical Drawing",
];
const socialScienceSubjects = [
  "Accounting",
  "Commerce",
  "Marketing",
  "Geography",
];
const artsSubjects = ["Government", "Economics", "Literature", "History"];
const generalSubjects = ["English", "Mathematics"];

if (classGroup === "Science") {
  console.log(`Your subjects are ${scienceSubjects}, ${generalSubjects}`);
} else if (classGroup === "Social science") {
  console.log(`Your subjects are ${socialScienceSubjects}, ${generalSubjects}`);
} else if (classGroup === "Arts") {
  console.log(`Your subjects are ${artsSubjects}, ${generalSubjects}`);
} else console.log(`Your subjects are ${generalSubjects}`);

// Question 5
function nearestPowerOfTwo(num) {
  const exponent = Math.floor(Math.log2(num));
  const lowerPower = Math.pow(2, exponent);
  const upperPower = Math.pow(2, exponent + 1);
  const lowerDifference = Math.abs(num - lowerPower);
  const upperDifference = Math.abs(num - upperPower);
  const pwr = lowerDifference <= upperDifference ? lowerPower : upperPower;
  return `The number ${pwr} is the power of 2 nearest to ${num}`;
}

console.log(nearestPowerOfTwo(50));
