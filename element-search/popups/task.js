let popup = document.querySelectorAll('.modal');
popup[0].className = 'modal modal_active';
let parentDiv = popup[0].parentElement;

let closeBtns = document.querySelectorAll('.modal__close');
closeBtns.forEach(btn => {
    btn.onclick = function(){
        popup[0].className = popup[1].className =  'modal';
    
    }
})

let successBtn = document.querySelector('.btn_danger');
successBtn.onclick = function() {
    popup[1].className = 'modal modal_active';
    popup[0].className =  'modal';
   };

