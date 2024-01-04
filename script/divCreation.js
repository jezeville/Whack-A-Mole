export let divCreation = () => {
    let i = 0;
    let main = document.getElementById('jeu')
    while (i <12){
        let div = document.createElement('div');
        div.classList.add('rond');
        div.id = i;
        main.append(div);
        i++;
    }
};