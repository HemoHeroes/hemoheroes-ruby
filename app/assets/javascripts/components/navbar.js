var Navbar = (function(){

  var initialize = function(){
    ready(function(){
      var currentController = document.body.getAttribute("data-controller");
      var currentAction = document.body.getAttribute("data-action");

      if (currentController == 'application' && currentAction == 'index') {
        Navbar.toggle({
          icon: '.js-openNavbar',
          navbar: '.HeroImage-header',
          links: '.js-navbarLinks'
        });
      } else {
        Navbar.toggle({
          icon: '.js-openNavbar',
          navbar: '.Navbar',
          links: '.js-navbarMobile'
        });
      }
    });
  };

  var showNavbarLinks = function(params){
    var iconToOpen = document.querySelector(params.icon);
    var navbar = document.querySelector(params.navbar);
    var links = document.querySelector(params.links);

    iconToOpen.addEventListener('click', function(){
      if (links.style.display == "none" || links.style.display === "") {
        navbar.classList.add('is-scrolling');
        links.style.display = "inline-block";
      } else {
        navbar.classList.remove('is-scrolling');
        links.style.display = "none";
      }
    });
  };


  return {

    toggle : function(params){
      showNavbarLinks(params);
    },

    initialize : initialize()

  };

})();
