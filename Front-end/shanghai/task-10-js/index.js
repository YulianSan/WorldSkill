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
    else if(wText + 40 < wBase){
        // showText()

    }

}

function ellipsTexto(textArray, length){
    

    let metade = length/2;
    textArray.splice(metade, 0, '...');
    
    let [leftText, rightText] = textArray.join('').split('...');

    
    let wText = texto.clientWidth;
    let wBase = base_texto.clientWidth;
    
    do{
        leftText = leftText.substring(0, leftText.length - 1);
        rightText = rightText.substring(1, rightText.length);

        texto.textContent = leftText + '...' + rightText;
        wText = texto.clientWidth;
        wBase = base_texto.clientWidth;


    }while(wText > wBase - 20)
}

function showText(textArray, length){
    let metade = length/2;
    textArray.splice(metade, 0, '...');
    
    let [leftText, rightText] = textArray.join('').split('...');

    
    let wText = texto.clientWidth;
    let wBase = base_texto.clientWidth;
    
    do{
        leftText = leftText.substring(0, leftText.length - 1);
        rightText = rightText.substring(1, rightText.length);

        texto.textContent = leftText + '...' + rightText;
        wText = texto.clientWidth;
        wBase = base_texto.clientWidth;


    }while(wText > wBase - 20)
}
