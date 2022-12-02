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

/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const gerry = {
    firstName: 'Gerry',
    lastName: 'Decaires',
    birthYear: 1976,
    job: 'hotelier',

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        this.summary = `My name is ${this.firstName} ${this.lastName} and I am ${this.calcAge()} years old. I have been working as a ${this.job} for 20 years.`;
        return this.summary;
    }
};

console.log(gerry.calcAge());
console.log(gerry.getSummary());


for (let rep = 1; rep <= 10; rep++) {
    console.log(`I like to eat ${rep} vegatables in my salad`);
}

//Looping Arrays, Breaking and Continuing
const gerryArray = [
    'Gerry',
    'Decaires',
    2022 - 1976,
    'it guy',
    ['Natalie, Anya, Layla'],
    ['Sparkles', 'Doody', 'Ms. Ana', 'Cinimini', 'OllieWollie', 'Cosmo'],
    true
];

// const types = [];

// for(let i = 0; i < gerryArray.length ; i++){
//     //reading array
//     console.log(gerryArray[i], typeof gerryArray[i]);

//     //filling array
//     types[i] = typeof gerryArray[i];
// }

// console.log(types);

const years = [1972, 2007, 2009];
const ages = [];

for( let i = 0; i < years.length; i++){
    ages[i] = (2022 - years[i]);
}

console.log(ages);

//continue and break
// for(let i = 0; i < gerryArray.length ; i++){
//     if (typeof gerryArray[i] !== 'string') continue;

//     console.log(gerryArray[i], typeof gerryArray[i]);
// }
for(let i = 0; i < gerryArray.length ; i++){
    if (typeof gerryArray[i] === 'number') break;

    console.log(gerryArray[i], typeof gerryArray[i]);
}


const gerryArray = [
    'Gerry',
    'Decaires',
    2022 - 1976,
    'it guy',
    ['Natalie, Anya, Layla'],
    ['Sparkles', 'Doody', 'Ms. Ana', 'Cinimini', 'OllieWollie', 'Cosmo'],
];
//looping backward
for(let i = gerryArray.length -1; i>=0; i--) {
    console.log(gerryArray[i]);
}
//loop within loops
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`Starting exercise ${exercise}`);

for (let rep =1; rep <= 10; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
    }   
}


for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repition ${rep}`);
}

//While Loop
let rep = 1
while (rep <= 10) {
    console.log(`Lifting weights repition ${rep}`);
    rep++
}


let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice == 6) console.log(`You finally rolled a ${dice}`);
    }

    */

    ///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const tips = [];
const totals = [];
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcTip = function () {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    let tips = calcTip(bills[i]);
    }

 