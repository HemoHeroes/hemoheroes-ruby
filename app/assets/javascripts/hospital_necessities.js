// = require services/validate_form_service

ready(function(){

  onlyInView("demand_blood_banks", ["new", "edit"], function(){
    var initialize = function(){
      validateForm();
      confirmRequest();
    };


    var validateForm = function(){
      var allInputNumbers = document.getElementsByClassName('js-necessityInput');

      for(var i = 0; i < allInputNumbers.length; i++){
        var inputNumber = allInputNumbers[i];
        inputNumber.addEventListener("keyup", function(){
          validateFormService.validatePositiveNumber();
          validateFormService.validateEmptyInput();
        })
        inputNumber.addEventListener("click", function(){
          validateFormService.validatePositiveNumber();
          validateFormService.validateEmptyInput();
        })
      }
    };


    var confirmRequest = function(){
      var confirmRequestButton = document.getElementsByClassName('js-nextButton')[0];
      confirmRequestButton.addEventListener("click", function(){
        var inputsToConfirm = document.getElementsByClassName('js-confirmRequest');
        var valuesOfConfirmInput = {};

        for(var counter = 0, inputsToConfirmlength = inputsToConfirm.length; counter < inputsToConfirmlength; counter++) {
          var dataTypeAttribute = inputsToConfirm[counter].getAttribute('data-type');
          valuesOfConfirmInput[dataTypeAttribute] = inputsToConfirm[counter].value;
        }
        

        var confirmRequestList = document.getElementsByClassName('js-confirmRequestList')[0];

        Object.keys(valuesOfConfirmInput).forEach(function(key){

          if(valuesOfConfirmInput[key] != "") {
            console.log(valuesOfConfirmInput[key]);
            var liTag = document.createElement("li");
            var requestText = document.createTextNode(valuesOfConfirmInput[key] + " Doador(es) do tipo " + key);

            confirmRequestList.appendChild(liTag);
            liTag.appendChild(requestText);
          }
        });
      });
    };
    initialize();
  })
})
