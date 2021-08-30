let findKeyByValue = function(object, value) {
    let keysArray = Object.keys(object);
    for (let k of keysArray) {
    if (object[k] === value) {
     return k
      }
    }
  };

  // findKeyByValue({a:4, b:3, c:7},7)
  
  module.exports = findKeyByValue;



