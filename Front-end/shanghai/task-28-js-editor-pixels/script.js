const colors = Array.from(document.getElementsByClassName('cor'));
const pixels = Array.from(document.getElementsByClassName('pixel'));
let colorSelect = 'black';

colors.forEach( e =>{
    e.addEventListener('click',selecionarCor);
})
pixels.forEach( e =>{
    e.addEventListener('click',drawBackground);
})

function selecionarCor(e){
    colorSelect = this.style.backgroundColor;
}

function drawBackground(e){
    this.style.backgroundColor = colorSelect;
}