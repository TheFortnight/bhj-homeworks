let links = Array.from(document.querySelectorAll('.has-tooltip'));
links.forEach(link => {
    let activeTips = Array.from(document.querySelectorAll('.tooltip_active'));
    if (activeTips.length > 0){
        activeTips.forEach(tip => tip.className = 'tooltip');
    }
    link.onclick = function(){
        let tipText = link.title;
        console.log(tipText);
        let tipElement = `<div class="tooltip tooltip_active" style="left:0; top:0">${tipText}</div>`;
        link.outerHTML += tipElement;
         
        return false;
    }
})