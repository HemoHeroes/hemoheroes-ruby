//= require services/validate_form_service

ready(function(){
  var hospitalRegisterPage = (function(){
    
    var initialize = function(){
      validateForm();
      validateNecessity();
    };

    var validateForm = function(){
      validateFormService.validateName('js-validateName');
    };

    var validateNecessity = function(){
      validateFormService.validateNecessity('js-validateNecessity');
    };

    var animateModal = function(){

    }

    initialize();

  })()
})
