var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function double(x) {
  return x * 2;
}

const addNewNumber = numbers.map(double);
console.log(addNewNumber);

//Another way of doing it
const addNewNumber = numbers.map(function (x) {
  return x * 2;
});
console.log(addNewNumber);

//Filter - Create a new array by keeping the items that return true.
var numbers = [3, 56, 2, 48, 5];
const addNewNumber = numbers.filter(function (num) {
  return num <= 20;
});
console.log(addNewNumber);

//Reduce - Accumulate a value by doing something to each item in an array.

var numbers = [3, 56, 2, 48, 5];

const addNewNumber = numbers.reduce(function (accumulate, currentNumber) {
  return accumulate + currentNumber;
});
console.log(addNewNumber);

//Find - find the first item that matches from an array.

var numbers = [3, 56, 2, 48, 5];

const addNewNumber = numbers.find(function (num) {
  return num > 20;
});
console.log(addNewNumber);

//FindIndex - find the index of the first item that matches.

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);

const newEmojipedia = emojipedia.find(function (emojiEntry) {
  return emojiEntry.meaning.includes("the");
});

console.log(newEmojipedia);
