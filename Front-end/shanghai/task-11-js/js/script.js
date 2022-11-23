const btn_like = Array.from(document.getElementsByClassName('btn_like'));
const btn_unlike = Array.from(document.getElementsByClassName('btn_unlike'));
const btn_verify = document.getElementById('verify');

function addEventsBtn(){

    btn_verify.addEventListener('click', verificarClassificacoes);

    for (let i = 0; i < btn_like.length; i++) {
        btn_like[i].addEventListener('click', ()=>{btnClick(i, btn_like[i])});
        btn_unlike[i].addEventListener('click', ()=>{btnClick(i, btn_unlike[i])});
    }

}

function verificarClassificacoes(){
    let likes = document.getElementsByClassName('btn_like select').length;
    let unlikes = document.getElementsByClassName('btn_unlike select').length;

    alert(`likes: ${likes}, unlikes: ${unlikes}`);
}

function btnClick(i, e){

    if(e.classList.contains('btn_like')){
        if(e.classList.contains('select')){ 
            e.classList.remove('select');
        }
        else if(btn_unlike[i].classList.contains('select')){ 
            btn_unlike[i].classList.remove('select');
            e.classList.add('select');
        }
        else{ e.classList.add('select') }
    }
    else{
        if(e.classList.contains('select')){ 
            e.classList.remove('select');
        }
        else if(btn_like[i].classList.contains('select')){ 
            btn_like[i].classList.remove('select');
            e.classList.add('select');
        }
        else{ e.classList.add('select') }
    }

}

window.onload = ()=>{
    console.log("oi");
}

addEventsBtn();