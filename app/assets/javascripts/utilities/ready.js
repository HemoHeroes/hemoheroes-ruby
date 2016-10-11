function ready(fn) {

  document.addEventListener("turbolinks:load", function() {
    fn();
  })

  if (document.readyState != 'loading'){
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else if (document.documentElement.hasAttribute("data-turbolinks-preview")) {
    document.addEventListener("turbolinks:load", fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
      fn();
    });
  }
}
