let linksArray = Array.from(document.querySelectorAll('.menu_sub'));
linksArray.forEach(element => {
    let linksList = element.parentElement;
    linksList.querySelector('.menu__link').href = "#";
    element.parentElement.onclick = function(){

        element.className = element.className == "menu menu_sub menu_active" ? "menu menu_sub" : "menu menu_sub menu_active";
        
           
        
    }
      
    
});