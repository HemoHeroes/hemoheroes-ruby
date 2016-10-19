function ready(fn) {

  if (document.documentElement.hasAttribute("data-turbolinks-track")) {
    document.addEventListener("turbolinks:load", fn);
  }  else if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener("turbolinks:load", fn)
  }
}
