let links = Array.from(document.querySelectorAll('.has-tooltip'));

links.forEach(link => {
       
    link.onclick = function(){
        let tipText = link.title;
        let activeTips = Array.from(document.querySelectorAll('.tooltip_active'));
    if (activeTips.length > 0){
        activeTips[0].className = 'tooltip';
    }

    let existingTips = Array.from(link.querySelectorAll('.tooltip'));
    if(existingTips.length > 0){
        existingTips[0].classList.add('tooltip_active');
        existingTips[0].textContent = tipText;
    }
    else{
        let position = link.getBoundingClientRect();
        let tipElement = `<div class="tooltip tooltip_active" style="position: absolute; left:${position.x}px">${tipText}</div>`;
        link.innerHTML += tipElement;
        
    }
       
        
        return false;
    }
});