function onlyInView(controller, actions, options, callback){

  var currentController = document.body.getAttribute("data-controller");
  var currentAction = document.body.getAttribute("data-action");
  var currrentResource = document.body.getAttribute("data-resource");

  if (currentController != controller){
    console.log("Controller atual: "+currentController);
    return false;
  }

  if (Array.isArray(actions)) {
    for (var i = 0, counter = actions.length; i < counter; i++){
      if (currentAction == actions[i] && currrentResource == options){
        callback();
      }
    }

  } else {
    if (currentAction == actions && currrentResource == options){
      callback();
    }
  }
}
