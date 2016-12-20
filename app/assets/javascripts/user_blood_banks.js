//= require services/validate_form_service

ready(function(){
  onlyInView("registrations", ["new"],"blood-bank", function(){
    var initialize = function(){
      buttonValidForm();
      validateFormBank();
    };

    var buttonValidForm = function(){
      var buttonRegisterBank = document.querySelector('.js-validateButtonBank');
      buttonRegisterBank.classList.add('is-disabled');
    };

    var validateFormBank = function(){
      validateFormService.validateName('.js-validateName','blur');
      validateFormService.validateEmail('.js-validateEmail','blur');
      validateFormService.validateCNPJ('.js-validateCNPJ','blur');
      validateFormService.validateAddress('.js-validateAddress','blur');
      validateFormService.validatePhone('.js-validatePhone','blur');
      validateFormService.removeMask('.js-validateButtonBank','.js-validateCNPJ','click');
      validateFormService.validatePassword('.js-validatePassword','.js-validatePasswordConfirmation','keyup');
    };

    initialize();

  })
});
