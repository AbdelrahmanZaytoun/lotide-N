
  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅✅✅  The same / Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑🛑 NOT The same/ Assertion failed: ${actual} !== ${expected}`);
    }
  };
  // TEST CODE

  module.exports = assertEqual;