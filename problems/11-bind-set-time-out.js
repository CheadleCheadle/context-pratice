function boundFuncTimer(obj, func, delay) {
  setTimeout(func.bind(obj), delay);
}

//should invoke func with obj as context at the delay

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;