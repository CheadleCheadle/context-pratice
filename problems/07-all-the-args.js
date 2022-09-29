function allTheArgs(func, ...args) {
  
  function wrap(...arg) {
    if (arg !== undefined) {
      return func(...args, ...arg);
    } else {
      return func.call(this, args);
    }
    
  }
  return wrap;
}

const adder = (...nums) => nums.reduce((num, sum) => sum + num);
let addFive = allTheArgs(adder, 5);
console.log(addFive(10));

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;