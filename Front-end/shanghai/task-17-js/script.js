const btn_ripple = document.getElementById('btn_ripple');

btn_ripple.addEventListener('click', rippleButton);

function rippleButton(e){
    let effect_ripple = document.createElement('div');
    effect_ripple.classList.add('effect_ripple');
    
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    effect_ripple.style.left = `${x}px`;
    effect_ripple.style.top = `${y}px`;

    btn_ripple.appendChild(effect_ripple);

    effect_ripple.addEventListener('animationend', ()=>{btn_ripple.removeChild(effect_ripple)})
}