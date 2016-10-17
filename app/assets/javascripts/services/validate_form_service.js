
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
  validForm[8] = false;

  var invalidInput = false;

  var buttonValidForm = function(){
    console.log(validForm)
    invalidInput = false;
    for(var i = 0; i < validForm.length; i++){
      console.log(validForm[i])
      if(validForm[i]==false){
        invalidInput = true;
      }
    }

    if(!invalidInput){
      var buttonRegister = document.getElementsByClassName('js-validateForm')[0];
      buttonRegister.classList.remove('is-disabled');
    }
  }

  return {

    validateName: function(selector,action){
      console.log("chegou");
      var valueName = document.getElementsByClassName(selector)[0];
      valueName.addEventListener(action, function(){
        document.getElementById('errorName').style.display = "none";
        if (valueName.value == "") {
          document.getElementById('errorName').style.display = "";
          validForm[8] = false;
          buttonValidForm();
        }else{
          validForm[8] = true;
          buttonValidForm();
        }
      });
    },

    validateCNPJ: function(selector, action){
      var valueCNPJ = document.getElementsByClassName(selector)[0];
      valueCNPJ.addEventListener(action, function(){
        VMasker(valueCNPJ).maskPattern("99.999.999/9999-99");

        document.getElementById('errorCNPJ').style.display = "";
        if(valueCNPJ.value == ""){
          document.getElementById('errorCNPJ').innerHTML = "O campo é obrigatório!";
          validForm[0] = false;
          buttonValidForm();
        }else if (valueCNPJ.value.length<18) {
          document.getElementById('errorCNPJ').innerHTML = "CNPJ inválido!";
          console.log("cnpj invalido");
          validForm[0] = false;
          buttonValidForm();
        }else{
          document.getElementById('errorCNPJ').style.display = "none";
          validForm[0] = true;
          buttonValidForm();
        }
      });
    },

    validateEmail: function(selector, action){
      var valueEmail = document.getElementsByClassName(selector)[0];
      valueEmail.addEventListener(action, function(){
        var regexEmailValidate = /^([a-zA-Z0-9_\-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        var emailValidate = regexEmailValidate.test(valueEmail.value.trim());
        if (emailValidate && valueEmail.value != "") {
          document.getElementById('errorEmail').innerHTML = "O campo é obrigatório!";
          validForm[1] = false;
          buttonValidForm();
        }
        if(valueEmail.value == ""){
          document.getElementById('errorEmail').innerHTML = "O campo é obrigatório!";
          validForm[1] = false;
          buttonValidForm();
        }else{
          document.getElementById('errorEmail').style.display = "none";
          validForm[1] = true;
          buttonValidForm();
        }
      });
    },

    validateCPF: function(selector){
      var valueCPF = document.getElementsByClassName(selector)[0];
      VMasker(valueCPF).maskPattern("999.999.999-99");
      document.getElementById('errorCPF').style.display = "";
      if(valueCPF.value == ""){
        document.getElementById('errorCPF').innerHTML = "O campo é obrigatório!";
      }else if (valueCPF.value.length<=14) {
        document.getElementById('errorCPF').innerHTML = "CPF inválido!";
        console.log("CPF invalido");
        return false;
      }else{
        document.getElementById('errorCPF').style.display = "none";
      }
    },


    validateCEP: function(selector, action){
      var valueCEP = document.getElementsByClassName(selector)[0];
      valueCEP.addEventListener(action, function(){
        VMasker(valueCEP).maskPattern("99999-999");
        document.getElementById('errorCEP').style.display = "";
        if(valueCEP.value == ""){
          document.getElementById('errorCEP').innerHTML = "O campo é obrigatório!";
          validForm[2] = false;
          buttonValidForm();
        }else if(valueCEP.value.length<9){
          document.getElementById('errorCEP').innerHTML = "CEP inválido!";
          validForm[2] = false;
          buttonValidForm();
        }else{
          document.getElementById('errorCEP').style.display = "none";
          validForm[2] = true;
          buttonValidForm();
        }
      });
    },

    validateDistrict: function(selector, action){
      var valueDistrict = document.getElementsByClassName(selector)[0];
      valueDistrict.addEventListener(action, function(){
        if (valueDistrict.value == "") {
          document.getElementById('errorDistrict').style.display = "";
          validForm[3] = false;
          buttonValidForm();
        }else{
          document.getElementById('errorDistrict').style.display = "none";
          validForm[3] = true;
          buttonValidForm();
        }
      });
    },


    validateStreet: function(selector, action){
      var valueStreet = document.getElementsByClassName(selector)[0];
      valueStreet.addEventListener(action, function(){
        if (valueStreet.value == "") {
          document.getElementById('errorStreet').style.display = "";
          validForm[4] = false;
          buttonValidForm();
        }else{
          document.getElementById('errorStreet').style.display = "none";
          validForm[4] = true;
          buttonValidForm();
        }
      });
    },


    validateNumber: function(selector, action){
      var valueNumber = document.getElementsByClassName(selector)[0];
      valueNumber.addEventListener(action, function(){
        if (valueNumber.value == "") {
          document.getElementById('errorNumber').style.display = "";
          validForm[5] = false;
          buttonValidForm();
        }else{
          document.getElementById('errorNumber').style.display = "none";
          validForm[5] = true;
          buttonValidForm();
        }
      });
    },


    validateCity: function(selector,action){
      var valueCity = document.getElementsByClassName(selector)[0];
      valueCity.addEventListener(action, function(){
        if (valueCity.value == "") {
          document.getElementById('errorCity').style.display = "";
          validForm[6] = false;
          buttonValidForm();
        }else{
          document.getElementById('errorCity').style.display = "none";
          validForm[6] = true;
          buttonValidForm();
        }
      });
    },


    validateState: function(selector, action){
      var valueState = document.getElementsByClassName(selector)[0];
      valueState.addEventListener(action, function(){
        if (valueState.value == "") {
          document.getElementById('errorState').style.display = "";
          validForm[7] = false;
          buttonValidForm();
        }else{
          document.getElementById('errorState').style.display = "none";
          validForm[7] = true;
          buttonValidForm();
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

    validatePhone: function(selector){
      var valuePhone = document.getElementsByClassName(selector)[0];
      VMasker(valuePhone).maskPattern("(99)99999-9999");
      document.getElementById('errorPhone').style.display = "";
      if(valuePhone.value == ""){
        document.getElementById('errorPhone').innerHTML = "O campo é obrigatório!";
      }else if (valuePhone.value.length<14) {
        document.getElementById('errorPhone').innerHTML = "Telefone inválido!";
        console.log("Telefone inválido");
        return false;
      }else{
        document.getElementById('errorPhone').style.display = "none";
      }
    },

    validateDate: function(selector){
      var valueDate = document.getElementsByClassName(selector)[0];

      VMasker(valueDate).maskPattern("99/99/9999");
      document.getElementById('errorDate').style.display = "";
      if(valueDate.value == ""){
        document.getElementById('errorDate').innerHTML = "O campo é obrigatório!";
      }

      else if (valueDate.value.length<10) {
        document.getElementById('errorDate').innerHTML = "Data inválida!";
        console.log("Data inválida");
        return false;
      }

      else {
        document.getElementById('errorDate').style.display = "none";
      }
    },

    validateDateLastDonation: function(selector){
      var valueDateLastDonation = document.getElementsByClassName(selector)[0];
      VMasker(valueDateLastDonation).maskPattern("99/99/9999");
      document.getElementById('errorDateLastDonation').style.display = "";
      if(valueDateLastDonation.value == ""){
        document.getElementById('errorDateLastDonation').innerHTML = "O campo é obrigatório!";
      }else if (valueDateLastDonation.value.length<10) {
        document.getElementById('errorDateLastDonation').innerHTML = "Data inválida!";
        console.log("Data inválida");
        return false;
      }else {
        document.getElementById('errorDateLastDonation').style.display = "none";
      }
    },

    validateGenre: function(selector){
      var valueGenre = document.getElementsByClassName(selector)[0];
      document.getElementById('errorGenre').style.display = "";

      if(valueGenre.checked) {
        document.getElementById('errorGenre').style.display = "none";
      }
      else {
        document.getElementById('errorGenre').innerHTML = "O campo é obrigatório!";
      }
    },

    validateTerms: function(selector){
      var valueTerms = document.getElementsByClassName(selector)[0];
      document.getElementById('errorTerms').style.display = "";

      if(valueTerms.checked) {
        document.getElementById('errorTerms').style.display = "none";
      }
      else {
        document.getElementById('errorTerms').innerHTML = "O campo é obrigatório!";
      }
    }
  }
})()
