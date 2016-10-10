//= require services/validate_form_service

ready(function(){
  var hospitalRegisterPage = (function(){

    var initialize = function(){
      validateForm();
    };

    var validateForm = function(){
      validateFormService.validateName('js-validateName');
    };

    var animateModal = function(){

    }

    initialize();

  })()
})
