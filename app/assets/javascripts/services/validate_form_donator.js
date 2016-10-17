var validateFormDonators = (function(){

  var validFormDonator = [];
  validFormDonator[0] = false;
  validFormDonator[1] = false;
  validFormDonator[2] = false;
  validFormDonator[3] = false;
  validFormDonator[4] = false;
  validFormDonator[5] = false;
  validFormDonator[6] = false;

  var invalidInput = false;

  var buttonValidFormDonator = function(){

    invalidInput = false;
    for(var i = 0; i < validFormDonator.length; i++){
      console.log(validFormDonator[i])
      if(validFormDonator[i]==false){
        invalidInput = true;
      }
    }

    if(!invalidInput){
      var buttonRegister = document.getElementsByClassName('js-validateButton')[0];
      buttonRegister.classList.remove('is-disabled');
      buttonRegister.classList.add('is-actived');
    }else{
      var buttonRegister = document.getElementsByClassName('js-validateButton')[0];
      buttonRegister.classList.remove('is-actived');
      buttonRegister.classList.add('is-disabled');
    }
  }

  return {

    validateName: function(selector, action){

      var valueName = document.getElementsByClassName(selector)[0];
      valueName.addEventListener(action, function(){
        document.getElementById('errorName').style.display = "none";

        if (valueName.value == "") {
          document.getElementById('errorName').style.display = "O campo é obrigatório";
          validFormDonator[0] = false;
          buttonValidFormDonator();
        }else{
          validFormDonator[0] = true;
          buttonValidFormDonator();
        }
      });
    },


    validateEmail: function(selector, action){
      var valueEmail = document.getElementsByClassName(selector)[0];
      valueEmail.addEventListener(action, function(){
        document.getElementById('errorEmail').style.display = "";
        var regexEmailValidate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var emailValidate = regexEmailValidate.test(valueEmail.trim());

        if (!emailValidate && valueEmail.value != "") {
          document.getElementById('errorEmail').innerHTML = "Email inválido!";
          validFormDonator[1] = false;
          buttonValidFormDonator();
          return false;
        }
        if(valueEmail.value == ""){
          document.getElementById('errorEmail').innerHTML = "O campo é obrigatório!";
          validFormDonator[1] = false;
          buttonValidFormDonator();
          return false;
        }else{
          document.getElementById('errorEmail').style.display = "none";
          validFormDonator[1] = true;
          buttonValidFormDonator();
        }
      });
    },


    validateCPF: function(selector, action){
      var valueCPF = document.getElementsByClassName(selector)[0];
      valueCPF.addEventListener(action, function(){

        VMasker(valueCPF).maskPattern("999.999.999-99");
        document.getElementById('errorCPF').style.display = "";
        if(valueCPF.value == ""){
          document.getElementById('errorCPF').innerHTML = "O campo é obrigatório!";
          validFormDonator[2] = false;
          buttonValidFormDonator();
          return false;
        }else if (valueCPF.value.length<14) {
          document.getElementById('errorCPF').innerHTML = "CPF inválido!";
          validFormDonator[2] = false;
          buttonValidFormDonator();
          return false;
        }else{
          document.getElementById('errorCPF').style.display = "none";
          validFormDonator[2] = true;
          buttonValidFormDonator();
        }
      });
    },


    validatePhone: function(selector, action){
      var valuePhone = document.getElementsByClassName(selector)[0];
      valuePhone.addEventListener(action, function(){

        VMasker(valuePhone).maskPattern("(99)9999-9999");
        document.getElementById('errorPhone').style.display = "";
        if(valuePhone.value == ""){
          document.getElementById('errorPhone').innerHTML = "O campo é obrigatório!";
          validFormDonator[3] = false;
          buttonValidFormDonator();
          return false;
        }else if (valuePhone.value.length<14) {
          document.getElementById('errorPhone').innerHTML = "Telefone inválido!";
          validFormDonator[3] = false;
          buttonValidFormDonator();
          return false;
        }else{
          document.getElementById('errorPhone').style.display = "none";
          validFormDonator[3] = true;
          buttonValidFormDonator();
        }
      });
    },

    validateDate: function(selector, action){
      var valueDate = document.getElementsByClassName(selector)[0];
      valueDate.addEventListener(action, function(){
        //  VMasker(valueDate).maskPattern("99/99/9999");
        document.getElementById('errorDate').style.display = "";
        if(valueDate.value == ""){
          document.getElementById('errorDate').innerHTML = "O campo é obrigatório!";
          validFormDonator[4] = false;
          buttonValidFormDonator();
          return false;
        }else {
          document.getElementById('errorDate').style.display = "none";
          validFormDonator[4] = true;
          buttonValidFormDonator();
        }
      });
    },

    validateGenre: function(selector, action){
      var valueGenre = document.getElementsByClassName(selector)[0];
      valueGenre.addEventListener(action, function(){

        document.getElementById('errorGenre').style.display = "";
        if(valueGenre.checked) {
          document.getElementById('errorGenre').style.display = "none";
          validFormDonator[5] = true;
          buttonValidFormDonator();
        }
        else {
          document.getElementById('errorGenre').innerHTML = "O campo é obrigatório!";
          validFormDonator[5] = false;
          buttonValidFormDonator();
          return false;
        }
      });
    },

    validateTerms: function(selector){
      var valueTerms = document.getElementsByClassName(selector)[0];
      valueTerms.addEventListener(action, function(){

        document.getElementById('errorTerms').style.display = "";
        if(valueTerms.checked) {
          document.getElementById('errorTerms').style.display = "none";
          validFormDonator[6] = true;
          buttonValidFormDonator();
        }
        else {
          document.getElementById('errorTerms').innerHTML = "O campo é obrigatório!";
          validFormDonator[6] = false;
          buttonValidFormDonator();
          return false;
        }
      });
    }


  } // return

})()
