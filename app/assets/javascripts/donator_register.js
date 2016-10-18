//= require services/validate_form_donator

ready(function(){
   //onlyInView("registrations", ["new", "edit"], function(){

    var initialize = function(){
      buttonValidFormDonator();
      validateFormDonator();
    };

    var buttonValidFormDonator = function(){
      var buttonRegister = document.querySelector('.js-validateButton');
      buttonRegister.classList.add('is-disabled');
    }

    var validateFormDonator = function(){
      validateFormDonators.validateName('.js-validateName', 'focusout');
      validateFormDonators.validateCPF('.js-validateCPF', 'focusout');
      validateFormDonators.validateEmail('.js-validateEmail', 'focusout');
      validateFormDonators.validatePhone('.js-validatePhone', 'focusout');
      validateFormDonators.validateTerms('.js-validateTerms', 'click');
      validateFormDonators.validatePassword('.js-validatePassword','.js-validatePasswordConfirmation','keyup');
    };


    initialize();

  //});

 });
