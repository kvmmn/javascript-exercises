"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.

const menuItem = {
  name: "Sourdough",
  price: 4.5,
  inStock: true,
  baked: "2026-08-14",
};

console.log(menuItem.name);
console.log(menuItem.price);

const key = "inStock";
console.log(menuItem[key]);

// Bracket notation was required because the key was stored in a variable; dot notation works only with literal property names, not variables.

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.

menuItem.describe = function () {
  return `${this.name} costs €${this.price} and is ${this.inStock ? "in stock" : "out of stock"}.`;
};

console.log(menuItem.describe());

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.

const menu = [
  { name: "Sourdough", price: 4.5, vegetarian: true },
  { name: "Croissant", price: 3.2, vegetarian: true },
  { name: "Ham & Cheese", price: 5.5, vegetarian: false },
  { name: "Apple Tart", price: 4, vegetarian: true },
  { name: "Salmon Bagel", price: 6, vegetarian: false },
];

for (const item of menu) {
  console.log(`${item.name}: €${item.price}`);
}

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.

const vegetarianNames = menu
  .filter((item) => item.vegetarian)
  .map((item) => item.name);
console.log(vegetarianNames);

const cheapItem = menu.find((item) => item.price < 3);
console.log(cheapItem);

// `find` returns undefined when no item matches the condition.

// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.

const item = menu[0];

console.log(Object.keys(item));
console.log(Object.values(item));

for (const [key, value] of Object.entries(item)) {
  console.log(`${key}: ${value}`);
}

// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.

let item2 = menu[1];
item2.price = 2.5;
console.log(menu[1]);

// Shared reference: changing item2's price also changed menu[1] because they reference the same object.

const item3 = { ...menu[2], price: 4.99 };
console.log(menu[2]);
console.log(item3);

// The spread copy creates a new object, so menu[2] and item3 are independent.

// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";

const words = sentence.split(" ");
const counter = {};

for (const word of words) {
  counter[word] = (counter[word] || 0) + 1;
}

console.log(counter);

const sorted = Object.entries(counter).sort((a, b) => b[1] - a[1]);
console.log(sorted);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
