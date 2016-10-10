//= require services/validate_form_service

ready(function(){
  var hospitalNecessityPage = (function(){

    var initialize = function(){
      validateForm();
    };

    var validateForm = function(){

      debugger
      var inputNumber = document.getElementsByClassName('js-necessityInput')[0];

      inputNumber.addEventListener("focusout", function(){
        for(var i = 0; i < 8; i++){
          validateFormService.validatePositiveNumber(document.getElementsByClassName('js-necessityInput')[i]);
        }
      })

    };

    var animateModal = function(){

    }

    initialize();

  })()
})
