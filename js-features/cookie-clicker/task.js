let counter = document.getElementById('clicker__counter');
let counterValue = counter.textContent;
let image = document.getElementById('cookie');
let sizeIncrease = false;

image.onclick = function(){
    counterValue++;
    counter.textContent = counterValue;
    
    if(!sizeIncrease) {
        sizeIncrease = !sizeIncrease;
        image.width = 300;
        
    }
    else {
        image.width = 200;
        sizeIncrease = !sizeIncrease;
    }
}