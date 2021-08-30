
let flatten = function(array) {
  let theResult  = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        theResult.push(array[i][j])
      }
    } else { theResult.push(array[i]);
    }
  }
  return theResult;

}

// flatten([2,3,4,[2,3,4,5],"sadasd"])


module.exports = flatten;




