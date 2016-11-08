// = require services/validate_form_prototype

ready(function(){

  // onlyInView("user_blood_donators", ["newPrototipo", "edit"],"blood_prototype", function(){
    var initialize = function(){
      buttonValidSimpleFormDonator();
      validateSimpleFormDonator();
    };

    var buttonValidSimpleFormDonator = function(){
      var buttonRegisterSimpleDonator = document.querySelector('.js-validateButtonSimpleDonator');
      buttonRegisterSimpleDonator.classList.add('is-disabled');
    }

    var validateSimpleFormDonator = function(){
      validateFormService.validateName('.js-validateName', 'focusout');
      validateFormService.validateEmail('.js-validateEmail', 'focusout');
      validateFormService.validateTerms('.js-validateTerms', 'click');
      validateFormService.validatePassword('.js-validatePassword','.js-validatePasswordConfirmation','keyup');
    };

    initialize();

  // });

});
