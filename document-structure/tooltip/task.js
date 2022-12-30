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
        let tipElement = `<div class="tooltip tooltip_active" style="position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -50px;
        margin-left: -50px">${tipText}</div>`;
        link.outerHTML += tipElement;
        
    }
       
        
        return false;
    }
});