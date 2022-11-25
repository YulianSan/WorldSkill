const teclas_white = Array.from(document.getElementsByClassName('tecla_white'));
//colocar o som de cada tecla e já era
const Tteclas = {
    a: ()=>{console.log("tocar a nota \"A\""); teclas_white[0].classList.add('select')},
    s: ()=>{console.log("tocar a nota \"S\""); teclas_white[1].classList.add('select')},
    d: ()=>{console.log("tocar a nota \"D\""); teclas_white[2].classList.add('select')},
    f: ()=>{console.log("tocar a nota \"F\""); teclas_white[3].classList.add('select')},
    j: ()=>{console.log("tocar a nota \"J\""); teclas_white[4].classList.add('select')},
    k: ()=>{console.log("tocar a nota \"K\""); teclas_white[5].classList.add('select')},
    l: ()=>{console.log("tocar a nota \"L\""); teclas_white[6].classList.add('select')}
}

const Pteclas = {
    a: ()=>{console.log("parar a nota \"A\""); teclas_white[0].classList.remove('select')},
    s: ()=>{console.log("parar a nota \"S\""); teclas_white[1].classList.remove('select')},
    d: ()=>{console.log("parar a nota \"D\""); teclas_white[2].classList.remove('select')},
    f: ()=>{console.log("parar a nota \"F\""); teclas_white[3].classList.remove('select')},
    j: ()=>{console.log("parar a nota \"J\""); teclas_white[4].classList.remove('select')},
    k: ()=>{console.log("parar a nota \"K\""); teclas_white[5].classList.remove('select')},
    l: ()=>{console.log("parar a nota \"L\""); teclas_white[6].classList.remove('select')}
}

document.body.addEventListener('keypress', tocarNota);
document.body.addEventListener('keyup', pararNota);

function tocarNota(e){
    if(Tteclas[e.key]){
        Tteclas[e.key](e.target);
    }
}  

function pararNota(e){
    if(Pteclas[e.key]){
        Pteclas[e.key](e.target);
    }
}