//= require services/validate_form_service

ready(function(){

  var initialize = function(){
    buttonValidForm();
    validateForm();
  };

  var buttonValidForm = function(){
    var buttonRegister = document.getElementsByClassName('js-validateForm')[0];
    buttonRegister.classList.add('is-disabled');
  };
  
  var validateForm = function(){
    onlyInView("user_blood_banks", ["new", "edit"], function(){

      validateFormService.validateName('js-validateName','keyup');
      validateFormService.validateEmail('js-validateEmail','keyup');
      validateFormService.validateCNPJ('js-validateCNPJ','keyup');

    })
  };

  initialize();
});
