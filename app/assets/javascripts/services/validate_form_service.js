var validateFormService = (function(){


  return {
    validateName: function(selector){
      var valueName = document.getElementsByClassName(selector);

      console.log(valueName)

      var errorName = document.getElementById('errorName');
      //    console.log("chegou aqui");
      if (valueName == "") {
        errorName.style.display = "block";
        alert('Preencha o campo com seu nome');
        valueName.focus();
        return false;
      }
    }
  }
})()

















function validate(){
  //$('#ButtonFormHospital').click(function(){
  //});
}
