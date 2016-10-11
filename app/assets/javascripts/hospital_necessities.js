// = require services/validate_form_service

ready(function(){
  var hospitalNecessityPage = (function(){


    var initialize = function(){
      validateForm();
    };

    var validateForm = function(){

      var allInputNumbers = document.getElementsByClassName('js-necessityInput');
      for(var i = 0; i < 8; i++){
        var inputNumber = allInputNumbers[i];
        inputNumber.addEventListener("focusout", function(){
          validateFormService.validatePositiveNumber();
        })
      }
    };

    function myFunction(i){
      alert(i);
      validateFormService.validatePositiveNumber(i);
    }

    var animateModal = function(){

    }

    initialize();

  })()
})
