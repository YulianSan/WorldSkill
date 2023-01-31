const btn_render = document.getElementById('render');
const txt = document.getElementById('texto');
const marcacoes = [];
btn_render.addEventListener('click', destacarTexto);
let select;
function destacarTexto(){
    

    if(!window.getSelection().anchorNode){ return }

    select = window.getSelection().getRangeAt(0);
    let element = select.commonAncestorContainer;
    let v1 = select.endOffset;
    let v2 = select.startOffset;
    
    let inicio = Math.min(v1, v2);
    let fim = Math.max(v1, v2) - inicio;
    let texto =`<font class="destacado">${select.cloneContents().textContent}</font>`

    let Ntexto = element.textContent.split('');
    
    Ntexto.splice(inicio, fim, texto);
    console.log(window.getSelection().focusNode.nodeValue)

    txt.innerHTML = txt.innerHTML.replace(element.textContent,  Ntexto.join(''));



}