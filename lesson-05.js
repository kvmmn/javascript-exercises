"use strict";

// Lesson 05 exercise: Functions
// In your exercise repository, create a branch named `lesson-05-exercise` and switch to it,
// then open `lesson-05.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Take the order pricing chain from the previous exercise, which the file provides again, and
// wrap it in a declared function that receives the order size as a parameter. Call the
// function with four different sizes and log each result.

// * The pricing chain from the previous exercise, provided again:
// const orderSize = 14;
// if (orderSize > 12) {
//   console.log("Large order, call the bakery ahead");
// } else if (orderSize > 6) {
//   console.log("Medium order, ready in an hour");
// } else {
//   console.log("Small order, walk right in");
// }

function describeOrder(orderSize) {
  if (orderSize > 12) {
    console.log("Large order, call the bakery ahead");
  } else if (orderSize > 6) {
    console.log("Medium order, ready in an hour");
  } else {
    console.log("Small order, walk right in");
  }
}

describeOrder(14);
describeOrder(8);
describeOrder(4);
describeOrder(20);

// TODO: Part two.
// Change the function so that it returns its message instead of printing inside the body, and
// move every `console.log` to the call site. Add a one-sentence comment on why the returning
// version is more reusable.

function getOrderMessage(orderSize) {
  if (orderSize > 12) {
    return "Large order, call the bakery ahead";
  } else if (orderSize > 6) {
    return "Medium order, ready in an hour";
  } else {
    return "Small order, walk right in";
  }
}

console.log(getOrderMessage(14));
console.log(getOrderMessage(8));
console.log(getOrderMessage(4));
console.log(getOrderMessage(20));

// Returning the message is more reusable because the caller decides what to do with it instead of the function always printing.

// TODO: Part three.
// The file provides two small declared helper functions. Convert the first into a function
// expression and the second into a one-line arrow function with an implicit return, and prove
// with logged calls that the behavior of both is unchanged.

// * The two provided helpers, convert the first to a function expression,
// * the second to a one-line arrow function with an implicit return:
// function double(n) {
//   return n * 2;
// }
const double = function (n) {
  return n * 2;
};

// function shout(text) {
//   return `${text.toUpperCase()}!`;
// }
const shout = (text) => `${text.toUpperCase()}!`;

console.log(double(4));
console.log(shout("hello"));

// TODO: Part four.
// Give your pricing function a default parameter value, and log one call that supplies the
// argument and one call that relies on the default.

function getDefaultOrderMessage(orderSize = 4) {
  if (orderSize > 12) {
    return "Large order, call the bakery ahead";
  } else if (orderSize > 6) {
    return "Medium order, ready in an hour";
  } else {
    return "Small order, walk right in";
  }
}

console.log(getDefaultOrderMessage(14));
console.log(getDefaultOrderMessage());

// TODO: Part five.
// Write a function named `repeat` that receives a callback and a count, and calls the callback
// that many times using the counting pattern provided in the file's starter comments. Pass it
// an arrow function of your own and run it.

// * The starter counting pattern for repeat(callback, count):
// * let i = 1;
// * while (i <= count) { call the callback here; i = i + 1; }

function repeat(callback, count) {
  let i = 1;
  while (i <= count) {
    callback(i);
    i = i + 1;
  }
}

repeat((number) => {
  console.log(`Round ${number}`);
}, 3);

// TODO: Part six.
// The file contains a short program with global, function, and block declarations, including
// one shadowed name. Before running it, write a comment predicting each logged line; then run
// it, correct your misses, and leave both prediction and result visible.

// * The provided scope program, predict every logged line before running:
const shopName = "Maison Sarah";
function greet(customer) {
  const shopName = "The Corner Bakery";
  return `Welcome to ${shopName}, ${customer}`;
}
console.log(greet("Anna")); // prediction:  Welcome to The Corner Bakery, Anna
console.log(shopName); // prediction:       Maison Sarah
if (true) {
  const insideIf = "visible in here";
  console.log(insideIf); // prediction:     visible in here
}
// console.log(insideIf); // prediction first, then uncomment to verify: ReferenceError (insideIf is not defined), then uncomment to verify

// TODO: Part seven.
// Write the classic temperature converter as two functions, one converting Celsius to
// Fahrenheit and one converting back, each returning its result. Log a small table of three
// conversions in each direction, formatted with template literals and `toFixed`.

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log(`0°C = ${celsiusToFahrenheit(0).toFixed(1)}°F`);
console.log(`20°C = ${celsiusToFahrenheit(20).toFixed(1)}°F`);
console.log(`100°C = ${celsiusToFahrenheit(100).toFixed(1)}°F`);
console.log(`32°F = ${fahrenheitToCelsius(32).toFixed(1)}°C`);
console.log(`68°F = ${fahrenheitToCelsius(68).toFixed(1)}°C`);
console.log(`212°F = ${fahrenheitToCelsius(212).toFixed(1)}°C`);

// TODO: Part eight.
// The file provides a line that throws a TypeError when run. Wrap it in `try` and `catch`, log
// a friendly sentence that contains the error's message, and log one further line after the
// block to prove the program survived.

// ! This line throws a TypeError. Keep it commented until this part,
// ! then uncomment it and wrap it in try and catch:
// const answer = 42;
// console.log(answer.toUpperCase());

const answer = 42;

try {
  console.log(answer.toUpperCase());
} catch (error) {
  console.log(`The operation failed: ${error.message}`);
}

console.log("The program survived the error.");

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
