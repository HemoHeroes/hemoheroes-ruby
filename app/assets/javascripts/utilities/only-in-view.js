function onlyInView(controller, actions, callback){
  var currentController = document.body.getAttribute("data-controller");
  var currentAction = document.body.getAttribute("data-action");

  if(currentController != controller){
    console.log("Ele ta na controller atual: "+currentController);
    return false;
  }

  if(Array.isArray(actions)) {
    for(var i = 0, counter = actions.length; i < counter; i++){
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
