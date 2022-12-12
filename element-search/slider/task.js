let btnPrev = document.querySelector('.slider__arrow_prev');
let btnNext = document.querySelector('.slider__arrow_next');
let itemsArray = document.querySelectorAll('.slider__item');

itemsArray = Array.from(itemsArray);

btnPrev.onclick = function(){

    let activeItem =  itemsArray.findIndex(item => item.className == 'slider__item slider__item_active');
    itemsArray[activeItem].className = 'slider__item';
    activeItem = activeItem == 0 ? itemsArray.length - 1 : activeItem - 1;
    itemsArray[activeItem].className = 'slider__item slider__item_active';

}

btnNext.onclick = function(){


    let activeItem =  itemsArray.findIndex(item => item.className == 'slider__item slider__item_active');
    itemsArray[activeItem].className = 'slider__item';
    activeItem = activeItem == itemsArray.length - 1 ? 0 : activeItem + 1;
    itemsArray[activeItem].className = 'slider__item slider__item_active';

}