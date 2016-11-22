var Navbar = (function(){

  var initialize = function(){
    // changeOnScroll();
  };

  var navbar = document.querySelector('.HeroImage-header');

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

  var showNavbar = function(selector){
    var navbarLinks = document.querySelector(selector);
    var navbar = document.querySelector(".HeroImage-header");

    if (navbarLinks.style.display == "none" || navbarLinks.style.display === "") {
      navbar.classList.add('is-scrolling');
      navbarLinks.style.display = "inline-block";
    } else {
      navbar.classList.remove('is-scrolling');
      navbarLinks.style.display = "none";
    }
  };


  return {

    toggle : function(selector){
      showNavbar(selector);
    },

    initialize: initialize()

  };

})();
