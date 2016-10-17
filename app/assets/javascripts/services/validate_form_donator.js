var validateFormDonators = (function(){

  return {

    validateName: function(selector){
      var valueName = document.getElementsByClassName(selector)[0];
      document.getElementById('errorName').style.display = "";

      if (valueName == "") {
        errorName.style.display = "O campo é obrigatório!";
        return false;
      }
      else {
        document.getElementById('errorName').style.display = "none";
      }
    },


    validateEmail: function(selector){
      var valueEmail = document.getElementsByClassName(selector)[0].value;
      var regexEmailValidate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var emailValidate = regexEmailValidate.test(valueEmail.trim());

      document.getElementById('errorEmail').style.display = "";
      if (!emailValidate && valueEmail != "") {
        document.getElementById('errorEmail').innerHTML = "Email inválido!";
        return false;
      }
      if(valueEmail == ""){
        document.getElementById('errorEmail').innerHTML = "O campo é obrigatório!";
        return false;
      }else{
        document.getElementById('errorEmail').style.display = "none";
      }
    },

    validateCPF: function(selector){
      var valueCPF = document.getElementsByClassName(selector)[0];
      VMasker(valueCPF).maskPattern("999.999.999-99");
      document.getElementById('errorCPF').style.display = "";
      if(valueCPF.value == ""){
        document.getElementById('errorCPF').innerHTML = "O campo é obrigatório!";
        return false;
      }else if (valueCPF.value.length<14) {
        document.getElementById('errorCPF').innerHTML = "CPF inválido!";
        return false;
      }else{
        document.getElementById('errorCPF').style.display = "none";
      }
    },


    validatePhone: function(selector){
      var valuePhone = document.getElementsByClassName(selector)[0];
      VMasker(valuePhone).maskPattern("(99)99999-9999");
      document.getElementById('errorPhone').style.display = "";
      if(valuePhone.value == ""){
        document.getElementById('errorPhone').innerHTML = "O campo é obrigatório!";
        return false;
      }else if (valuePhone.value.length<14) {
        document.getElementById('errorPhone').innerHTML = "Telefone inválido!";
        return false;
      }else{
        document.getElementById('errorPhone').style.display = "none";
      }
    },

    validateDate: function(selector){
      var valueDate = document.getElementsByClassName(selector)[0];

      // VMasker(valueDate).maskPattern("99/99/9999");
      document.getElementById('errorDate').style.display = "";
      if(valueDate.value == ""){
        document.getElementById('errorDate').innerHTML = "O campo é obrigatório!";
        return false;
      }

      else if (valueDate.value.length >= 7 && valueDate.value.length <= 10) {
        document.getElementById('errorDate').innerHTML = "Data inválida!";
        //console.log("outra coisa");
        return false;
      }

      else {
        document.getElementById('errorDate').style.display = "none";
      }
    },

    // validateDateLastDonation: function(selector){
    //   var valueDateLastDonation = document.getElementsByClassName(selector)[0];
    //   VMasker(valueDateLastDonation).maskPattern("99/99/9999");
    //   document.getElementById('errorDateLastDonation').style.display = "";
    //   if(valueDateLastDonation.value == ""){
    //     document.getElementById('errorDateLastDonation').innerHTML = "O campo é obrigatório!";
    //     return false;
    //   }else if (valueDateLastDonation.value.length<10) {
    //     document.getElementById('errorDateLastDonation').innerHTML = "Data inválida!";
    //     console.log("Data inválida");
    //     return false;
    //   }else {
    //     document.getElementById('errorDateLastDonation').style.display = "none";
    //   }
    // },

    validateGenre: function(selector){
      var valueGenre = document.getElementsByClassName(selector)[0];
      document.getElementById('errorGenre').style.display = "";

      if(valueGenre.checked) {
        document.getElementById('errorGenre').style.display = "none";
      }
      else {
        document.getElementById('errorGenre').innerHTML = "O campo é obrigatório!";
        return false;
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
        return false;
      }
    }
  }


})()
