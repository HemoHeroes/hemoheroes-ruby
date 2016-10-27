var Navbar = (function(){

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
  }
})()
