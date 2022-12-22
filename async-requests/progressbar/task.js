let request = new XMLHttpRequest();

request.open("POST", 'https://students.netoservices.ru/nestjs-backend/upload');

const progress = document.getElementById('progress');

let uploadFile = new FormData(document.forms.form);

request.upload.onprogress = function () {
    const progress = document.getElementById('progress');
    console.log(request.updateProgress);
   // progress.value = request.updateProgress;
};
request.send(uploadFile);