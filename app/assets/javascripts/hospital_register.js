//= require services/validate_form_service

ready(function(){
  var hospitalRegisterPage = (function(){

    var initialize = function(){
      validateForm();
    };

    var validateForm = function(){
      var inputName = document.getElementsByClassName('js-validateName')[0];

      inputName.addEventListener('onchange', function(){
        validateFormService.validateName('js-validateName');
      })

    };

    var animateModal = function(){

    }

    initialize();

  })()
})
