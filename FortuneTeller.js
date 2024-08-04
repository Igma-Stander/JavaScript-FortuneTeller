let momName = prompt("What is your mother's name?");
let streetName = prompt("What is the name of the street you grew up on?");
let favColour = prompt("What was your favourite colour as a kid?");
let curAge = Number(prompt("How old are you?"));
let ranNum = Number(prompt("Choose a number between 1 and 10."));

//longer calculations done beforehand
let kidsTot = curAge % ranNum;
let hairDye = Math.round(curAge / ranNum);

//using template literals
console.log(`In ${ranNum} years you will meet your best friend.
Your bestfriend's name will be ${momName} ${streetName}.
In ${curAge + ranNum} years you will get married.
You will have ${kidsTot} kids.
In ${hairDye} years you will have ${favColour} hair.`);

alert(`In ${ranNum} years you will meet your best friend.
Your bestfriend's name will be ${momName} ${streetName}.
In ${curAge + ranNum} years you will get married.
You will have ${kidsTot} kids.
In ${hairDye} years you will have ${favColour} hair.`);
