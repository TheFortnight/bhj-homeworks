let input = document.querySelector('#editor');

window.onload = () => {
    //if(localStorage.text){
        input.value = localStorage.getItem('text');
    //}
}


input.addEventListener('keyup', () => {
    localStorage.text = input.value;
});

