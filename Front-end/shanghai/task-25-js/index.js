const mouse_efeito = document.getElementsByClassName('mouse-efeito')[0];
let temElemento = false;
document.addEventListener('click', mouseEfeito);
document.addEventListener('mousedown', mousePress);
document.addEventListener('mouseup', mouseUp);
document.addEventListener('mousemove', mouseMove);

document.addEventListener('animationend', (e)=>{
    document.body.removeChild(e.target)
});

function mousePress(e){
    const [x, y] = [e.clientX, e.clientY];
    const efectMouseMove = document.createElement('div');

    efectMouseMove.classList.add('seguir');
    
    efectMouseMove.style.left = `${x - 40}px`;
    efectMouseMove.style.top = `${y - 40}px`;
    temElemento = true;
    document.body.appendChild(efectMouseMove);
    
    // efectMouseMove.addEventListener('animationend', (e)=>{
    //     document.body.removeChild(e.target);
    // });

}

function mouseMove(e){
    if(!temElemento) {return;}
    const [x, y] = [e.clientX, e.clientY];

    const efectMouseMove = document.getElementsByClassName('seguir')[0];

    efectMouseMove.style.left = `${x - 40}px`;
    efectMouseMove.style.top = `${y - 40}px`;
}
function mouseUp(){
    temElemento = false;
    const efectMouseMove = document.getElementsByClassName('seguir')[0];
    
    efectMouseMove.classList.add('sumir');
}
function mouseEfeito(e){
    temElemento = false;
    const efectMouse = document.createElement('div');
    efectMouse.classList.add('expandir')


    const [x, y] = [e.clientX, e.clientY]

    efectMouse.style.left = `${x}px`;
    efectMouse.style.top = `${y}px`;

    document.body.appendChild(efectMouse);
    
    const OldefectMouseMove = Array.from(document.querySelectorAll('.seguir:not(.sumir)'));
    if(OldefectMouseMove){
        OldefectMouseMove.forEach( v =>{
            v.classList.add('sumir');
        })
    }
}

