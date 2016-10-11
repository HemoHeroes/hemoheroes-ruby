var Modal = (function(){

  return {
    open: function(){
      const modal = document.getElementsByClassName('js-modal')[0];
      modal.style.opacity = 1;
      modal.style.visibility = 'visible';

      const modalContent = document.getElementsByClassName('js-modalContent')[0];
      modalContent.style.top = '50%'
    },


    close: function(){
      const modal = document.getElementsByClassName('js-modal')[0];
      modal.style.opacity = 0;
      modal.style.visibility = 'hidden';

      const modalContent = document.getElementsByClassName('js-modalContent')[0];
      modalContent.style.top = '40%'
    }
  }

})()
