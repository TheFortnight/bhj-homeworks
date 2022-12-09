
let missCounter = 0;
let hitCounter = 0;
let molesKilled = document.getElementById('dead');
let missedHits = document.getElementById('lost');


    for(let i = 1; i<10; i++){
        let hole = document.getElementById('hole'+i);
        hole.onclick = function(){

            if(hole.className == 'hole hole_has-mole'){
                molesKilled.textContent = ++hitCounter;
                if(hitCounter == 10){
                    molesKilled.textContent = hitCounter = 0;
                    missedHits.textContent = missCounter = 0;
                    alert('You win!')
                }
}
            else{
                missedHits.textContent = ++missCounter;
                if(missCounter == 5){
                    molesKilled.textContent = hitCounter = 0;
                    missedHits.textContent = missCounter = 0;
                    alert('You lose!');
                }
            }
        }
    }
