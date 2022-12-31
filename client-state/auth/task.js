let request = new XMLHttpRequest();

window.onload = () => {
    if(localStorage.getItem('id')){
        document.querySelector('.signin_active').classList.remove('signin_active');
        document.querySelector('#user_id').textContent = localStorage.getItem('id');
        document.querySelector('.welcome').classList.add('welcome_active');
    }
}

request.onload = (event) => {
        event.preventDefault();    
        let response = request.response;
        if(response.success) {
            let id = response.user_id;
            if(document.querySelector('#welcome').textContent == 'Неверный логин/пароль'){
                document.querySelector('#welcome').textContent = `Добро пожаловать, пользователь #${id}`
            };
            let form = document.querySelector('.signin_active')
            form.classList.remove('signin_active');
            localStorage.id = response.user_id;
            document.querySelector('#user_id').textContent = id;
            document.querySelector('.welcome').classList.add('welcome_active');
            
        }
        else {
            document.querySelector('#welcome').textContent = 'Неверный логин/пароль';
            document.querySelector('.welcome').classList.add('welcome_active');
            document.forms.signin__form.reset();
        }
    
    };


let sendButton = document.querySelector('#signin__btn');
sendButton.onclick = () => {
    let formData = new FormData(document.forms.signin__form);
    request.open("POST", 'https://students.netoservices.ru/nestjs-backend/auth');
    request.responseType = 'json';
    request.send(formData);
    return false;
}