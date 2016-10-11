function onlyInActions(actions, callback){
  if(Array.isArray(actions)) {
    for(let i = 0, counter = actions.length; i < counter; i++){
      if (document.body.getAttribute("data-action") == actions[i]){
        callback();
      }
    }
  } else {
    if (document.body.getAttribute("data-action") == actions){
      callback();
    }
  }
}
