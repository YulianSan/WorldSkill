const btn_search = document.getElementById('btn_search');
const inp_search = document.getElementById('inp_search');
const text = document.getElementById('texto');

btn_search.addEventListener('click', clickBtnSearch);

function clickBtnSearch(){
    let value = inp_search.value;

    let txt = text.textContent;
    let regExp = new RegExp(`(${value})`, 'g');
    let criarDestaque = (t)=>{
        console.log(t);
        let r = Math.floor(Math.random()*255), 
            g = Math.floor(Math.random()*255), 
            b = Math.floor(Math.random()*255);

        return `<span style="background-color: rgb( ${r}, ${g}, ${b})">${t}</span>`
    }
    let encontrados = txt.replace(regExp, criarDestaque( '$1' ));
    
    text.innerHTML = encontrados;
}