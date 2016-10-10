var Modal = function(){

  return {
    open: function(){
      const modal = document.getElementsByClassName('js-modal')[0];
      modal.style.display = "block";
    },

    close: function(){
      const modal = document.getElementsByClassName('js-modal')[0];
      modal.style.display = "none";
    }
  }

}();
