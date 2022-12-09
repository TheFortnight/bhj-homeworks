let timer = document.getElementById('timer');

function countDown(){ 
   let int =  setInterval(function() {
        if(timer.textContent > 0){
            timer.textContent -= 1;
        }
        else {
            clearInterval(int);
            alert('Вы победили в конкурсе!');
        }
    }, 1000);
}

countDown();