let dropDown = document.querySelector('.dropdown__value');

let dropDownList;
dropDown.onclick = function(event){
    dropDownList = document.querySelector('.dropdown__list');
    dropDownList.className = dropDownList.className == 'dropdown__list dropdown__list_active' ? 'dropdown__list' : 'dropdown__list dropdown__list_active';
    event.preventDefault();
}

let linksArray = Array.from(document.querySelectorAll('.dropdown__link'));
linksArray.forEach(link => {
    link.onclick = function(event){
        console.log('TEXT: '+link.textContent);
        document.querySelector('.dropdown__value').textContent = link.textContent;
        console.log('NEW TEXT: '+link.textContent);
        dropDownList.className = 'dropdown__list';
        event.preventDefault();
    }
})