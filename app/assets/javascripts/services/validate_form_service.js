var validateFormService = (function(){
  alert("puts");

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

    validateNecessity: function(selector){
      var aPositiveInput = document.getElementsByClassName(selector);
      document.getElementById("a_positive_input").onkeyup = function(){
        if(aPositiveInput.value < 0){
          alert("Por favor, utilize apenas números maiores que 0!");
          aPositiveInput.value = 0;
        }
      }
  }
})()

















function validate(){
  //$('#ButtonFormHospital').click(function(){
  //});
}
