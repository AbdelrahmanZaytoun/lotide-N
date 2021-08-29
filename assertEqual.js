
// FUNCTION IMPLEMENTATION 
//template literals, template strings
//which allow you to insert variables / JS into strings by using back-ticks `` and the ${} symbol.

  const assertEqual = function(actual, expected) {
    if (actual === expected) {

      console.log(`✅✅✅✅✅  The same / Assertion passed: ${actual} === ${expected}`);
    } 
    
    else {
  console.log(`🛑🛑🛑🛑 NOT The same/ Assertion failed: ${actual} !== ${expected}`);
    }
  };
  // TEST CODE

  module.exports = assertEqual;