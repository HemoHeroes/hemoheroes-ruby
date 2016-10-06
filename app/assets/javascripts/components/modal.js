var Modal = function(){

  return {
    open: function(){
      const modal = document.getElementById('modal');
      modal.style.display = "block";
    },

    close: function(){
      const modal = document.getElementById('modal');
      modal.style.display = "none";
    }
  }

}();
