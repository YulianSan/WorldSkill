const botao = Array.from(document.getElementsByClassName('botao'));
const somBeep = new Audio('beep.wav');
const somSuccess = new Audio('success.mp3');
const senha = [];
botao.forEach( (e, i) =>{
    e.addEventListener('click', ()=>{clickButton(e, i)});
});

function clickButton(e, i){
    if(senha.length >= 4)
        senha.shift();
    
    senha.push(e.textContent);
    somBeep.play();
    
    verifySenha();
}

function verifySenha(){
    if(senha.join('') == '6789'){
        somSuccess.play();

    }
}