//= require services/validate_form_service

ready(function(){
  //REVER CONTROLLER (REGISTRATIONS???)
  onlyInView("registrations", ["new", "edit"], function(){



    var initialize = function(){
      validateForm();
    };

    var validateForm = function(){
      var inputName             = document.getElementsByClassName('js-validateName')[0];
      var inputEmail            = document.getElementsByClassName('js-validateEmail')[0];
      var inputCPF              = document.getElementsByClassName('js-validateCPF')[0];
      var inputPhone            = document.getElementsByClassName('js-validatePhone')[0];
      var inputDate             = document.getElementsByClassName('js-validateDate')[0];
      var radioGenre            = document.getElementsByClassName('js-validateGenre')[0];
      var checkTerms            = document.getElementsByClassName('js-validateTerms')[0];
      var inputDateLastDonation = document.getElementsByClassName('js-validateDateLastDonation')[0];
      var buttonRegister        = document.getElementsByClassName('js-validateForm')[0];

      buttonRegister.addEventListener('click', function(event){
        validateFormDonators.validateName('js-validateName');
        validateFormDonators.validateEmail('js-validateEmail');
        validateFormDonators.validatePhone('js-validatePhone');
        validateFormDonators.validateCPF('js-validateCPF');
        validateFormDonators.validateDate('js-validateDate');
        validateFormDonators.validateDateLastDonation('js-validateDateLastDonation');
        validateFormDonators.validateTerms('js-validateTerms');
        validateFormDonators.validateGenre('js-validateGenre');
        event.preventDefault();
      })

      inputName.addEventListener('focusout', function(){
        validateFormDonators.validateName('js-validateName');
      })

      inputEmail.addEventListener('keyup', function(){
        validateFormDonators.validateEmail('js-validateEmail');
      })

      inputCPF.addEventListener('keyup', function(){
        validateFormDonators.validateCPF('js-validateCPF');
      })

      inputPhone.addEventListener('keyup', function(){
        validateFormDonators.validatePhone('js-validatePhone');
      })

      inputDate.addEventListener('keyup', function(){
        validateFormDonators.validateDate('js-validateDate');
      })

      inputDateLastDonation.addEventListener('keyup', function(){
        validateFormDonators.validateDateLastDonation('js-validateDateLastDonation');
      })

      radioGenre.addEventListener('onclick', function(){
        validateFormDonators.validateGenre('js-validateGenre');
      })

      checkTerms.addEventListener('checked', function(){
        validateFormDonators.validateTerms('js-validateTerms');
      })

    };

    initialize();

  })

})
