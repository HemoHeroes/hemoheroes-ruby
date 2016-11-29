ready(function(){

  var initialize = function(){
    buttonValidSimpleFormDonator();
    validateSimpleFormDonator();
  };

  var buttonValidSimpleFormDonator = function(){
    var buttonRegisterSimpleDonator = document.querySelector('.js-validateButtonSimpleDonator');
    buttonRegisterSimpleDonator.classList.add('is-disabled');
  };

  var validateSimpleFormDonator = function(){
    validateFormService.validateName('.js-validateNameDonator', 'blur');
    validateFormService.validateTerms('.js-validateTermsDonator', 'click');
    validateFormService.validateEmail('.js-validateEmailDonator', 'blur');
  };

  initialize();

});
