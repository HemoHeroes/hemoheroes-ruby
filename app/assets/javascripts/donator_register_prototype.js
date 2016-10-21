
ready(function(){
   onlyInView("user_blood_donators", ["new", "edit"], function(){

    var initialize = function(){
      buttonValidFormDonator();
      validateFormDonators_prototype();
    };

    var buttonValidFormDonator = function(){
      var buttonRegister = document.querySelector('.js-validateForm');
      buttonRegister.classList.add('is-disabled');
    }

    var validateFormDonators_prototype = function(){
      validateFormDonators_prototype.validateName('.js-validateName', 'focusout');
      validateFormDonators_prototype.validateEmail('.js-validateEmail', 'focusout');
      validateFormDonators_prototype.validateTerms('.js-validateTerms', 'click');
      validateFormDonators_prototype.removeMask('js-validateForm','click');
      validateFormDonators_prototype.validatePassword('.js-validatePassword','.js-validatePasswordConfirmation','keyup');
    };


    initialize();

  });

 });
