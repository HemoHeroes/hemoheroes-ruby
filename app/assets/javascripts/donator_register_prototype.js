// = require services/validate_form_prototype

ready(function(){
   onlyInView("user_blood_donators", ["newPrototipo", "edit"],"blood_prototype", function(){

    var initialize = function(){
      buttonValidFormDonator_prototype();
      validateFormDonator_prototype();
    };

    var buttonValidFormDonator_prototype = function(){
      var buttonRegister = document.querySelector('.js-validateForm_prototype');
        buttonRegister.classList.add('is-disabled');
    }

    var validateFormDonator_prototype = function(){
      validateFormDonators_prototype.validateName('.js-validateName', 'focusout');
      validateFormDonators_prototype.validateEmail('.js-validateEmail', 'focusout');
      validateFormDonators_prototype.validateTerms('.js-validateTerms', 'click');
      validateFormDonators_prototype.validateIdade('.js-validateIdade', 'focusout');
      validateFormDonators_prototype.validatePassword('.js-validatePassword','.js-validatePasswordConfirmation','keyup');
    };

    initialize();

  });

 });
