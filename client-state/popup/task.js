let cook = document.cookie;
if(!cook.includes('none')){
    document.querySelector('.modal').classList.add('modal_active');
}
const button = document.querySelector('.modal__close');
button.onclick = () => {
    document.querySelector('.modal_active').classList.remove('modal_active');
    document.cookie = "popup=none";
    
}

