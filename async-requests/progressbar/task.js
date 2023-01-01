let request = new XMLHttpRequest();

const progress = document.getElementById('progress');

request.upload.onprogress = function (e) {
    progress.value = e.loaded / e.total;
}

request.upload.onloadend = function () {
    progress.value = 1;
}

let form = document.forms.form;

form.addEventListener('submit', (event)=>{
    let uploadFile = new FormData(document.forms.form);
    request.open("POST", 'https://students.netoservices.ru/nestjs-backend/upload');
    request.send(uploadFile);
    event.preventDefault();
})

