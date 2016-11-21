var Modal = (function(){

  var hideModal = function(selector){
    const modal = document.querySelector(selector);
    modal.style.opacity = 0;
    modal.style.visibility = 'hidden';
  };

  return {
    open: function(selector){

      const modal = document.querySelector(selector);

      if(selector == ".js-modalSuccessMessage"){
        Modal.close(".js-modalConfirmRequest");
        document.querySelector('#demand_blood_banks_form').submit();
      }

      modal.style.opacity = 1;
      modal.style.visibility = 'visible';

      const modalContent = document.querySelector(selector + ' .js-modalContent');
      modalContent.classList.add('is-open');
    },

    close: function(selector){
      hideModal(selector);

      const modalContent = document.querySelector(selector + ' .js-modalContent');
      modalContent.classList.remove('is-open');
    },

    confirm_feedback_donation: function(selector){
      if(selector == ".js-modalSuccessfeedback"){
        document.querySelector('#feedback_donation').submit();
      }
    }

  };

})();
