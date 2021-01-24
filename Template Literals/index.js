let word1 = 'Marion';
let word2 = 'Balba';

let fullName = `${word1} ${word2}`;

let num1 = 5;
let num2 = 10;

let sum = `${num1 + num2}`;

// console.log(fullName);

document.getElementById('name').innerText = fullName;
document.getElementById('sum').innerText = sum;

//LOG:
// Encountered a null in fullName