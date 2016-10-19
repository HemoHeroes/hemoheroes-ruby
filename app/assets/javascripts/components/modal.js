var Modal = (function(){

  return {
    open: function(selector){

      const modal = document.querySelector(selector);

      if(selector == ".js-modalSuccessMessage"){
        Modal.close(".js-modalConfirmRequest");
      }

      modal.style.opacity = 1;
      modal.style.visibility = 'visible';

      const modalContent = document.querySelector(selector + ' .js-modalContent');
      modalContent.style.top = '50%';
    },

    close: function(selector){
      const modal = document.querySelector(selector);
      modal.style.opacity = 0;
      modal.style.visibility = 'hidden';

    }
  }

})()
