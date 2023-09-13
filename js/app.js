'use strict'
console.log('js file is connected!');

let userPoints = 0;
console.log('user points:', userPoints);

alert('Welcome to my my guessing game!');

let userName;

// while loop will loop until user enters their name, no null here!
while(!userName){
    prompt('Welcome, what is your name?');
    console.log('username:', userName);
}

//lowercase our input and remove extra spaces off the end.
let normalizedInputName = userName.toLowerCase().trim();
console.log('clean input:', normalizedInputName);

// if the name input isn't bob, then console log will say 'bob?'
if(normalizedInputName !== 'bob'){
    console.log('bob?', normalizedInputName);
}

//just a silly alert
alert('Hello, ' + userName + ', we are going to play a game!');

//you should use this template for your questions
let answer = prompt('Is popcorn my favorite food?').trim().toLowerCase();
console.log(answer);

if(answer === 'no' || answer === 'n'){
    alert('That is correct! Popcorn is not my favorite.');
    userPoints += 1;
    console.log('points:', userPoints);
} else {
    alert('No, that is incorrect. I like chicken strips.');
}

//while loops require starting variable
//console.log while loops need an expression to change the starting variable
let count = 0;
while(count <= 50){
    console.log('count:', count);
    count = count + 5;
}

//this loop counts down from 50 to 0, decreasing by two each time
count = 50;
while(count >= 20){
    console.log ('50 -> 20:', count);
    count = count - 2;
}

let newUser;
do {
    newUser = prompt('A new username, please?');
    console.log('new username', newUser);
} while(!newUser);
console.log('We now have a new user', newUser);

let a = 10;
let emptyObject = {};
// in this condition what we are checking for is true or false
if(a){
    console.log('A exists!')
}

if(a && emptyObject){
    console.log('They both exist!')
}

let foodsILike = ['tatertots', 'chips', 'popcorn', 'pizza'];
console.log(foodsILike);

for(let i = 0; i < foodsILike.length; i++){
    console.log('Do we get food?', foodsILike[i]);
}