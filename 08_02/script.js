/**
 * Working with functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// Function declaration:
// Function hoisted to global scope
// Function can be redeclared (like a var)
function doSomeMath(a, b) {
  let c = a + b;
  return c;
}

// Function expression:
// value of a constant is set to an anonymous function
// Preferred way of declaring function
// Locally scoped and can't be redeclared
// can set default values
const doMoreMath = function (a = 3, b = 2) {
  let c = a * b;
  return c;
};

console.log("Do some math:", doSomeMath(5, 6));
console.log("Do more math:", doMoreMath(5, 6));
console.log("Do more math:", doMoreMath);
console.log("Do more math:", doMoreMath());

// Immediately Invoked Function Expression (IIFE)
(function () {
  let a = 4;
  let b = 6;
  let c = doSomeMath(a, b);
  console.log(`The sum of a and b is: ${c}`);
})();
