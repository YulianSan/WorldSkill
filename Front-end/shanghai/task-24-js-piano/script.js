const teclas_white = Array.from(document.getElementsByClassName('tecla_white'));
const audios = {
    do: new Audio('audios/do.mp3'),
    re: new Audio('audios/re.mp3'),
    mi: new Audio('audios/mi.mp3'),
    fa: new Audio('audios/fa.mp3'),
    sol: new Audio('audios/sol.mp3'),
    la: new Audio('audios/la.mp3'),
    si: new Audio('audios/si.mp3'),
}
//colocar o som de cada tecla e já era
const Tteclas = {
    a: ()=>{
        audios.do.play();
        teclas_white[0].classList.add('select');
        
        setTimeout(
            ()=>{
                audios.do.currentTime = 0;
                audios.do.pause();
                teclas_white[0].classList.remove('select');
            },1000
        );
    },
    s: ()=>{
        teclas_white[1].classList.add('select')
        audios.re.play()

        setTimeout(
            ()=>{
                audios.re.currentTime = 0;
                audios.re.pause();
                teclas_white[1].classList.remove('select');
            },1000
        );
    },
    d: ()=>{
        teclas_white[2].classList.add('select')
        audios.mi.play()

        setTimeout(
            ()=>{
                audios.mi.currentTime = 0;
                audios.mi.pause();
                teclas_white[2].classList.remove('select');
            },1000
        );
    },
    f: ()=>{
        teclas_white[3].classList.add('select')
        audios.fa.play()

        setTimeout(
            ()=>{
                audios.fa.currentTime = 0;
                audios.fa.pause();
                teclas_white[3].classList.remove('select');
            },1000
        );
    },
    j: ()=>{
        teclas_white[4].classList.add('select')
        audios.sol.play()

        setTimeout(
            ()=>{
                audios.sol.currentTime = 0;
                audios.sol.pause();
                teclas_white[4].classList.remove('select');
            },1000
        );
    },
    k: ()=>{
        teclas_white[5].classList.add('select')
        audios.la.play()

        setTimeout(
            ()=>{
                audios.la.currentTime = 0;
                audios.la.pause();
                teclas_white[5].classList.remove('select');
            },1000
        );
    },
    l: ()=>{
        teclas_white[6].classList.add('select')
        audios.si.play()

        setTimeout(
            ()=>{
                audios.si.currentTime = 0;
                audios.si.pause();
                teclas_white[6].classList.remove('select');
            },1000
        );
    }
}

document.body.addEventListener('keydown', tocarNota);

function tocarNota(e){
    if(Tteclas[e.key]){
        Tteclas[e.key](e.target);
    }
}