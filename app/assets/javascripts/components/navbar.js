var Hamburger = (function(){

  return {
    toggle: function(){
      var navbar = document.querySelector(".js-navbarMobile");
      var hamburgerIcon = document.querySelector(".js-openNavbar");
      if (navbar.style.display == "none"){
        navbar.style.display = "inline-block";
      }
      else {
        navbar.style.display = "none";
      }
    }
  };
})();


var Navbar = ready(function(){

  var initialize = function(){
    // changeOnScroll();
  };

  var navbar = document.querySelector('.Navbar');

  var verifyScrolled = function(scrolled){
    if (scrolled){
      navbar.classList.add('is-scrolling');
    }else{
      navbar.classList.remove('is-scrolling');
    }
  };

  var changeOnScroll = function(){
    window.addEventListener('scroll', function(){
      if (window.scrollY > 0) {
        verifyScrolled(true);
      }
      else {
        verifyScrolled(false);
      }
    });
  };

  initialize();

});
