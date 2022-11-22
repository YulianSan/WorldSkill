const dado = document.getElementsByClassName('dado')[0];
const subir = document.getElementsByClassName('base')[0];
document.addEventListener('click', jogarDado);
let x = 0, y = 0;
let rotatePos = [
    {x:90, y:0},
    {x:0, y:0},
    {x:0, y:90},
    {x:0, y:270},
    {x:0, y:180},
    {x:270, y:0},
]
let dado_animacao = false;

function jogarDado()
{
    if(dado_animacao) {return}
    const numero_sorteado = Math.ceil(Math.random() * 5) - 1;
    
    if(y > 360)
        y = rotatePos[numero_sorteado].y - 360 + y;
    else
        y = rotatePos[numero_sorteado].y + 360 + y;
    if(x > 360)
        x = rotatePos[numero_sorteado].x - 360 + x;
    else
        x = rotatePos[numero_sorteado].x + 360 + x;
    
    console.log(numero_sorteado)
    dado_animacao = true;
    
    dado.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
    subir.style.animation = `subir 1s ease-out alternate 2`;
    

    
}

dado.addEventListener('transitionend', ()=>{dado_animacao = false})
subir.addEventListener('animationend', ()=>{subir.style.animation = "none"})