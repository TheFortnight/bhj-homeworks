let popup = document.querySelectorAll('.modal');
popup[0].className = 'modal modal_active';
let parentDiv = popup[0].parentElement;
let closeBtn = parentDiv.querySelector('.modal__close');
closeBtn.onclick = function(){
    popup[0].className =  'modal';
};
let successBtn = document.querySelector('.btn_danger');
successBtn.onclick = function() {
    popup[1].className = 'modal modal_active';
   };

