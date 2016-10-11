//= require services/validate_form_service

ready(function(){



  var initialize = function(){
    validateForm();
  };

  var validateForm = function(){
    onlyInActions(["new", "edit"], function(){
      var inputName      = document.getElementsByClassName('js-validateName')[0];
      var inputEmail     = document.getElementsByClassName('js-validateEmail')[0];
      var inputCNPJ      = document.getElementsByClassName('js-validateCNPJ')[0];
      var inputCEP       = document.getElementsByClassName('js-validateCEP')[0];
      var inputDistrict  = document.getElementsByClassName('js-validateDistrict')[0];
      var inputStreet    = document.getElementsByClassName('js-validateStreet')[0];
      var inputCity      = document.getElementsByClassName('js-validateCity')[0];
      var inputNumber    = document.getElementsByClassName('js-validateNumber')[0];
      var inputState     = document.getElementsByClassName('js-validateState')[0];
      var buttonRegister = document.getElementsByClassName('js-validateForm')[0];

      buttonRegister.addEventListener('click', function(event){
        validateFormService.validateName('js-validateName');
        validateFormService.validateEmail('js-validateEmail');
        validateFormService.validateCNPJ('js-validateCNPJ');
        validateFormService.validateCEP('js-validateCEP');
        validateFormService.validateDistrict('js-validateDistrict');
        validateFormService.validateStreet('js-validateStreet');
        validateFormService.validateNumber('js-validateNumber');
        validateFormService.validateCity('js-validateCity');
        validateFormService.validateState('js-validateState');
        event.preventDefault();
      })

      inputName.addEventListener('keyup', function(){
        validateFormService.validateName('js-validateName');
      })

      inputEmail.addEventListener('keyup', function(){
        validateFormService.validateEmail('js-validateEmail');
      })

      inputCNPJ.addEventListener('keyup', function(){
        validateFormService.validateCNPJ('js-validateCNPJ');
      })

      inputCEP.addEventListener('keyup', function(){
        validateFormService.validateCEP('js-validateCEP');
      })

      inputDistrict.addEventListener('keyup', function(){
        validateFormService.validateDistrict('js-validateDistrict');
      })

      inputStreet.addEventListener('keyup', function(){
        validateFormService.validateStreet('js-validateStreet');
      })

      inputNumber.addEventListener('keyup', function(){
        validateFormService.validateNumber('js-validateNumber');
      })

      inputCity.addEventListener('keyup', function(){
        validateFormService.validateCity('js-validateCity');
      })

      inputState.addEventListener('keyup', function(){
        validateFormService.validateState('js-validateState');
      })
    })
  };





  var animateModal = function(){

  }

  initialize();


})
