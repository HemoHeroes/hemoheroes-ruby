//= require services/validate_form_donator

ready(function(){
  // onlyInView("registrations", ["new", "edit"], function(){

    var initialize = function(){
      buttonValidFormDonator();
      validateFormDonator();
    };

    var buttonValidFormDonator = function(){
      var buttonRegister = document.getElementsByClassName('js-validateButton')[0];
      buttonRegister.classList.add('is-disabled');
      //buttonRegister.classList.add('is-actived');
    }

    var validateFormDonator = function(){
      validateFormDonators.validateName('js-validateName', 'keyup');
      validateFormDonators.validateEmail('js-validateEmail', 'keyup');
      validateFormDonators.validatePhone('js-validatePhone', 'keyup');
      validateFormDonators.validateCPF('js-validateCPF', 'keyup');
      validateFormDonators.validateTerms('js-validateTerms', 'click');
    };


    initialize();

  });

// });
