function callOnTarget(func, obj1, obj2) {
  return func.call(obj1, obj2);
}

//return the result of invoking func with obj1 as its context and obj2 as the FIRST argument.


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;