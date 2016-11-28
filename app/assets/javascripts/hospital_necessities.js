// = require services/validate_form_service

ready(function(){
  onlyInView("demand_blood_banks", ["new", "edit"],null, function(){
    var initialize = function(){
      validateFormBank();
      confirmRequest();
      clearRequest();
    };

    var validateFormBank = function(){
      var allInputNumbers = document.getElementsByClassName('js-necessityInput');

      var validateOnAction = function() {
        validateFormService.validatePositiveNumber();
        validateFormService.validateEmptyInput();
        validateFormService.validateMaxNumber();
      };

      for(var i = 0; i < allInputNumbers.length; i++){
        var inputNumber = allInputNumbers[i];
        inputNumber.addEventListener("focusout", validateOnAction);
        inputNumber.addEventListener("click", validateOnAction);
      }
    };

    var confirmRequest = function(){
      var confirmRequestButton = document.querySelector('.js-nextButton');
      confirmRequestButton.addEventListener("click", function(){
        var inputsToConfirm = document.getElementsByClassName('js-confirmRequest');
        var valuesOfConfirmInput = {};
        for(var counter = 0, inputsToConfirmlength = inputsToConfirm.length; counter < inputsToConfirmlength; counter++) {
          var dataTypeAttribute = inputsToConfirm[counter].getAttribute('data-type');
          valuesOfConfirmInput[dataTypeAttribute] = inputsToConfirm[counter].value;
        }

        var confirmRequestList = document.querySelector('.js-confirmRequestList');
        Object.keys(valuesOfConfirmInput).forEach(function(key){
          if(valuesOfConfirmInput[key] !== "" && valuesOfConfirmInput[key]!==0) {
            var liTag = document.createElement("li");
            var requestText = document.createTextNode(valuesOfConfirmInput[key] + " do tipo " + key);
            confirmRequestList.appendChild(liTag);
            liTag.appendChild(requestText);
          }
        });
      });
    };


    var clearRequest = function(){
      var cancelRequestButtons = document.querySelectorAll('.js-modalButton');
      addEventListenerToArray(cancelRequestButtons, "click", function(){
        var clearRequestList = document.querySelector('.js-confirmRequestList');
        clearRequestList.innerHTML = "";
        Modal.close(".js-modalConfirmRequest");
      });
    };

    initialize();

  });
});
