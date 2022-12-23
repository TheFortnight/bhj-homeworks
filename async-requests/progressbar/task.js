//Уже после отправки задания понял, что кнопка не привязана к запросу. Сделал, но почему-то динамика не отслеживается.
//Файл более 200 мб не может загружаться так быстро.

let request = new XMLHttpRequest();

request.open("POST", 'https://students.netoservices.ru/nestjs-backend/upload');

const progress = document.getElementById('progress');

let uploadFile = new FormData(document.forms.form);


request.upload.onprogress = function (e) {
    progress.value = e.loaded / e.total;
}

request.upload.onloadend = function (e) {
    progress.value = 1;
}


let sendButton = document.querySelector('#send');
sendButton.onclick = () => {
    request.send(uploadFile);
    return false;
}

