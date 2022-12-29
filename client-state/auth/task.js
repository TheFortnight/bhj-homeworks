let request = new XMLHttpRequest();
request.open("POST", 'https://students.netoservices.ru/nestjs-backend/auth');

window.onload = () => {
    if(localStorage.id){
        document.querySelector('.signin_active').classList.remove('signin_active');
        document.querySelector('#user_id').textContent = localStorage.id;
        document.querySelector('.welcome').classList.add('welcome_active');
    }
}

request.addEventListener('readystatechange', function() {
    if (this.readyState == request.DONE && this.status < 300) {
        
        let response = request.responseText;
        response = JSON.parse(response);
        if(response.success) {
            let form = document.querySelector('.signin_active')
            form.classList.remove('signin_active');
            localStorage.id = response.user_id;
            document.querySelector('#user_id').textContent = response.user_id;
            document.querySelector('.welcome').classList.add('welcome_active');
        }
        else {
            document.querySelector('#welcome').textContent = 'Неверный логин/пароль';
            document.querySelector('.welcome').classList.add('welcome_active');
        }
    
    }
    });


let sendButton = document.querySelector('#signin__btn');
sendButton.onclick = () => {
    let formData = new FormData(document.forms.signin__form);


    console.log(formData);
    request.send(formData);
    return false;
}