"use strict";

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.

const shopName = "Sunrise Bakery";
const openingHour = 7;
const closingHour = 18;

console.log(
  `Welcome to ${shopName}! We are open from ${openingHour}:00 to ${closingHour}:00.`,
);

// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";

const cleanedMessy = messy
  .trim()
  .replace(/\s+/g, " ")
  .replace("daily", "every morning");

console.log(cleanedMessy);

// trim removed spaces at both ends, replace collapsed repeated whitespace, and replace changed "daily" to "every morning"; the proper name keeps its capital letters.
// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";

const wordStart = product.indexOf("whole grain");
const wordEnd = wordStart + "whole grain".length;

console.log(product.length);
console.log(wordStart);
console.log(product.slice(wordStart, wordEnd));
console.log(flavorList.split(","));

// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;

const finalPrice = netPrice * (1 + taxRate);

console.log(`The final price is €${finalPrice.toFixed(2)}.`);

// toFixed() must come last because formatting the number as text before calculating would prevent accurate arithmetic.

// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.

const diceRoll = Math.floor(Math.random() * 6) + 1;
const rangeRoll = Math.floor(Math.random() * 11) + 10;

console.log(diceRoll);
console.log(rangeRoll);

// Math.random() returns a value from 0 up to but not including 1; multiplying by 11 and adding 10 creates whole numbers from 10 through 20.

// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.

const bakeryWord = "Croissant";

console.log(bakeryWord.at(0));
console.log(bakeryWord.at(-1));

// The at() method returns the character at a given position, and negative positions count from the end of the string.

// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.

const firstName = "Max";
const lastName = "Mustermann";

const username = `${firstName.at(0)}${lastName}`.toLowerCase();

console.log(username);

const adjective = "sparkly";
const noun = "croissant";
const verb = "danced";
const place = "the bakery";

console.log(
  `The ${adjective} ${noun} ${verb} through ${place} while wearing tiny shoes.`,
);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
