
function myFunction(){

  var aPositiveInput = document.getElementById("a_positive_input");
  if(aPositiveInput.value == - || aPositiveInput.value == +){
    alert("Por favor, utilize apenas números maiores que 0!");
    aPositiveInput.value = null;
  }

  // document.onkeypress = function(evt) {
  //   if ()
  // }

}
