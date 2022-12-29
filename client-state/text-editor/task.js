let input = document.querySelector('#editor');

window.onload = () => {
    if(localStorage.text){
        input.value = localStorage.text;
    }
}


input.addEventListener('keyup', () => {
    localStorage.text = input.value;
});

