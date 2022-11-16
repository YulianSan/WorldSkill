const base_texto = document.getElementsByClassName('base_texto')[0];
const texto = document.getElementById('texto');
const texto_original = texto.textContent;
let texto_retirado = [];
new ResizeObserver(resizeText).observe(base_texto);

function resizeText(){
    const wText = texto.clientWidth;
    const wBase = base_texto.clientWidth;

    let sem = texto.textContent.replace('...', '');
    let newText = sem.split('').filter( v => v != '\n' );

    if(wText > wBase - 20){
        if(!sem) return;
        ellipsTexto(newText, newText.length);
    }
    else if(wText + 30 < wBase){
        showText(newText, newText.length);

    }

}

function ellipsTexto(textArray, length){
    

    let metade = length/2;
    textArray.splice(metade, 0, '...');
    
    let [leftText, rightText] = textArray.join('').split('...');

    
    let wText = texto.clientWidth;
    let wBase = base_texto.clientWidth;
    
    while(wText > wBase - 20){
        
        texto_retirado.push(
            leftText.substring(leftText.length - 1, leftText.length),
            rightText.substring(0, 1)
        );

        leftText = leftText.substring(0, leftText.length - 1);
        rightText = rightText.substring(1, rightText.length);

        texto.textContent = leftText + '...' + rightText;
        wText = texto.clientWidth;
        wBase = base_texto.clientWidth;


    }
}

function showText(textArray, length){
    let metade = length/2;
    textArray.splice(metade, 0, '...');
    
    let [leftText, rightText] = textArray.join('').split('...');

    
    let wText = texto.clientWidth;
    let wBase = base_texto.clientWidth;
    
    while(wText + 30 < wBase){
        if(texto_retirado.length <= 0) return;

        leftText = leftText + texto_retirado[texto_retirado.length - 2];
        rightText = texto_retirado[texto_retirado.length - 1] + rightText ;

        // console.log(texto_retirado)

        texto_retirado.pop();
        texto_retirado.pop();

        // console.log(texto_retirado)

        if(texto_retirado.length <= 0 )
            texto.textContent = leftText + rightText;
        else
            texto.textContent = leftText + '...' + rightText;

        wText = texto.clientWidth;
        wBase = base_texto.clientWidth;


    }
}
