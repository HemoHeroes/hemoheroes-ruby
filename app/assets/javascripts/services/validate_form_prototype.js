var validateFormDonators_prototype = (function(){

  var validFormDonator_prototype = [];
  validFormDonator_prototype[0] = false;
  validFormDonator_prototype[1] = false;
  validFormDonator_prototype[2] = false;
  validFormDonator_prototype[3] = false;
  validFormDonator_prototype[4] = false;

  var invalidInput = false;

  var buttonValidFormDonator_prototype = function(){
    invalidInput = false;
    for(var i = 0; i < validFormDonator_prototype.length; i++){
      if(validFormDonator_prototype[i]==false){
        invalidInput = true;
      }
    }

    if(!invalidInput){
      var buttonRegister = document.querySelector('.js-validateForm');
      buttonRegister.classList.remove('is-disabled');
      buttonRegister.classList.add('is-actived');
    }else{
      var buttonRegister = document.querySelector('.js-validateForm');
      buttonRegister.classList.remove('is-actived');
      buttonRegister.classList.add('is-disabled');
    }
  }

  return {

    removeMask: function(selector, action){
      var button = document.getElementsByClassName(selector)[0];
       button.addEventListener(action, function(){
        var valueCPF = document.getElementsByClassName('js-validateCPF')[0].value;
        valueCPF= valueCPF.replace(".", "");
        valueCPF = valueCPF.replace(".", "");
        valueCPF = valueCPF.replace("-", "");
        valueCPF = valueCPF.replace("/", "");
        document.getElementsByClassName('js-validateCPF')[0].value = valueCPF;
      });
    },

    validateName: function(selector, action){
      var valueName = document.querySelector(selector);
      valueName.addEventListener(action, function(){
        document.getElementById('errorName').style.display = "";
        if (valueName.value == "") {
          document.getElementById('errorName').style.display = "Campo obrigatório!";
          validFormDonator_prototype[0] = false;
          buttonValidFormDonator_prototype();
          return false;
        }
        else {
          console.log("sssssssssss");
          validFormDonator_prototype[0] = true;
          buttonValidFormDonator_prototype();
          document.getElementById('errorName').style.display = "none";
        }
      });
    },



    validateEmail: function(selector, action){
      var valueEmail = document.querySelector(selector);

      valueEmail.addEventListener(action, function(){

        var regexEmailValidate = /^([a-zA-Z0-9_\-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        var emailValidate = regexEmailValidate.test(valueEmail.value);
        document.getElementById('errorEmail').style.display = "";

        if (!emailValidate) {
          document.getElementById('errorEmail').innerHTML = "e-mail inválido!";
          validFormDonator_prototype[1] = false;
          buttonValidFormDonator_prototype();
          return false;
        }
        if(valueEmail.value == ""){
          document.getElementById('errorEmail').innerHTML = "Campo obrigatório!";
          validFormDonator_prototype[1] = false;
          buttonValidFormDonator_prototype();
          return false;
        }else if (emailValidate){
          document.getElementById('errorEmail').style.display = "none";
          validFormDonator_prototype[1] = true;
          buttonValidFormDonator_prototype();
        }
      });
    },

    validateTerms: function(selector, action){
      var valueTerms = document.querySelector(selector);
      valueTerms.addEventListener(action, function(){
        document.getElementById('errorTerms').style.display = "";
        if(valueTerms.checked == true) {
          document.getElementById('errorTerms').style.display = "none";
          validFormDonator_prototype[2] = true;
          buttonValidFormDonator_prototype();
        }
        else {
          document.getElementById('errorTerms').innerHTML = "Você deve aceitar os termos de uso!";
          validFormDonator_prototype[2] = false;
          buttonValidFormDonator_prototype();
          return false;
        }
      });
    },

    validatePassword: function(selector, selectorConfirmation, action ){
      var valuePassword = document.querySelector(selector);
      var valuePasswordConfirmation = document.querySelector(selectorConfirmation);

      var testPasswordEquals = function(password, confirmPassword) {
        if(password != confirmPassword){
          document.getElementById('errorPasswordConfirmation').innerHTML = "Senhas não correspondem!";
          validFormDonator_prototype[3] = false;
          buttonValidFormDonator_prototype();
        }else{
          document.getElementById('errorPasswordConfirmation').style.display = "none";
          validFormDonator_prototype[3] = true;
          buttonValidFormDonator_prototype();
        }
      };

      valuePassword.addEventListener(action, function(){
        document.getElementById('errorPassword').style.display = "";
        if(valuePassword.value.length > 0 && valuePassword.value.length < 6){
          document.getElementById('errorPassword').innerHTML = "Senha deve ter no minimo 6 digitos!";
          validFormDonator_prototype[4] = false;
          buttonValidFormDonator_prototype();
          return false;
        }else if(valuePassword.value.length == 0){
          document.getElementById('errorPassword').innerHTML = "Campo obrigatório!";
          validFormDonator_prototype[4] = false;
          buttonValidFormDonator_prototype();
          return false;
        }else{
          document.getElementById('errorPassword').style.display = "none";
          validFormDonator_prototype[6] = true;
          buttonValidFormDonator_prototype();
          testPasswordEquals(valuePasswordConfirmation.value, valuePassword.value);
        }
      });

      valuePasswordConfirmation.addEventListener(action, function(){
        document.getElementById('errorPasswordConfirmation').style.display = "";
        if(valuePasswordConfirmation.value.length >= 0){
          testPasswordEquals(valuePasswordConfirmation.value, valuePassword.value);
        }
      });

    }



  } // return

})()
