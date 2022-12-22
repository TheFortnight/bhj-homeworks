let request = new XMLHttpRequest();
request.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

request.addEventListener('readystatechange', function() {
    if (this.readyState == request.DONE && this.status == 200) {
        let response = request.responseText;
        response = JSON.parse(response);
        console.log(response.data.answers);
        let pollName = document.querySelector('.poll__title');
        pollName.textContent = response.data.title;
        let pollAnswers = document.querySelector('.poll__answers_active');

        let answers = response.data.answers;
        for(let i=0; i<answers.length; i++){
            let newButton = document.createElement('button');
            newButton.classList.add('poll__answer'); 
            newButton.textContent = answers[i];

            newButton.onclick = () => alert("Спасибо! Ваш голос учтен!");

            pollAnswers.appendChild(newButton);
        }        
    }
    });

request.send();