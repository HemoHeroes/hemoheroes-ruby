// var validateFormDonators = (function(){
//
//   var validFormDonator = [];
//   validFormDonator[0] = false;
//   validFormDonator[1] = false;
//   validFormDonator[2] = false;
//   validFormDonator[3] = false;
//   validFormDonator[4] = false;
//   validFormDonator[5] = false;
//   validFormDonator[6] = false;
//
//   var invalidInput = false;
//
//   var buttonValidFormDonator = function(){
//     invalidInput = false;
//     for(var i = 0; i < validFormDonator.length; i++){
//       if(validFormDonator[i]==false){
//         invalidInput = true;
//       }
//     }
//
//     if(!invalidInput){
//       var buttonRegister = document.querySelector('.js-validateForm');
//       buttonRegister.classList.remove('is-disabled');
//       buttonRegister.classList.add('is-actived');
//     }else{
//       var buttonRegister = document.querySelector('.js-validateForm');
//       buttonRegister.classList.remove('is-actived');
//       buttonRegister.classList.add('is-disabled');
//     }
//   }
//
//   return {
//
//     removeMask: function(selector, action){
//       var button = document.getElementsByClassName(selector)[0];
//        button.addEventListener(action, function(){
//         var valueCPF = document.getElementsByClassName('js-validateCPF')[0].value;
//         valueCPF = valueCPF.replace(".", "");
//         valueCPF = valueCPF.replace(".", "");
//         valueCPF = valueCPF.replace("-", "");
//         valueCPF = valueCPF.replace("/", "");
//         document.getElementsByClassName('js-validateCPF')[0].value = valueCPF;
//       });
//     },
//
//     validateName: function(selector, action){
//       var valueName = document.querySelector(selector);
//       valueName.addEventListener(action, function(){
//         document.getElementById('errorName').style.display = "";
//         if (valueName.value == "") {
//           document.getElementById('errorName').style.display = "Campo obrigatório!";
//           validFormDonator[0] = false;
//           buttonValidFormDonator();
//           return false;
//         }
//         else {
//           validFormDonator[0] = true;
//           buttonValidFormDonator();
//           document.getElementById('errorName').style.display = "none";
//         }
//       });
//     },
//
//
//
//     validateEmail: function(selector, action){
//       var valueEmail = document.querySelector(selector);
//
//       valueEmail.addEventListener(action, function(){
//
//         var regexEmailValidate = /^([a-zA-Z0-9_\-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//         var emailValidate = regexEmailValidate.test(valueEmail.value);
//         document.getElementById('errorEmail').style.display = "";
//
//         if (!emailValidate) {
//           document.getElementById('errorEmail').innerHTML = "e-mail inválido!";
//           validFormDonator[1] = false;
//           buttonValidFormDonator();
//           return false;
//         }
//         if(valueEmail.value == ""){
//           document.getElementById('errorEmail').innerHTML = "Campo obrigatório!";
//           validFormDonator[1] = false;
//           buttonValidFormDonator();
//           return false;
//         }else if (emailValidate){
//           document.getElementById('errorEmail').style.display = "none";
//           validFormDonator[1] = true;
//           buttonValidFormDonator();
//         }
//       });
//     },
//
//
//     validateCPF: function(selector, action){
//       var valueCPF = document.querySelector(selector);
//       valueCPF.addEventListener(action, function(){
//
//         VMasker(valueCPF).maskPattern("999.999.999-99");
//         document.getElementById('errorCPF').style.display = "";
//         if(valueCPF.value == ""){
//           document.getElementById('errorCPF').innerHTML = "Campo obrigatório!";
//           validFormDonator[2] = false;
//           buttonValidFormDonator();
//           return false;
//         }else if (valueCPF.value.length<14) {
//           document.getElementById('errorCPF').innerHTML = "CPF inválido!";
//           validFormDonator[2] = false;
//           buttonValidFormDonator();
//           return false;
//         }else{
//           document.getElementById('errorCPF').style.display = "none";
//           validFormDonator[2] = true;
//           buttonValidFormDonator();
//         }
//       });
//     },
//
//
//     validatePhone: function(selector, action){
//       var valuePhone = document.querySelector(selector);
//       valuePhone.addEventListener(action, function(){
//
//         VMasker(valuePhone).maskPattern("(99)9999-9999");
//         document.getElementById('errorPhone').style.display = "";
//         if(valuePhone.value == ""){
//           document.getElementById('errorPhone').innerHTML = "Campo obrigatório!";
//           validFormDonator[3] = false;
//           buttonValidFormDonator();
//           return false;
//         }else if (valuePhone.value.length<13) {
//           document.getElementById('errorPhone').innerHTML = "Telefone inválido!";
//           validFormDonator[3] = false;
//           buttonValidFormDonator();
//           return false;
//         }else{
//           document.getElementById('errorPhone').style.display = "none";
//           validFormDonator[3] = true;
//           buttonValidFormDonator();
//         }
//       });
//     },
//
//     validateTerms: function(selector, action){
//       var valueTerms = document.querySelector(selector);
//       valueTerms.addEventListener(action, function(){
//         document.getElementById('errorTerms').style.display = "";
//         if(valueTerms.checked == true) {
//           document.getElementById('errorTerms').style.display = "none";
//           validFormDonator[4] = true;
//           buttonValidFormDonator();
//         }
//         else {
//           document.getElementById('errorTerms').innerHTML = "Você deve aceitar os termos de uso!";
//           validFormDonator[4] = false;
//           buttonValidFormDonator();
//           return false;
//         }
//       });
//     },
//
//     validatePassword: function(selector, selectorConfirmation, action ){
//       var valuePassword = document.querySelector(selector);
//       var valuePasswordConfirmation = document.querySelector(selectorConfirmation);
//
//       var testPasswordEquals = function(password, confirmPassword) {
//         if(password != confirmPassword){
//           document.getElementById('errorPasswordConfirmation').innerHTML = "Senhas não correspondem!";
//           validFormDonator[5] = false;
//           buttonValidFormDonator();
//         }else{
//           document.getElementById('errorPasswordConfirmation').style.display = "none";
//           validFormDonator[5] = true;
//           buttonValidFormDonator();
//         }
//       };
//
//       valuePassword.addEventListener(action, function(){
//         document.getElementById('errorPassword').style.display = "";
//         if(valuePassword.value.length > 0 && valuePassword.value.length < 6){
//           document.getElementById('errorPassword').innerHTML = "Senha deve ter no minimo 6 digitos!";
//           validFormDonator[6] = false;
//           buttonValidFormDonator();
//           return false;
//         }else if(valuePassword.value.length == 0){
//           document.getElementById('errorPassword').innerHTML = "Campo obrigatório!";
//           validFormDonator[6] = false;
//           buttonValidFormDonator();
//           return false;
//         }else{
//           document.getElementById('errorPassword').style.display = "none";
//           validFormDonator[6] = true;
//           buttonValidFormDonator();
//           testPasswordEquals(valuePasswordConfirmation.value, valuePassword.value);
//         }
//       });
//
//       valuePasswordConfirmation.addEventListener(action, function(){
//         document.getElementById('errorPasswordConfirmation').style.display = "";
//         if(valuePasswordConfirmation.value.length >= 0){
//           testPasswordEquals(valuePasswordConfirmation.value, valuePassword.value);
//         }
//       });
//
//     }
//
//
//
//   } // return
//
// })()
