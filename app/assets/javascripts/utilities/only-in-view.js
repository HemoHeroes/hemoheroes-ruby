function onlyInView(controller, actions, callback){
  var currentController = document.body.getAttribute("data-controller")
  var currentAction = document.body.getAttribute("data-action");

  if(currentController != controller){
    return false;
  }

  if(Array.isArray(actions)) {
    for(let i = 0, counter = actions.length; i < counter; i++){
      if (currentAction == actions[i]){
        callback();
      }
    }
  } else {
    if (currentAction == actions){
      callback();
    }
  }
}
