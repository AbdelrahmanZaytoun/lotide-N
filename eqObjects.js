const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let arrayA = Object.keys(object1);
  let arrayB = Object.keys(object2);
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (const item  of arrayA) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      return eqArrays(object1[item], object2[item]);
    } else {
      if (object1[item] !== object2[item]) {
        return false;
      }
    }
  } return true
};

module.exports = eqObjects;