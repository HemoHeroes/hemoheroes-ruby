function addEventListenerToArray(array, trigger, callback){

  var trigger = trigger || "click";

  for(var i = 0, arraySize = array.length; i < arraySize; i++) {
    array[i].addEventListener(trigger, function() {
      callback();
    })
  }
}
