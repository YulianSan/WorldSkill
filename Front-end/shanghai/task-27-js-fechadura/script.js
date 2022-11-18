const botao = Array.from(document.getElementsByClassName('botao'));
const somBeep = new Audio('beep.wav');
const somSuccess = new Audio('success.mp3');
const senha = [];
botao.forEach( (e, i) =>{
    e.addEventListener('click', (e)=>{clickButton(e, i)});
});

function clickButton(e, i){
    if(senha.length >= 4)
        senha.shift();
    
    senha.push(i);
    somBeep.play();
    
    verifySenha();
}

function verifySenha(){
    if(senha.join('') == '6789'){
        somSuccess.play();

    }
}