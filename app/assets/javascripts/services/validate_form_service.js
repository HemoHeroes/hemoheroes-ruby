var validateFormService = (function(){


  return {
    validateName: function(selector){
      var valueName = document.getElementsByClassName(selector)[0].value;
      console.log(valueName);

      if (valueName == "") {
        console.log("chegou aqui")
        alert('Preencha o campo com seu nome');
        return false;
      }
    },


    validateEmail: function(selector){
      var valueEmail = document.getElementsByClassName(selector)[0].value;
      console.log(valueEmail);

      if (valueEmail == "") {
        console.log("chegou aqui")
        alert('Preencha o campo com seu nome');
        return false;
      }
    },



    validateCNPJ: function(selector){
      var valueCNPJ = document.getElementsByClassName(selector)[0].value;
      console.log(valueCNPJ);

      if (valueCNPJ == "") {
        console.log("chegou aqui")
        alert('Preencha o campo com seu nome');
        return false;
      }
    },


    validateCEP: function(selector){
      var valueCEP = document.getElementsByClassName(selector)[0].value;
      console.log(valueCEP);

      if (valueCEP == "") {
        console.log("chegou aqui")
        alert('Preencha o campo com seu nome');
        return false;
      }
    },

    validateDistrict: function(selector){
      var valueDistrict = document.getElementsByClassName(selector)[0].value;
      console.log(valueDistrict);

      if (valueDistrict == "") {
        console.log("chegou aqui")
        alert('Preencha o campo com seu nome');
        return false;
      }
    },


    validateStreet: function(selector){
      var valueStreet = document.getElementsByClassName(selector)[0].value;
      console.log(valueStreet);

      if (valueStreet == "") {
        console.log("chegou aqui")
        alert('Preencha o campo com seu nome');
        return false;
      }
    },


    validateNumber: function(selector){
      var valueNumber = document.getElementsByClassName(selector)[0].value;
      console.log(valueNumber);

      if (valueNumber == "") {
        console.log("chegou aqui")
        alert('Preencha o campo com seu nome');
        return false;
      }
    },

    validateCity: function(selector){
      var valueCity = document.getElementsByClassName(selector)[0].value;
      console.log(valueCity);

      if (valueCity == "") {
        console.log("chegou aqui")
        alert('Preencha o campo com seu nome');
        return false;
      }
    },

    validateState: function(selector){
      var valueState = document.getElementsByClassName(selector)[0].value;
      console.log(valueState);

      if (valueState == "") {
        console.log("chegou aqui")
        alert('Preencha o campo com seu nome');
        return false;
      }
    }


    validatePositiveNumber: function(selector){
      var necessityInput = document.getElementByClassName(selector);

      if(necessityInput.value < 0){
        alert("Por favor, utilize apenas números maiores que 0!");
        necessityInput.value = null;
      }
    }
  }
})()
