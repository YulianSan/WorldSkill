const inp_text = document.getElementById('input_text');
const out_text = document.getElementById('out_text');

inp_text.addEventListener('keyup', showOut);

function showOut(){
    let textMarkdown = inp_text.value;

    textMarkdown = textMarkdown.replace(/---/gi, '<hr>')
    let boldNotFormat = textMarkdown.match(/\*\*(\W{0,}|\w{0,})\*\*/gi);
    if(boldNotFormat){
        
        let boldFormat = boldNotFormat.map(v => {
            console.log(v)
            return v.replace(/\*\*(\W{0,}|\w{0,})\*\*/gi, '<b>$1</b>');
        });

        boldFormat.forEach((v, i) => {
            textMarkdown = textMarkdown.replace(boldNotFormat[i], v);
            
        });
    }
    

    // console.log(textMarkdown)
    out_text.innerHTML = textMarkdown;
    
}