var Navbar = ready(function(){

  var initialize = function(){
    changeOnScroll();
  }

  var navbar = document.querySelector('.Navbar');

  var changeModifier = function(show){
    if (show){
      navbar.classList.add('is-scrolling');
    }else{
      navbar.classList.remove('is-scrolling');
    }
  }

  var changeOnScroll = function(){
    window.addEventListener('scroll', function(){
      if (window.scrollY > 0) {
        changeModifier(true);
      }
      else {
        changeModifier(false);
      }
    })
  }

  initialize();

})
