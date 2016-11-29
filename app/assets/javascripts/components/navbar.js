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

    links.addEventListener('click', function(){
      if (links.style.display == "none" || links.style.display === "") {
        navbar.classList.add('is-scrolling');
        links.style.display = "inline-block";
        console.log("if");
      } else {
        navbar.classList.remove('is-scrolling');
        if (iconToOpen.style.display == "none") {
          console.log("if2");
          links.style.display = "inline";
        } else {
          console.log("else2");
          links.style.display = "none";
        }
        console.log("else");
      }
    });

    iconToOpen.addEventListener('click', function(){
      if (links.style.display == "none" || links.style.display === "") {
        console.log("abriu menu");
        navbar.classList.add('is-scrolling');
        links.style.display = "inline-block";
      } else {
        console.log("fechou menu");
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
