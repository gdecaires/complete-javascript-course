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


const cropNames = ['corn', 'lettuce', 'sweet peppers'];
console.log(cropNames[1]);

cropNames[0] = 'tomatoes';

console.log(cropNames[0]);

const years = [1972, 1976, 2007, 2009];
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const natAge = calcAge1(years[0]);
console.log(natAge);

const laylaAge = calcAge1(years[years.length - 1]);
console.log(laylaAge);

const friends = ['Leon', 'Alan', 'Bernie'];
friends.push('Andre');
console.log(friends[3]);
*/
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, 
and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above 
(you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15
    } else {
        return bill * 0.20
    };
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips);
console.log(totals);

*/
