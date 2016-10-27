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
    }

    var validateFormBank = function(){
      validateFormService.validateName('.js-validateName','focusout');
      validateFormService.validateEmail('.js-validateEmail','focusout');
      validateFormService.validateCNPJ('.js-validateCNPJ','keyup');
      validateFormService.validateAddress('.js-validateAddress','focusout');
      validateFormService.validatePhone('.js-validatePhone','keyup');
      validateFormService.removeMask('.js-validateButtonBank','.js-validateCNPJ','click');
      validateFormService.validatePassword('.js-validatePassword','.js-validatePasswordConfirmation','keyup');
    };

    initialize();

  })
});
