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
    }

    
  }
})()



function validate(){
  //$('#ButtonFormHospital').click(function(){
  //});
}
