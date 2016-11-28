//= require services/validate_form_service

ready(function(){
  onlyInView("registrations", ["new", "edit"], "blood-donator", function(){
    var initialize = function(){
      buttonValidForm();
      validateFormDonator();
    };

    var buttonValidForm = function(){
      var buttonRegisterDonator = document.querySelector('.js-validateButtonDonator');
      buttonRegisterDonator.classList.add('is-disabled');
    };

    var validateFormDonator = function(){
      validateFormService.validateName('.js-validateName', 'focusout');
      validateFormService.validateCPF('.js-validateCPF', 'keyup');
      validateFormService.validateEmail('.js-validateEmail', 'focusout');
      validateFormService.validatePhone('.js-validatePhone', 'keyup');
      validateFormService.validateTerms('.js-validateTerms','click');
      validateFormService.removeMask('.js-validateButtonDonator','.js-validateCPF','click');
      validateFormService.validatePassword('.js-validatePassword','.js-validatePasswordConfirmation','keyup');
    };


    initialize();

  });

});
