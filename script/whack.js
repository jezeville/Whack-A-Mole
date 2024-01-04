let scoreTotal = 0;
import { changement, moleInterval } from "./mole.js";
let point = document.getElementById('point');
let moleInterval2;
let time = 1000;

export let whack = (e) => {
    let currentMole = document.querySelector('.rond__moleWhack');
    if (currentMole && e.target.id === currentMole.id) {
        scoreTotal++;
        point.innerHTML = scoreTotal + " Point";
        clearInterval(moleInterval);
        clearInterval(moleInterval2);
        if (time > 300){
            time = time - scoreTotal ;
        }
        moleInterval2 = setInterval(changement , time);
    }
    else{
        
    }
}