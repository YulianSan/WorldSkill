const mouse_efeito = document.getElementsByClassName('mouse-efeito')[0];

document.addEventListener('click', mouseEfeito);
mouse_efeito.addEventListener('animationend', ()=>{mouse_efeito.classList.remove('active')});
function mouseEfeito(e){
    const [x, y] = [e.clientX, e.clientY]

    mouse_efeito.style.left = `${x}px`;
    mouse_efeito.style.top = `${y}px`;

    mouse_efeito.classList.add('active');
}