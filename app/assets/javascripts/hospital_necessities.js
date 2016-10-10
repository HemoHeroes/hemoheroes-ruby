//= require services/validate_form_service

ready(function(){
  var hospitalNecessityPage = (function(){

    var initialize = function(){
      validateForm();
    };

    var validateForm = function(){
      var inputNumber = document.getElementsByClassName('js-necessity_input')[0];

      inputNumber.addEventListener('onchange', function(){
        validateFormService.validatePositiveNumber(inputNumber);
      })

    };

    var animateModal = function(){

    }

    initialize();

  })()
})
