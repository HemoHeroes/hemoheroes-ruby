var validateFormDonators = (function(){

  var validFormDonator = [];
  validFormDonator[0] = false;
  validFormDonator[1] = false;
  validFormDonator[2] = false;
  validFormDonator[3] = false;
  validFormDonator[4] = false;

  var invalidInput = false;

  var buttonValidFormDonator = function(){
    invalidInput = false;
    for(var i = 0; i < validFormDonator.length; i++){
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
        document.getElementById('errorName').style.display = "";
        if (valueName.value == "") {
          document.getElementById('errorName').style.display = "O campo é obrigatório!";
          validFormDonator[0] = false;
          buttonValidFormDonator();
          return false;
        }
        else {
          validFormDonator[0] = true;
          buttonValidFormDonator();
          document.getElementById('errorName').style.display = "none";
        }
      });
    },



    validateEmail: function(selector, action){
      var valueEmail = document.getElementsByClassName(selector)[0];

      valueEmail.addEventListener(action, function(){

        var regexEmailValidate = /^([a-zA-Z0-9_\-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        var emailValidate = regexEmailValidate.test(valueEmail.value);
        document.getElementById('errorEmail').style.display = "";

        if (!emailValidate) {
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
        }else if (emailValidate){
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
        }else if (valuePhone.value.length<13) {
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

    validateTerms: function(selector, action){
      var valueTerms = document.getElementsByClassName(selector)[0];
      valueTerms.addEventListener(action, function(){
        document.getElementById('errorTerms').style.display = "";
        if(valueTerms.checked == true) {
          document.getElementById('errorTerms').style.display = "none";
          validFormDonator[4] = true;
          buttonValidFormDonator();
        }
        else {
          document.getElementById('errorTerms').innerHTML = "Você deve aceitar os termos de uso!";
          validFormDonator[4] = false;
          buttonValidFormDonator();
          return false;
        }
      });
    }


  } // return

})()
