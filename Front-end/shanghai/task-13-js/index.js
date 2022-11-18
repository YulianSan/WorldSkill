const inp_text = document.getElementById('input_text');
const out_text = document.getElementById('out_text');
let textMarkdown = inp_text.value;
inp_text.addEventListener('keyup', showOut);

function showOut(){
    if(out_text.textContent === inp_text.value) return;
    textMarkdown = inp_text.value;
    let regexpBold = /\*\*(( {0,}\S{1,} {0,}){1,})\*\*/gi;
    let regexpTitle = /#{1}(( {0,}\S{1,} {0,}){1,})/gi;
    let regexpList = /-{1}(( {0,}\S{1,} {0,}){1,})/gi;
    let regexpLink =/[^!]\[(( {0,}\S{1,} {0,}){1,})\]\((( {0,}\S{1,} {0,}){1,})\)/gi;
    let regexpImg =/[!]{1}\[(( {0,}\S{1,} {0,}){1,})\]\((( {0,}\S{1,} {0,}){1,})\)/gi;

    textMarkdown = textMarkdown.replaceAll(/---/gi, '<hr>')
    textMarkdown = textMarkdown.replaceAll(regexpBold, '<b>$1</b>');
    textMarkdown = textMarkdown.replaceAll(regexpTitle, "<h1>$1</h1>");
    textMarkdown = textMarkdown.replaceAll(regexpList, "<li>$1</li>");
    textMarkdown = textMarkdown.replaceAll(regexpLink, "<a href='$3'>$1</a>");
    textMarkdown = textMarkdown.replaceAll(regexpImg, "<img src='$3' alt='$1'/>$1");
    
    out_text.innerHTML = textMarkdown;
    
}
// showOut()