const teclas_white = Array.from(document.getElementsByClassName('tecla_white'));
//colocar o som de cada tecla e já era
const teclas = {
    a: ()=>{console.log("tocar a nota \"A\"")},
    s: ()=>{console.log("tocar a nota \"S\"")},
    d: ()=>{console.log("tocar a nota \"D\"")},
    f: ()=>{console.log("tocar a nota \"F\"")},
    j: ()=>{console.log("tocar a nota \"J\"")},
    k: ()=>{console.log("tocar a nota \"K\"")},
    l: ()=>{console.log("tocar a nota \"L\"")}
}
document.body.addEventListener('keypress', tocarNota);

function tocarNota(e){
    if(teclas[e.key]){
        teclas[e.key]();
    }
}  