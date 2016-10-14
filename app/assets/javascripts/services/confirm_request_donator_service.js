var confirmRequestDonatorService = (function(){

  var souPrivado = "privado";

  var funcPrivado = function(){
    console.log('Privado');
  };

  return {
    souPublico: 'Publico',
    funcPublica: function(){
      alert('Sou Publico');
    }
  }

})();
