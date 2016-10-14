//= require services/validate_form_service

ready(function(){

  var initialize = function(){
    validateForm();
  };

  var validateForm = function(){
    onlyInView("user_blood_banks", ["new", "edit"], function(){
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

      var vetor;

      buttonRegister.addEventListener('click', function(event){
        vetor[0] =  validateFormService.validateName('js-validateName');
        vetor[1] =  validateFormService.validateEmail('js-validateEmail');
        vetor[2] = validateFormService.validateCNPJ('js-validateCNPJ');
        vetor[3] = validateFormService.validateCEP('js-validateCEP');
        vetor[4] = validateFormService.validateDistrict('js-validateDistrict');
        vetor[5] =  validateFormService.validateStreet('js-validateStreet');
        vetor[6] =validateFormService.validateNumber('js-validateNumber');
        vetor[7] =  validateFormService.validateCity('js-validateCity');
        vetor[8] =validateFormService.validateState('js-validateState');

        for(var i=0; i<vetor.lenght;i++ ){
          if(vetor[i]==false){
            event.preventDefault();
          }
        }

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
    });
  };

  initialize();

})
