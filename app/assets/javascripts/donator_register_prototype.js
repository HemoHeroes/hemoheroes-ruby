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
    validateFormService.validateName('.js-validateNameDonator', 'focusout');
    validateFormService.validateTerms('.js-validateTermsDonator', 'click');
    validateFormService.validateEmail('.js-validateEmailDonator', 'focusout');
    //validateFormService.validatePassword('.js-validatePassword','.js-validatePasswordConfirmation','keyup');
  };

  initialize();

  // });

});
