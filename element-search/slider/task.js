let btnPrev = document.querySelector('.slider__arrow_prev');
let btnNext = document.querySelector('.slider__arrow_next');
let itemsArray = document.querySelectorAll('.slider__item');

btnPrev.onclick = function(){
    for(let i = 0; i < itemsArray.length; i++){
        if(itemsArray[i].className == 'slider__item slider__item_active'){
            itemsArray[i].className = 'slider__item';
            let previousItemOrder = i - 1;
            previousItemOrder = previousItemOrder < 0 ? (itemsArray.length + previousItemOrder) : previousItemOrder; 
            itemsArray[previousItemOrder].className = 'slider__item slider__item_active';
            break;
        }
    }
    
}

btnNext.onclick = function(){
    for(let i = 0; i < itemsArray.length; i++){
        if(itemsArray[i].className == 'slider__item slider__item_active'){
            console.log("found element!");
            itemsArray[i].className = 'slider__item';
            let previousItemOrder = i + 1;
            previousItemOrder = previousItemOrder > (itemsArray.length - 1) ? (previousItemOrder - itemsArray.length) : previousItemOrder; 
            console.log('NEXT ORDRER is :'+previousItemOrder)
            itemsArray[previousItemOrder].className = 'slider__item slider__item_active';
            break;
        }
    }
    
}