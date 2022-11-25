const htmlEstrela = `
    <div class="estrela-lados">
        <div class="lado l1"></div>
        <div class="lado l2"></div>
        <div class="lado l3"></div>
        <div class="lado l4"></div>
        <div class="fundo"></div>
    </div>
    <div class="estrela">
        <div class="centro"></div>
        <div class="ponta vertical"></div>
        <div class="ponta horizontal"></div>
    </div>`;

// document.body.addEventListener('animationend', ()=>console.log("oi"))

function gerarEstrelas(){
    let element = document.createElement('div');
    element.classList.add('base_estrela');

    let top  = Math.random() * (window.innerHeight - 60) + "px";
    let left = Math.random() * (window.innerWidth  - 60) + "px";

    element.style.left = left;
    element.style.top = top;
    element.innerHTML = htmlEstrela;
    document.body.appendChild(element);

    setTimeout(
        ()=>{
            document.body.removeChild(element)
        }, 1000
    )
}


setInterval(gerarEstrelas, 500);