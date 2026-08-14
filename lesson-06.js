"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.

const menuItems = [
  "Sourdough",
  "Croissant",
  "Baguette",
  "Apple Tart",
  "Cinnamon Roll",
];

console.log(menuItems);
console.log(menuItems[0]);
console.log(menuItems[menuItems.length - 1]);
console.log(menuItems.length);

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.

menuItems.push("Chocolate Cake");
console.log(menuItems);
// push added to the end of the array.

menuItems.unshift("Pretzel");
console.log(menuItems);
// unshift added to the beginning of the array.

menuItems.pop();
console.log(menuItems);
// pop removed from the end of the array.

menuItems.shift();
console.log(menuItems);
// shift removed from the beginning of the array.

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.

for (let i = 0; i < menuItems.length; i++) {
  console.log(menuItems[i]);
}

for (const item of menuItems) {
  console.log(item);
}

// Use a counting for loop when you need the index, and for...of when you only need each value.

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];

const displayPrices = prices.map((price) => `€${price}`);
console.log(displayPrices);

const cheapPrices = prices.filter((price) => price < 5);
console.log(cheapPrices);

const firstExpensive = prices.find((price) => price > 10);
console.log(firstExpensive);

// forEach would have returned undefined in each case because it does not produce a new array, which is the well-known trap.

// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
];

for (const artist of artists) {
  console.log(`Artist: ${artist}`);
  console.log(`---`);
}

artists.push("Ebi");

for (const artist of artists) {
  console.log(`Artist: ${artist}`);
  console.log(`---`);
}

// I did not have to change the loop; adding data to the array was enough.

// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.

const secondMenu = menuItems;
secondMenu.push("Focaccia");

console.log(menuItems);
console.log(secondMenu);
// Both arrays show Focaccia because they share the same reference.

const menuCopy = [...menuItems];
menuCopy.push("Danish");

console.log(menuItems.length);
console.log(menuCopy.length);
// The original length is unchanged because the spread copy is independent.

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

let sum = 0;
let largest = numbers[0];

for (const num of numbers) {
  sum = sum + num;
  if (num > largest) {
    largest = num;
  }
}

console.log(`Sum: ${sum}`);
console.log(`Largest: ${largest}`);

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.

const word = "JavaScript";
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversed = reversed + word[i];
}

console.log(reversed);

const vowels = ["a", "e", "i", "o", "u"];
let vowelCount = 0;

for (const char of word.toLowerCase()) {
  if (vowels.includes(char)) {
    vowelCount = vowelCount + 1;
  }
}

console.log(`Vowels in "${word}": ${vowelCount}`);

function isPalindrome(text) {
  let reversedText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversedText = reversedText + text[i];
  }
  return text.toLowerCase() === reversedText.toLowerCase();
}

console.log(`"racecar" is a palindrome: ${isPalindrome("racecar")}`);
console.log(`"hello" is a palindrome: ${isPalindrome("hello")}`);
console.log(`"Madam" is a palindrome: ${isPalindrome("Madam")}`);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
