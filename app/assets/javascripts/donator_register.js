//= require services/validate_form_service

ready(function(){
  onlyInView("donators", ["new", "edit"], function(){



    var initialize = function(){
      validateForm();
    };

    var validateForm = function(){
      var inputName      = document.getElementsByClassName('js-validateName')[0];
      var inputEmail     = document.getElementsByClassName('js-validateEmail')[0];
      var inputCPF       = document.getElementsByClassName('js-validateCPF')[0];
      var inputPhone     = document.getElementsByClassName('js-validatePhone')[0];
      var inputDate      = document.getElementsByClassName('js-validateDate')[0];
      var inputDateLastDonation = document.getElementsByClassName('js-validateDateLastDonation')[0];
      var buttonRegister = document.getElementsByClassName('js-validateForm')[0];

      buttonRegister.addEventListener('click', function(event){
        validateFormService.validateName('js-validateName');
        validateFormService.validateEmail('js-validateEmail');
        validateFormService.validatePhone('js-validatePhone');
        validateFormService.validateCPF('js-validateCPF');
        validateFormService.validateDate('js-validateDate');
        validateFormService.validateDateLastDonation('js-validateDateLastDonation');
        event.preventDefault();
      })

      inputName.addEventListener('focusout', function(){
        validateFormService.validateName('js-validateName');
      })

      inputEmail.addEventListener('keyup', function(){
        validateFormService.validateEmail('js-validateEmail');
      })

      inputCPF.addEventListener('keyup', function(){
        validateFormService.validateCPF('js-validateCPF');
      })

      inputPhone.addEventListener('keyup', function(){
        validateFormService.validatePhone('js-validatePhone');
      })

      inputDate.addEventListener('keyup', function(){
        validateFormService.validateDate('js-validateDate');
      })

      inputDateLastDonation.addEventListener('keyup', function(){
        validateFormService.validateDateLastDonation('js-validateDateLastDonation');
      })


    };


    initialize();

  })

})
