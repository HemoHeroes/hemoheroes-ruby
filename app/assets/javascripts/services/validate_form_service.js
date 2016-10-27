var validateFormService = (function(){

  var validFormBank = [];
  for(var i = 0; i<=7;i++){
    validFormBank[i] = false;
  }

  var validFormDonator = [];
  for(var i = 0; i<=6;i++){
    validFormDonator[i] = false;
  }

  var buttonValidFormBank = function(selector){
    console.log("buttonvalidformBank2");
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
        console.log("botaofodaaaa");
        buttonRegisterBank.classList.remove('is-disabled');
        buttonRegisterBank.classList.add('is-actived');

      }else{
        console.log("botaaovalcilao");
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
  var validateInputForms = function(indiceDonator, indiceBank, status){
    validFormDonator[indiceDonator] = status;
    validFormBank[indiceBank] = status;
    buttonValidFormBank();
    buttonValidFormDonator();
  };

  var validateSingleInputForm = function(type, indice, status){
    if(type=="bank"){
      validFormBank[indice] = status;
      buttonValidFormBank();
    }else if(type=="donator"){
      validFormDonator[indice] = status;
      buttonValidFormDonator();
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
      var errorName = document.getElementById('errorName');
      inputName.addEventListener(action, function(){
        var regexNameValidate = /^[a-zA-Z\s]*$/;
        var nameValidate = regexNameValidate.test(inputName.value.trim());
        errorName.style.display = "";
        if (inputName.value && nameValidate) {
          errorName.style.display = "none";
          validateInputForms(0,0,true);
        } else {
          validateInputForms(0,0,false);
          return false;
        }
      });
    },


    validateCNPJ: function(selector, action){
      if(elementExist(selector)){
        var inputCNPJ = document.querySelector(selector);
        var errorCNPJ = document.getElementById('errorCNPJ')
        inputCNPJ.addEventListener(action, function(){
          VMasker(inputCNPJ).maskPattern("99.999.999/9999-99");
          errorCNPJ.style.display = "";
          if(inputCNPJ.value == ""){
            errorCNPJ.innerHTML = "Campo obrigatório!";
            validateSingleInputForm("bank",1, false);
            return false;
          }else if (inputCNPJ.value.length<18) {
            errorCNPJ.innerHTML = "CNPJ inválido!";
            validateSingleInputForm("bank",1, false);
            return false;
          }else{
            errorCNPJ.style.display = "none";
            validateSingleInputForm("bank",1, true);
          }
        });
      }
    },


    validatePhone: function(selector, action){
      var inputPhone = document.querySelector(selector);
      var errorPhone = document.getElementById('errorPhone');
      inputPhone.addEventListener(action, function(){
        VMasker(inputPhone).maskPattern("(99)9999-9999");
        errorPhone.style.display = "";
        if(inputPhone.value == ""){
          errorPhone.innerHTML = "Campo obrigatório!";
          validateInputForms(1,2, false);
        }else if (inputPhone.value.length<13) {
          errorPhone.innerHTML = "Telefone inválido!";
          validateInputForms(1,2, false);
        }else{
          errorPhone.style.display = "none";
          validateInputForms(1,2, true);
        }
      });
    },


    validateEmail: function(selector, action){
      var inputEmail = document.querySelector(selector);
      var errorEmail = document.getElementById('errorEmail');
      inputEmail.addEventListener(action, function(){
        document.getElementById('errorEmail').style.display = "";
        var regexEmailValidate = /^([a-zA-Z0-9_\-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        var emailValidate = regexEmailValidate.test(inputEmail.value.trim());
        errorEmail.style.display = "";
        if (inputEmail.value == "") {
          errorEmail.innerHTML = "Campo obrigatório!";
          validateInputForms(2,3, false);
        }
        if(!emailValidate && inputEmail.value != ""){
          errorEmail.innerHTML = "e-mail inválido!";
          validateInputForms(2,3, false);
        }else if(emailValidate){
          errorEmail.style.display = "none";
          validateInputForms(2,3, true);
        }
      });
    },


    validateAddress: function(selector, action){
      var inputAddress = document.querySelector(selector);
      var errorAddress = document.getElementById('errorAddress');
      if (elementExist(inputAddress) == false){
        return;
      }
      inputAddress.addEventListener(action, function(){
        if (inputAddress.value == ""){
          errorAddress.style.display = "";
          validateSingleInputForm("bank", 4, false);
        }else{
          errorAddress.style.display = "none";
          validateSingleInputForm("bank", 4, true);
        }
      });
    },

    validateExtension: function(selector, action){
      var inputExtension = document.querySelector(selector);
      var errorExtension = document.getElementById('errorExtension');
      if (elementExist(inputExtension) == false){
        return;
      }
      inputExtension.addEventListener(action, function(){
        VMasker(inputExtension).maskPattern("9999");
        if (inputExtension.value == "") {
          errorExtension.style.display = "";
          validateSingleInputForm("bank", 5, false);
        }else{
          errorExtension.style.display = "none";
          validateSingleInputForm("bank", 5, true);
        }
      });
    },

    validatePassword: function(selector, selectorConfirmation, action ){
      var valuePassword = document.querySelector(selector);
      var valuePasswordConfirmation = document.querySelector(selectorConfirmation);
      var errorPasswordConfirmation =   document.getElementById('errorPasswordConfirmation');

      var testPasswordEquals = function(password, confirmPassword) {
        if(password != confirmPassword){
          errorPasswordConfirmation.innerHTML = "Senhas não correspondem!";
          validateInputForms(3,6, false);
        }else{
          errorPasswordConfirmation.style.display = "none";
          validateInputForms(3,6, true);
        }
      };

      valuePassword.addEventListener(action, function(){
        var errorPassword = document.getElementById('errorPassword');
        errorPassword.style.display = "";
        if(valuePassword.value.length > 0 && valuePassword.value.length < 6){
          errorPassword.innerHTML = "Senha deve ter no minimo 6 digitos!";
          validateInputForms(4,7, false);
          return false;
        }else if(valuePassword.value.length == 0){
          errorPassword.innerHTML = "Campo obrigatório!";
          validateInputForms(4,7, false);
          return false;
        }else{
          errorPassword.style.display = "none";
          validateInputForms(4,7, true);
          testPasswordEquals(valuePasswordConfirmation.value, valuePassword.value);
        }
      });

      valuePasswordConfirmation.addEventListener(action, function(){
        errorPasswordConfirmation.style.display = "";
        if(valuePasswordConfirmation.value.length >= 0){
          testPasswordEquals(valuePasswordConfirmation.value, valuePassword.value);
        }
      });

    },

    validateCPF: function(selector, action){
      var valueCPF = document.querySelector(selector);
      var errorCPF = document.getElementById('errorCPF');

      valueCPF.addEventListener(action, function(){
        VMasker(valueCPF).maskPattern("999.999.999-99");
        errorCPF.style.display = "";
        if(valueCPF.value == ""){
          errorCPF.innerHTML = "Campo obrigatório!";
          validateSingleInputForm("donator",5, false);
          return false;
        }else if (valueCPF.value.length<14) {
          errorCPF.innerHTML = "CPF inválido!";
          validateSingleInputForm("donator",5, false);
          return false;
        }else{
          errorCPF.style.display = "none";
          validateSingleInputForm("donator",5, true);
        }
      });
    },


    validateTerms: function(selector, action){
      var valueTerms = document.querySelector(selector);
      var errorValueTerms = document.getElementById('errorTerms');

      valueTerms.addEventListener(action, function(){
        errorValueTerms.style.display = "";
        if(valueTerms.checked == true) {
          errorValueTerms.style.display = "none";
          validateSingleInputForm("donator",6, true);
        }
        else {
          errorValueTerms.innerHTML = "Você deve aceitar os termos de uso!";
          validateSingleInputForm("donator",6, false);
          return false;
        }
      });
    },

    validatePositiveNumber: function(){
      var inputNumber = document.getElementsByClassName('js-necessityInput');
      for(var i = 0; i < 8; i++){
        if(inputNumber[i].value==0){
          inputNumber[i].value = null;
        }
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
