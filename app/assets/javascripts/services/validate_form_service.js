var validateFormService = (function(){
  var validForm = [];
  validForm[0] = false;
  validForm[1] = false;
  validForm[2] = false;
  validForm[3] = false;
  validForm[4] = false;
  validForm[5] = false;
  validForm[6] = false;
  validForm[7] = false;

  var validFormDonator = [];
  validFormDonator[0] = false;
  validFormDonator[1] = false;
  validFormDonator[2] = false;
  validFormDonator[3] = false;
  validFormDonator[4] = false;
  validFormDonator[5] = false;
  validFormDonator[6] = false;


  var buttonValidBank = function(selector){
    if(elementExist(selector)){
      return false;
    }
    var invalidButtonBank = false;
    for(var i = 0; i < validForm.length; i++){
      if(validForm[i]==false){
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

    validInput: function(){
      console.log(validateFormService.validateName('.js-validateName','keyup'));
    },


    removeMask: function(button, selector, action){
      var button = document.querySelector(button);
      console.log(selector);
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
          validForm[0] = true;
          buttonValidBank('.js-validateButtonBank');
          buttonValidFormDonator();
        } else {
          validFormDonator[0] = false;
          validForm[0] = false;
          buttonValidBank();
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
            validForm[1] = false;
            buttonValidBank();
            return false;
          }else if (inputCNPJ.value.length<18) {
            document.getElementById('errorCNPJ').innerHTML = "CNPJ inválido!";
            validForm[1] = false;
            buttonValidBank();
            return false;
          }else{
            document.getElementById('errorCNPJ').style.display = "none";
            validForm[1] = true;
            buttonValidBank();
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
          validForm[2] = false;
          buttonValidBank();
          buttonValidFormDonator();
        }else if (inputPhone.value.length<13) {
          document.getElementById('errorPhone').innerHTML = "Telefone inválido!";
          validFormDonator[1] = false;
          validForm[2] = false;
          buttonValidBank();
          buttonValidFormDonator();

        }else{
          document.getElementById('errorPhone').style.display = "none";
          validFormDonator[1] = true;
          validForm[2] = true;
          buttonValidBank();
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
          validForm[3] = false;
          buttonValidBank();
          buttonValidFormDonator();
        }
        if(!emailValidate && inputEmail.value != ""){
          document.getElementById('errorEmail').innerHTML = "e-mail inválido!";
          validFormDonator[2] = false;
          validForm[3] = false;
          buttonValidBank();
          buttonValidFormDonator();
        }else if(emailValidate){
          document.getElementById('errorEmail').style.display = "none";
          validFormDonator[2] = true;
          validForm[3] = true;
          buttonValidBank();
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
          validForm[4] = false;
          buttonValidBank();
        }else{
          document.getElementById('errorAddress').style.display = "none";
          validForm[4] = true;
          buttonValidBank();
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
          validForm[5] = false;
          buttonValidBank();
        }else{
          document.getElementById('errorExtension').style.display = "none";
          validForm[5] = true;
          buttonValidBank();
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
          validForm[6] = false;
          buttonValidBank();
          buttonValidFormDonator();
        }else{
          document.getElementById('errorPasswordConfirmation').style.display = "none";
          validFormDonator[3] = true;
          validForm[6] = true;
          buttonValidBank();
          buttonValidFormDonator();
        }
      };


      valuePassword.addEventListener(action, function(){
        document.getElementById('errorPassword').style.display = "";
        if(valuePassword.value.length > 0 && valuePassword.value.length < 6){
          document.getElementById('errorPassword').innerHTML = "Senha deve ter no minimo 6 digitos!";
          validFormDonator[4] = false;
          validForm[7] = false;
          buttonValidBank();
          buttonValidFormDonator();
          return false;
        }else if(valuePassword.value.length == 0){
          document.getElementById('errorPassword').innerHTML = "Campo obrigatório!";
          validFormDonator[4] = false;
          validForm[7] = false;
          buttonValidBank();
          buttonValidFormDonator();
          return false;
        }else{
          document.getElementById('errorPassword').style.display = "none";
          validFormDonator[4] = true;
          validForm[7] = true;
          buttonValidBank();
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
    },

    //DONATORS <<<<<

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
    }

  } // return

})()
