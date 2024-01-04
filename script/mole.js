
let lastRandom = -1;
export let changement = () =>{
    let random;
    do {
        random = Math.floor(Math.random() * 12);
    } while (random === lastRandom);
    lastRandom = random;
    let moleWhack = document.getElementById(random);
    moleWhack.classList.add('rond__moleWhack');
    setTimeout(() => {
        moleWhack.classList.remove('rond__moleWhack');
    }, 1000);

}


export let moleInterval = setInterval( changement , 1000);
