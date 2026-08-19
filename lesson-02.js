"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.

const shopName = "Sunrise Bakery";
// shopName uses const because the shop name does not change.

const featuredProduct = "Chocolate Croissant";
// featuredProduct uses const because the featured product is fixed.

let stockCount = 24;
// stockCount uses let because the number of products can change.

const productPrice = 4.5;
// productPrice uses const because the exercise treats the price as fixed.

let shopIsOpen = true;
// shopIsOpen uses let because the shop's open status can change.

console.log(shopName);
console.log(featuredProduct);
console.log(stockCount);
console.log(productPrice);
console.log(shopIsOpen);

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.

console.log(typeof shopName);
console.log(typeof featuredProduct);
console.log(typeof stockCount);
console.log(typeof productPrice);
console.log(typeof shopIsOpen);
console.log(typeof null);
console.log(typeof undefined);

// typeof null returning "object" is a famous historical bug in JavaScript.

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.

let missingValue;
const emptyValue = null;

console.log(missingValue);
console.log(typeof missingValue);
console.log(emptyValue);
console.log(typeof emptyValue);

// undefined means a variable has been declared without a value, while null is an intentional empty value.

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

const price = Number(priceText);
const itemCount = Number(countText);
const isFeatured = Boolean(flagText);
const priceLabel = String(9.99);

console.log(price, typeof price);
console.log(itemCount, typeof itemCount);
console.log(isFeatured, typeof isFeatured);
console.log(priceLabel, typeof priceLabel);

// Number() would produce NaN if the string were not a clean number.

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
// const bakeryName = "Maison Sarah";   ----> Line with error
let bakeryName = "Maison Sarah";
bakeryName = "The Corner Bakery";
// Changed bakeryName from const to let because its value is reassigned.

// openingHour = 7;     ----> Line with error
const openingHour = 7;
// Declared openingHour with const before assigning it a value.

// console.log(loafCount);  ----> Line with error
// let loafCount = 12;  ----> Line with error
let loafCount = 12;
console.log(loafCount);
// Moved the loafCount declaration before its use to avoid accessing it before initialization.

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.

let a = "first value";
let b = "second value";

const temporaryValue = a;
a = b;
b = temporaryValue;

console.log(a);
console.log(b);

// The temporary variable stored the original value of a so the two values could be swapped safely.

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
