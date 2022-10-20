'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// function myName() {
//     console.log(`My name is Gerry`);
// }

// myName();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const fruitJuice = fruitProcessor('Red', 'Florida');
// console.log(fruitJuice);

/*
// Function declaration
function calcAge1(birthYear) {
     return 2022 - birthYear;
}

console.log(calcAge1(1976));

//Function expression
function calcAge2 (birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(1976);
console.log(age2);

//Arrow Functions
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1976);
console.log(age3);

// Functions calling functions

function cutFruitPieces(fruit) {
    return fruit * 3;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} slices of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));

*/
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

function totalScore(score1, score2, score3) {
    return score1 + score2 + score3;
}

const calcAverage = (totalScore) => totalScore / 3;

const dolphinsScore = totalScore(44,23,71);
const koalasScore = totalScore(65,54,49);

function checkWinner(avgDolphins,avgKoalas) {
    if (avgDolphins > (avgKoalas * 2)) {
    console.log(`Dolphins Win!`); 
} else if(avgKoalas > (avgDolphins * 2)) {
    console.log(`Koalas Win!`);
} else {
    console.log(`Nobody Wins`);
}
}
checkWinner(dolphinsScore,koalasScore);



