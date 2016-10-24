var validateFormService = (function(){

  var validFormBank = [];
  validFormBank[0] = false;
  validFormBank[1] = false;
  validFormBank[2] = false;
  validFormBank[3] = false;
  validFormBank[4] = false;
  validFormBank[5] = false;
  validFormBank[6] = false;
  validFormBank[7] = false;

  var validFormDonator = [];
  validFormDonator[0] = false;
  validFormDonator[1] = false;
  validFormDonator[2] = false;
  validFormDonator[3] = false;
  validFormDonator[4] = false;
  validFormDonator[5] = false;
  validFormDonator[6] = false;


  var buttonValidFormBank = function(selector){
    if(elementExist(selector)){
      return false;
    }
    var invalidButtonBank = false;
    for(var i = 0; i < validFormBank.length; i++){
      if(validFormBank[i]==false){
        invalidButtonBank = true;
      }
    }
    var buttonRegisterBank = document.querySelector('.js-validateButtonBank');
    if(buttonRegisterBank!= null){
      if(!invalidButtonBank){
        buttonRegisterBank.classList.remove('is-disabled');
        buttonRegisterBank.classList.add('is-actived');

      }else{
        buttonRegisterBank.classList.remove('is-actived');
        buttonRegisterBank.classList.add('is-disabled');
      }
    }
  };


  var buttonValidFormDonator = function(selector){
    if(elementExist(selector)) return false
    var invalidButtonDonator = false;
    for(var i = 0; i < validFormDonator.length; i++){
      if(validFormDonator[i] == false){
        invalidButtonDonator = true;
      }
    }

    var buttonRegisterDonator = document.querySelector('.js-validateButtonDonator');
    if(buttonRegisterDonator!= null){
      if(!invalidButtonDonator){
        buttonRegisterDonator.classList.remove('is-disabled');
        buttonRegisterDonator.classList.add('is-actived');
      }else{
        buttonRegisterDonator.classList.remove('is-actived');
        buttonRegisterDonator.classList.add('is-disabled');
      }
    }
  };


  var elementExist = function(selector){
    if(typeof selector == "string"){
      var element = document.querySelector(selector);
    } else if (typeof selector == "object") {
      var element = selector;
    }
    if (element == null) {
      return false;
    } else {
      return true;
    }
  };
  return {

    removeMask: function(button, selector, action){
      var button = document.querySelector(button);
      button.addEventListener(action, function(){
        var valueCNPJ = document.querySelector(selector).value;
        valueCNPJ = valueCNPJ.replace(".", "");
        valueCNPJ = valueCNPJ.replace(".", "");
        valueCNPJ = valueCNPJ.replace("-", "");
        valueCNPJ = valueCNPJ.replace("/", "");
        document.querySelector(selector).value = valueCNPJ;
      });
    },


    validateName: function(selector, action){
      var inputName = document.querySelector(selector);
      inputName.addEventListener(action, function(){
        document.getElementById('errorName').style.display = "";
        if (inputName.value) {
          document.getElementById('errorName').style.display = "none";
          validFormDonator[0] = true;
          validFormBank[0] = true;
          buttonValidFormBank('.js-validateButtonBank');
          buttonValidFormDonator();
        } else {
          validFormDonator[0] = false;
          validFormBank[0] = false;
          buttonValidFormBank();
          buttonValidFormDonator();
          return false;
        }
      });
    },


    validateCNPJ: function(selector, action){
      if(elementExist(selector)){
        var inputCNPJ = document.querySelector(selector);
        inputCNPJ.addEventListener(action, function(){
          VMasker(inputCNPJ).maskPattern("99.999.999/9999-99");
          document.getElementById('errorCNPJ').style.display = "";
          if(inputCNPJ.value == ""){
            document.getElementById('errorCNPJ').innerHTML = "Campo obrigatório!";
            validFormBank[1] = false;
            buttonValidFormBank();
            return false;
          }else if (inputCNPJ.value.length<18) {
            document.getElementById('errorCNPJ').innerHTML = "CNPJ inválido!";
            validFormBank[1] = false;
            buttonValidFormBank();
            return false;
          }else{
            document.getElementById('errorCNPJ').style.display = "none";
            validFormBank[1] = true;
            buttonValidFormBank();
          }
        });
      }
    },


    validatePhone: function(selector, action){
      var inputPhone = document.querySelector(selector);
      inputPhone.addEventListener(action, function(){
        VMasker(inputPhone).maskPattern("(99)9999-9999");
        document.getElementById('errorPhone').style.display = "";
        if(inputPhone.value == ""){
          document.getElementById('errorPhone').innerHTML = "Campo obrigatório!";
          validFormDonator[1] = false;
          validFormBank[2] = false;
          buttonValidFormBank();
          buttonValidFormDonator();
        }else if (inputPhone.value.length<13) {
          document.getElementById('errorPhone').innerHTML = "Telefone inválido!";
          validFormDonator[1] = false;
          validFormBank[2] = false;
          buttonValidFormBank();
          buttonValidFormDonator();

        }else{
          document.getElementById('errorPhone').style.display = "none";
          validFormDonator[1] = true;
          validFormBank[2] = true;
          buttonValidFormBank();
          buttonValidFormDonator();
        }
      });
    },


    validateEmail: function(selector, action){
      var inputEmail = document.querySelector(selector);
      inputEmail.addEventListener(action, function(){
        document.getElementById('errorEmail').style.display = "";
        var regexEmailValidate = /^([a-zA-Z0-9_\-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        var emailValidate = regexEmailValidate.test(inputEmail.value.trim());
        document.getElementById('errorEmail').style.display = "";
        if (inputEmail.value == "") {
          document.getElementById('errorEmail').innerHTML = "Campo obrigatório!";
          validFormDonator[2] = false;
          validFormBank[3] = false;
          buttonValidFormBank();
          buttonValidFormDonator();
        }
        if(!emailValidate && inputEmail.value != ""){
          document.getElementById('errorEmail').innerHTML = "e-mail inválido!";
          validFormDonator[2] = false;
          validFormBank[3] = false;
          buttonValidFormBank();
          buttonValidFormDonator();
        }else if(emailValidate){
          document.getElementById('errorEmail').style.display = "none";
          validFormDonator[2] = true;
          validFormBank[3] = true;
          buttonValidFormBank();
          buttonValidFormDonator();
        }
      });
    },


    validateAddress: function(selector, action){
      var inputAddress = document.querySelector(selector);
      if (elementExist(inputAddress) == false){
        return;
      }
      inputAddress.addEventListener(action, function(){
        if (inputAddress.value == "") {
          document.getElementById('errorAddress').style.display = "";
          validFormBank[4] = false;
          buttonValidFormBank();
        }else{
          document.getElementById('errorAddress').style.display = "none";
          validFormBank[4] = true;
          buttonValidFormBank();
        }
      });
    },

    validateExtension: function(selector, action){
      var inputExtension = document.querySelector(selector);
      if (elementExist(inputExtension) == false){
        return;
      }
      inputExtension.addEventListener(action, function(){
        VMasker(inputExtension).maskPattern("9999");
        if (inputExtension.value == "") {
          document.getElementById('errorExtension').style.display = "";
          validFormBank[5] = false;
          buttonValidFormBank();
        }else{
          document.getElementById('errorExtension').style.display = "none";
          validFormBank[5] = true;
          buttonValidFormBank();
        }
      });
    },

    validatePassword: function(selector, selectorConfirmation, action ){
      var valuePassword = document.querySelector(selector);
      var valuePasswordConfirmation = document.querySelector(selectorConfirmation);

      var testPasswordEquals = function(password, confirmPassword) {
        if(password != confirmPassword){
          document.getElementById('errorPasswordConfirmation').innerHTML = "Senhas não correspondem!";
          validFormDonator[3] = false;
          validFormBank[6] = false;
          buttonValidFormBank();
          buttonValidFormDonator();
        }else{
          document.getElementById('errorPasswordConfirmation').style.display = "none";
          validFormDonator[3] = true;
          validFormBank[6] = true;
          buttonValidFormBank();
          buttonValidFormDonator();
        }
      };

      valuePassword.addEventListener(action, function(){
        document.getElementById('errorPassword').style.display = "";
        if(valuePassword.value.length > 0 && valuePassword.value.length < 6){
          document.getElementById('errorPassword').innerHTML = "Senha deve ter no minimo 6 digitos!";
          validFormDonator[4] = false;
          validFormBank[7] = false;
          buttonValidFormBank();
          buttonValidFormDonator();
          return false;
        }else if(valuePassword.value.length == 0){
          document.getElementById('errorPassword').innerHTML = "Campo obrigatório!";
          validFormDonator[4] = false;
          validFormBank[7] = false;
          buttonValidFormBank();
          buttonValidFormDonator();
          return false;
        }else{
          document.getElementById('errorPassword').style.display = "none";
          validFormDonator[4] = true;
          validFormBank[7] = true;
          buttonValidFormBank();
          buttonValidFormDonator();
          testPasswordEquals(valuePasswordConfirmation.value, valuePassword.value);
        }
      });

      valuePasswordConfirmation.addEventListener(action, function(){
        document.getElementById('errorPasswordConfirmation').style.display = "";
        if(valuePasswordConfirmation.value.length >= 0){
          testPasswordEquals(valuePasswordConfirmation.value, valuePassword.value);
        }
      });

    },

    validateCPF: function(selector, action){
      var valueCPF = document.querySelector(selector);
      valueCPF.addEventListener(action, function(){

        VMasker(valueCPF).maskPattern("999.999.999-99");
        document.getElementById('errorCPF').style.display = "";
        if(valueCPF.value == ""){
          document.getElementById('errorCPF').innerHTML = "Campo obrigatório!";
          validFormDonator[5] = false;

          buttonValidFormDonator();
          return false;
        }else if (valueCPF.value.length<14) {
          document.getElementById('errorCPF').innerHTML = "CPF inválido!";
          validFormDonator[5] = false;
          buttonValidFormDonator();
          return false;
        }else{
          document.getElementById('errorCPF').style.display = "none";
          validFormDonator[5] = true;
          buttonValidFormDonator();
        }
      });
    },

    validateTerms: function(selector, action){
      var valueTerms = document.querySelector(selector);
      valueTerms.addEventListener(action, function(){
        document.getElementById('errorTerms').style.display = "";
        if(valueTerms.checked == true) {
          document.getElementById('errorTerms').style.display = "none";
          validFormDonator[6] = true;
          buttonValidFormDonator();
        }
        else {
          document.getElementById('errorTerms').innerHTML = "Você deve aceitar os termos de uso!";
          validFormDonator[6] = false;
          buttonValidFormDonator();
          return false;
        }
      });
    },

    validatePositiveNumber: function(){
      var inputNumber = document.getElementsByClassName('js-necessityInput');
      for(var i = 0; i < 8; i++){
        if(inputNumber[i].value < 0){
          alert("Por favor, utilize apenas números maiores que 0!");
          inputNumber[i].value = null;
        }
      }
    },

    validateEmptyInput: function(){
      var inputNumber = document.getElementsByClassName('js-necessityInput');
      var button = document.getElementsByClassName("js-nextButton")[0];
      for(var i = 0; i < 8; i++){
        if(inputNumber[i].value != 0){
          button.classList.add('is-actived');
          button.classList.remove('is-disabled');
          return true;
        }
      }
      button.classList.add('is-disabled');
      button.classList.remove('is-actived');
      return false;
    },

    activeButton: function(){
      toggleValidateButton(true);
    },

    disableButton: function(){
      toggleValidateButton(false);
    }


  }

})()
