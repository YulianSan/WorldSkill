const telas = {
    welcome: document.getElementById('welcome'),
    game: document.getElementById('game'),
    ganhou: document.getElementById('ganhou'),
    rank: null
};
var cartaSel = [];
var tentativas = 0;
var acertos = 0;
var esperar = true;
const btn_start = document.getElementById('start-game');
// const btn_reset = document.getElementById('reset-game');

const cartas = Array.from(document.getElementsByClassName('carta'));

cartas.forEach( c =>{
    c.addEventListener('click', clickCarta);
})

btn_start.addEventListener('click', startGame);
// btn_reset.addEventListener('click', startGame);

function startGame( ) {
    telas.welcome.classList.add('hidden');
    telas.game.classList.remove('hidden');
    telas.ganhou.classList.add('hidden');

    setTimeout( () => animarCartas() , 100);
    setTimeout( () => document.getElementsByClassName('cartas')[0].classList.add('center'), 1150);
    setTimeout( () => {  resetCarta()}, 2200);
    setTimeout( () => {  document.getElementsByClassName('cartas')[0].classList.remove('center');}, 3250);
    
}

function clickCarta ( ) {
    if(this.classList.contains('animar') || esperar) return;

    this.classList.add('animar')
    
    cartaSel.push(this);
    
    if(cartaSel.length == 2){
        esperar = true;
        tentativas++;
        document.getElementById('tentativas').textContent = `${tentativas}`;
        setTimeout(verificarCarta, 1000);
        
    }

}

function animarCartas() {
    cartas.forEach(c => {
        c.classList.add('animar')
    });
}

function resetCarta( ) {
    cartas.forEach( c =>{ 
        c.classList.remove('animar'); 
        c.style.order = Math.floor( Math.random()* 19 ) + 1;
    });
    esperar = false;
}

function verificarCarta( ) {
    console.log("Oi")
    console.log(cartaSel[1].lastChild)
    if(cartaSel[1].lastChild.src == cartaSel[0].lastChild.src){
        acertos++;
        document.getElementById('acertos').textContent = `${acertos}`;
        
        if(acertos == 10){
            telas.ganhou.classList.remove('hidden');
            telas.game.classList.add('hidden');
            resetCarta();
            carregarRank();

        }

    }
    else{
        cartaSel[0].classList.remove('animar');
        cartaSel[1].classList.remove('animar');
    }

    cartaSel = [];
    esperar = false;


}

