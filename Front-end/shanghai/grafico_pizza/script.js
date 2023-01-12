const inp_porcentagem = document.getElementById('inp_p');
const grafico = document.getElementById('grafico');

inp_porcentagem.addEventListener('input', updateGrafico);

function updateGrafico(){
    
    if(inp_porcentagem.value > 100) { inp_porcentagem.value = 100}
    if(inp_porcentagem.value < 0)   { inp_porcentagem.value = 0  }
    
    let p = inp_porcentagem.value;
    let deg = (Number(p)/100) * 360;
    
    let l1;
    let l2 = 'linear-gradient(' + (deg + 90) + 'deg, blue 50%, red 50%)';

    if(p < 50){
        l1 = 'linear-gradient(to right, red 50%, transparent 50% )';
    }else{
        l1 = 'linear-gradient(to left, blue 50%, transparent 50% )';
    }
    
    console.log(l1);
    console.log(l2);
    grafico.style.backgroundImage = l1 + ',' + l2;
    grafico.style.setProperty('--p', `'${inp_porcentagem.value}'`);


}