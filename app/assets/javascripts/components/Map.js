var clickMap = (function(){

  var showNotification = function(selector){
    const map = document.querySelector(selector);
    map.style.display = "";
    map.id = 'show';
  };

  var hideNotification = function(selector){
    const map = document.querySelector(selector);
    map.style.display = "none";
    map.id = 'hide';
  };

  return {
    show: function(selector){
      const map = document.querySelector(selector);
      if(map.id === 'hide'){
        showNotification(selector);
      }
      else if(map.id === 'show'){
        hideNotification(selector);
      }
    }

  };

})();
