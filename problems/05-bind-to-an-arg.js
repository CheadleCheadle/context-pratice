const bindToAnArg = (func, arg) =>{
  function wrap () {
    return func(arg);
  }
  return wrap;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;