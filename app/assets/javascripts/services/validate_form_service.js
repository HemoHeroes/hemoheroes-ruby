var validateFormService = (function(){

  var validFormBank = [];
  for(var i = 0; i<=6; i++){
    validFormBank[i] = false;
  }

  var validFormDonator = [];
  for(var i = 0; i<=6; i++){
    validFormDonator[i] = false;
  }

  var validSimpleFormDonator = [];
  for (var i = 0; i<=2; i++){
    validSimpleFormDonator[i] = false;
  }


  var buttonChange = function(state, button){
    if (state == "actived") {
      button.classList.remove('is-disabled');
      button.classList.add('is-actived');
    }else if (state == "disabled") {
      button.classList.remove('is-actived');
      button.classList.add('is-disabled');
    }
  };

  var buttonValidFormBank = function(selector){
    if(elementExist(selector)){
      return false;
    }
    var invalidButtonBank = false;
    for(var i = 0; i < validFormBank.length; i++){
      if(validFormBank[i] == false){
        invalidButtonBank = true;
      }
    }

    var buttonRegisterBank = document.querySelector('.js-validateButtonBank');
    if(buttonRegisterBank != null){
      if(!invalidButtonBank){
        buttonChange("actived", buttonRegisterBank);
        buttonRegisterBank.addEventListener('click', function(){
          Modal.open('.js-modalMessageRegisterBank');
        })
      }else{
        buttonChange("disabled", buttonRegisterBank);
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
    if(buttonRegisterDonator != null){
      if(!invalidButtonDonator){
        buttonChange("actived", buttonRegisterDonator);
      }else{
        buttonChange("disabled", buttonRegisterDonator);
      }
    }
  };

  var buttonValidSimpleFormDonator = function(selector){
    //if(elementExist(selector)) return false;
    var invalidButtonSimpleDonator = false;
    for(var i = 0; i < validSimpleFormDonator.length; i++){
      if(validSimpleFormDonator[i] == false){
        invalidButtonSimpleDonator = true;
      }
    }

    var buttonRegisterSimpleDonator = document.querySelector('.js-validateButtonSimpleDonator');
    if(buttonRegisterSimpleDonator != null){
      if(!invalidButtonSimpleDonator){
        buttonChange("actived", buttonRegisterSimpleDonator);
      }else{
        buttonChange("disabled", buttonRegisterSimpleDonator);
      }
    }
  };


  var validateInputForms = function(indiceSimpleDonator, indiceBank, status){
    validSimpleFormDonator[indiceSimpleDonator] = status;
    validFormBank[indiceBank] = status;
    buttonValidFormBank();
    buttonValidSimpleFormDonator();
  };

  var validateSingleInputForm = function(type, indice, status){
    if(type == "bank"){
      validFormBank[indice] = status;
      buttonValidFormBank();
    }else if(type == "donator"){
      validFormDonator[indice] = status;
      buttonValidFormDonator();
    }else if (type == "simpleDonator"){
      validSimpleFormDonator[indice] = status;
      buttonValidSimpleFormDonator();
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

  var calcChecker1 = function(firstNineDigits) {
    var sum = null;
    for (var j = 0; j < 9; ++j) {
      sum += firstNineDigits.toString().charAt(j) * (10 - j);
    }
    var lastSumChecker1 = sum % 11;
    var checker1 = lastSumChecker1 < 2 ? 0 : 11 - lastSumChecker1;
    return checker1;
  };

  var calcChecker2 = function(cpfWithChecker1) {
    var sum = null;
    for (var k = 0; k < 10; ++k) {
      sum += cpfWithChecker1.toString().charAt(k) * (11 - k);
    }
    var lastSumChecker2 = sum % 11;
    var checker2 = lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2;
    return checker2;
  };

  var validateCPFNumbers = function (value) {
    var cleanCPF = value.replace(/\.|\-|\s/g, ''),
    firstNineDigits = cleanCPF.substring(0, 9),
    checker = cleanCPF.substring(9, 11);

    if (cleanCPF.length !== 11) {
      return false;
    }

    // Checking if all digits are equal
    for (var i = 0; i < 10; i++) {
      if ('' + firstNineDigits + checker === Array(12).join(i)) {
        return false;
      }
    }

    var checker1 = calcChecker1(firstNineDigits);
    var checker2 = calcChecker2(firstNineDigits + '' + checker1);

    if (checker.toString() === checker1.toString() + checker2.toString()) {
      return true;
    } else {
      return false;
    }
  };

  return {

    removeMask: function(button, selector, action){
      var button = document.querySelector(button);
      button.addEventListener(action, function(){
        var valueCNPJ = document.querySelector(selector).value;
        valueCNPJ = valueCNPJ.replace(/\.|\-|\s|\//g, '');
        document.querySelector(selector).value = valueCNPJ;
      });
    },

    validateName: function(selector, action){
      var inputName = document.querySelector(selector);
      var errorName = document.getElementById('errorName');
      inputName.addEventListener(action, function(){
        var regexNameValidate = /^[A-zÀ-ú\s]*$/;
        var nameValidate = regexNameValidate.test(inputName.value.trim());
        errorName.style.display = "";
        if (inputName.value && nameValidate) {
          errorName.style.display = "none";
          validateSingleInputForm("simpleDonator", 0, true);
          validateInputForms(0, 0, true);
        } else {
          validateSingleInputForm("simpleDonator", 0, false);
          validateInputForms(0, 0, false);
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
          if(inputCNPJ.value == "" || inputCNPJ.value.length<18){
            errorCNPJ.innerHTML = "CNPJ inválido!";
            validateSingleInputForm("bank", 1, false);
            return false;
          }else{
            errorCNPJ.style.display = "none";
            validateSingleInputForm("bank", 1, true);
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
        if(inputPhone.value == "" || inputPhone.value.length<13 ){
          errorPhone.innerHTML = "Telefone inválido!";
          validateSingleInputForm("bank", 2, false);
          validateSingleInputForm("donator", 1, false);
        }else{
          errorPhone.style.display = "none";
          validateSingleInputForm("bank", 2, true);
          validateSingleInputForm("donator", 1, true);
        }
      });
    },

    validateEmail: function(selector, action){
      var inputEmail = document.querySelector(selector);
      var errorEmail = document.getElementById('errorEmail');
      inputEmail.addEventListener(action, function(){
        debugger
        errorEmail.style.display = "";
        var regexEmailValidate = /^([a-zA-Z0-9_\-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        var emailValidate = regexEmailValidate.test(inputEmail.value.trim());
        errorEmail.style.display = "";
        if(!emailValidate && inputEmail.value != ""){
          errorEmail.innerHTML = "E-mail inválido!";
          validateSingleInputForm("simpleDonator", 1, false);
          validateInputForms(1, 3, false);
        }else if(emailValidate){
          errorEmail.style.display = "none";
          validateInputForms(1, 3, true);
          validateSingleInputForm("simpleDonator", 1, true);
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

    validatePassword: function(selector, selectorConfirmation, action ){
      var valuePassword = document.querySelector(selector);
      var valuePasswordConfirmation = document.querySelector(selectorConfirmation);
      var errorPasswordConfirmation = document.getElementById('errorPasswordConfirmation');

      var testPasswordEquals = function(password, confirmPassword) {
        if(password != confirmPassword){
          errorPasswordConfirmation.innerHTML = "Senhas não correspondem!";
          //validateInputForms(2, 5, false);
          validateSingleInputForm("donator", 3, false);
          validateSingleInputForm("bank", 5, false);

        }else{
          errorPasswordConfirmation.style.display = "none";
          //validateInputForms(2, 5, true);
          validateSingleInputForm("donator", 3, true);
          validateSingleInputForm("bank", 5, true);

        }
      };

      valuePassword.addEventListener(action, function(){
        var errorPassword = document.getElementById('errorPassword');
        errorPassword.style.display = "";
        if(valuePassword.value.length > 0 && valuePassword.value.length < 6){
          errorPassword.innerHTML = "Senha deve ter no minimo 6 digitos!";
          //validateInputForms(3, 6, false);
          validateSingleInputForm("donator", 4, false);
          validateSingleInputForm("bank", 6, false);
          return false;
        }else if(valuePassword.value.length == 0){
          //validateInputForms(3, 6, false);
          validateSingleInputForm("donator", 4, false);
          validateSingleInputForm("bank", 6, false);
          return false;
        }else{
          errorPassword.style.display = "none";
          //validateInputForms(3, 6, true);
          validateSingleInputForm("donator", 4, true);
          validateSingleInputForm("bank", 6, true);
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

        if(validateCPFNumbers(valueCPF.value)) {
          errorCPF.style.display = "none";
          validateSingleInputForm("donator", 5, true);
          return true;
        }
        errorCPF.innerHTML = "CPF inválido!";
        validateSingleInputForm("donator", 5, false);
        return false;

      });
    },

    validateTerms: function(selector, action){
      var valueTerms = document.querySelector(selector);
      var errorValueTerms = document.getElementById('errorTerms');

      valueTerms.addEventListener(action, function(){
        errorValueTerms.style.display = "";
        if(valueTerms.checked == true) {
          errorValueTerms.style.display = "none";
          validateSingleInputForm("simpleDonator", 2, true);
          validateSingleInputForm("donator", 6, true);
        }
        else {
          errorValueTerms.innerHTML = "Você deve aceitar os termos de uso!";
          validateSingleInputForm("donator", 6, false);
          validateSingleInputForm("simpleDonator", 2, false);
          return false;
        }
      });
    },

    validatePositiveNumber: function(){
      var inputNumber = document.getElementsByClassName('js-necessityInput');
      for(var i = 0; i < 8; i++){
        if(inputNumber[i].value == 0){
          inputNumber[i].value = null;
        }
        if(inputNumber[i].value < 0){
          alert("Por favor, utilize apenas números maiores que 0!");
          inputNumber[i].value = null;
        }
      }
    },

    validateMaxNumber: function(){
      var inputNumber = document.getElementsByClassName('js-necessityInput');
      for(var i = 0; i < 8; i++){
        if(inputNumber[i].value > 100){
          inputNumber[i].value = 100;
        }
      }
    },

    validateEmptyInput: function(){
      var inputNumber = document.getElementsByClassName('js-necessityInput');
      var button = document.querySelector(".js-nextButton");

      for(var i = 0; i < 8; i++){

        if(inputNumber[i].value != 0){
          buttonChange("actived", button);
          return true;
        }
      }
      buttonChange("disabled", button);
      return false;
    },

    activeButton: function(){
      toggleValidateButton(true);
    },

    disableButton: function(){
      toggleValidateButton(false);
    },

    buttonReset: function(){
      var buttonRegisterSimpleDonator = document.querySelector('.js-validateButtonSimpleDonator');
      buttonChange("disabled", buttonRegisterSimpleDonator);
    },


  }

})()
