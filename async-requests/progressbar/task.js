let request = new XMLHttpRequest();

const progress = document.getElementById('progress');

let uploadFile = new FormData(document.forms.form);


request.upload.onprogress = function (e) {
    progress.value = e.loaded / e.total;
}

request.upload.onloadend = function (e) {
    progress.value = 1;
}

let form = document.forms.form;

form.addEventListener('submit', (event)=>{
    request.open("POST", 'https://students.netoservices.ru/nestjs-backend/upload');
    request.send(uploadFile);
    event.preventDefault();
})

