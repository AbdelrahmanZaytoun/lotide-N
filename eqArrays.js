
const theAssert= require("./assertEqual")

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`These two arguemnts are the same: ${actual} vs ${expected}`);
//   } else {
//     console.log(`These two arguemnts are NOT the same: ${actual} vs ${expected}`);
//   }

// };

const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length)
      return false;
    for (let i = arr1.length; i--;) {
      if (arr1[i]!== arr2[i]) {
        return false;
      }
    }

    return true;


  };


module.exports = eqArrays;
