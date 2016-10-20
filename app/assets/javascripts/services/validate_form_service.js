
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


  var invalidButton = true;

  var buttonValidForm = function(){
    invalidButton = true;
    for(var i = 0; i < validForm.length; i++){
      if(validForm[i] == false){
        invalidButton = false;
      }
    }

    if(invalidButton){
      toggleValidateButton(false);
    }else{
      toggleValidateButton(true);
    }
  };


  var toggleValidateButton = function(option){
    if (elementExist('.js-validateButton') == false){
      return;
    }

    var buttonRegister = document.querySelector('.js-validateButton');

    if (option){
      buttonRegister.classList.remove('is-disabled');
      buttonRegister.classList.add('is-actived');
    }else{
      buttonRegister.classList.remove('is-actived');
      buttonRegister.classList.add('is-disabled');
    }
  };


  var elementExist = function(selector){
    var element = document.querySelector(selector);

    if (element == null) {
      return false;
    } else {
      return true;
    }
  };



  return {


    removeMask: function(selector, action){
      var button = document.querySelector(selector);

      button.addEventListener(action, function(){
        var valueCNPJ = document.querySelector('.js-validateCNPJ').value;
        valueCNPJ = valueCNPJ.replace(".", "");
        valueCNPJ = valueCNPJ.replace(".", "");
        valueCNPJ = valueCNPJ.replace("-", "");
        valueCNPJ = valueCNPJ.replace("/", "");
        document.querySelector('.js-validateCNPJ').value = valueCNPJ;
      });
    },


    validateName: function(selector, action){
      var inputName = document.querySelector(selector);
      inputName.addEventListener(action, function(){
        document.getElementById('errorName').style.display = "none";
        if (inputName.value == "") {
          document.getElementById('errorName').style.display = "";
          validForm[0] = false;
          buttonValidForm();
        }else{
          validForm[0] = true;
          buttonValidForm();
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
            buttonValidForm();
          }else if (inputCNPJ.value.length<18) {
            document.getElementById('errorCNPJ').innerHTML = "CNPJ inválido!";
            validForm[1] = false;
            buttonValidForm();
          }else{
            document.getElementById('errorCNPJ').style.display = "none";
            validForm[1] = true;
            buttonValidForm();
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
          validForm[2] = false;
          buttonValidForm();
        }else if (inputPhone.value.length<13) {
          document.getElementById('errorPhone').innerHTML = "Telefone inválido!";
          validForm[2] = false;
          buttonValidForm();

        }else{
          document.getElementById('errorPhone').style.display = "none";
          validForm[2] = true;
          buttonValidForm();
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
          validForm[3] = false;
          buttonValidForm();
        }
        if(!emailValidate && inputEmail.value != ""){
          document.getElementById('errorEmail').innerHTML = "e-mail inválido!";
          validForm[3] = false;
          buttonValidForm();
        }else if(emailValidate){
          document.getElementById('errorEmail').style.display = "none";
          validForm[3] = true;
          buttonValidForm();
        }
      });
    },


    validateAddress: function(selector, action){
      if (elementExist(selector) == false){
        return;
      }

      var inputAddress = document.querySelector(selector);
      inputAddress.addEventListener(action, function(){
        if (inputAddress.value == "") {
          document.getElementById('errorAddress').style.display = "";
          validForm[4] = false;
          buttonValidForm();
        }else{
          document.getElementById('errorAddress').style.display = "none";
          validForm[4] = true;
          buttonValidForm();
        }
      });
    },


    validateExtension: function(selector, action){
      if (elementExist(selector) == false){
        return;
      }

      var inputExtension = document.querySelector(selector);
      inputExtension.addEventListener(action, function(){
        VMasker(inputExtension).maskPattern("9999");
        if (inputExtension.value == "") {
          document.getElementById('errorExtension').style.display = "";
          validForm[5] = false;
          buttonValidForm();
        }else{
          document.getElementById('errorExtension').style.display = "none";
          validForm[5] = true;
          buttonValidForm();
        }
      });
    },


    validatePassword: function(selector, selectorConfirmation, action ){
      var inputPassword = document.querySelector(selector);
      var inputPasswordConfirmation = document.querySelector(selectorConfirmation);

      inputPassword.addEventListener(action, function(){
        document.getElementById('errorPassword').style.display = "";
        if(inputPassword.value.length > 0 && inputPassword.value.length < 6){
          document.getElementById('errorPassword').innerHTML = "Senha deve ter no minimo 6 digitos!";
          validForm[6] = false;
          buttonValidForm();
        }else if(inputPassword.value.length == 0){
          document.getElementById('errorPassword').innerHTML = "Campo obrigatório!";
          validForm[6] = false;
          buttonValidForm();
        }else{
          document.getElementById('errorPassword').style.display = "none";
          validForm[6] = true;
          buttonValidForm();
        }
      });

      inputPasswordConfirmation.addEventListener(action, function(){
        document.getElementById('errorPasswordConfirmation').style.display = "";

        if(inputPasswordConfirmation.value.length >= 0){
          if(inputPasswordConfirmation.value != inputPassword.value){
            document.getElementById('errorPasswordConfirmation').innerHTML = "Senhas não correspondem!";
            validForm[7] = false;
            buttonValidForm();
          }else{
            document.getElementById('errorPasswordConfirmation').style.display = "none";
            validForm[7] = true;
            buttonValidForm();
          }
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
