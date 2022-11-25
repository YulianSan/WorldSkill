const numeros = Array.from(document.getElementsByClassName('numero'));
let data_atual = new Date();
let data_old = new Date();
setInterval(
    ()=>{
        data_atual.setSeconds(data_atual.getSeconds()+1);
        desenharNumero();
        data_old.setSeconds(data_old.getSeconds()+1);
    },1000
)
const pontos = [
    [
        (e, o)=>drawRow(0, 1,5, e, o),
        (e, o)=>drawRow(1, 0, 7, e, o),
        (e, o)=>drawColumn(2,7,0,2,e, o),
        (e, o)=>drawColumn(2,7,5,2,e, o),
        (e, o)=>drawRow(8, 0, 7, e, o),
        (e, o)=>drawRow(9, 1, 5, e, o),
    ],
    [
        (e, o)=>drawColumn(0,9,3,2,e, o),
        (e, o)=>drawRow(1, 1,2, e, o),
        (e, o)=>drawRow(9, 0,7, e, o),
    ],
    [
        (e, o)=>drawRow(0, 1, 5, e, o),
        (e, o)=>drawRow(1, 0, 2, e, o),
        (e, o)=>drawRow(1, 5, 2, e, o),
        (e, o)=>drawRow(2, 5, 2, e, o),
        (e, o)=>drawRow(3, 5, 2, e, o),
        (e, o)=>drawRow(4, 4, 2, e, o),
        (e, o)=>drawRow(5, 3, 2, e, o),
        (e, o)=>drawRow(6, 2, 2, e, o),
        (e, o)=>drawRow(7, 1, 2, e, o),
        (e, o)=>drawRow(8, 0, 2, e, o),
        (e, o)=>drawRow(9, 0, 7, e, o),
    ],
    [
        (e, o)=>drawRow(0, 0, 7, e, o), 
        (e, o)=>drawRow(1, 5, 2, e, o), 
        (e, o)=>drawRow(2, 4, 2, e, o), 
        (e, o)=>drawRow(3, 3, 2, e, o), 
        (e, o)=>drawRow(4, 2, 3, e, o), 
        (e, o)=>drawRow(5, 4, 2, e, o), 
        (e, o)=>drawRow(6, 5, 2, e, o), 
        (e, o)=>drawRow(7, 5, 2, e, o), 
        (e, o)=>drawRow(8, 5, 2, e, o), 
        (e, o)=>drawRow(9, 1, 5, e, o), 
        (e, o)=>drawRow(8, 0, 2, e, o), 
    ],
    [
        (e, o)=>drawColumn(0,9,4,2,e, o),
        (e, o)=>drawColumn(4,5,0,2,e, o),
        (e, o)=>drawRow(9, 3,4, e, o),
        (e, o)=>drawRow(5, 2,5, e, o),
        (e, o)=>drawRow(3, 1,2, e, o),
        (e, o)=>drawRow(2, 2,2, e, o),
        (e, o)=>drawRow(1, 3,1, e, o),
    ],
    [
        (e, o)=>drawRow(0, 0, 7, e, o), 
        (e, o)=>drawRow(1, 0, 2, e, o), 
        (e, o)=>drawRow(2, 0, 2, e, o), 
        (e, o)=>drawRow(3, 0, 6, e, o), 
        (e, o)=>drawColumn(4,8,5,2,e, o),
        (e, o)=>drawRow(9, 1, 5, e, o), 
        (e, o)=>drawRow(8, 0, 2, e, o), 
    ],
    [
        (e, o)=>drawRow(0, 1, 5, e, o),
        (e, o)=>drawRow(1, 0, 2, e, o),
        (e, o)=>drawRow(2, 0, 2, e, o),
        (e, o)=>drawRow(3, 0, 2, e, o),
        (e, o)=>drawRow(4, 0, 2, e, o),
        (e, o)=>drawRow(5, 0, 2, e, o),
        (e, o)=>drawRow(6, 0, 2, e, o),
        (e, o)=>drawRow(7, 0, 2, e, o),
        (e, o)=>drawRow(8, 0, 2, e, o),
        (e, o)=>drawRow(8, 5, 2, e, o),
        (e, o)=>drawRow(7, 5, 2, e, o),
        (e, o)=>drawRow(6, 5, 2, e, o),
        (e, o)=>drawRow(5, 2, 4, e, o),
        (e, o)=>drawRow(9, 1, 5, e, o),
        (e, o)=>drawRow(1, 5, 2, e, o),
    ],
    [
        (e, o)=>drawRow(0, 0, 9, e, o),
        (e, o)=>drawRow(1, 5, 2, e, o),
        (e, o)=>drawRow(2, 5, 2, e, o),
        (e, o)=>drawRow(3, 5, 2, e, o),
        (e, o)=>drawRow(4, 4, 2, e, o),
        (e, o)=>drawRow(5, 3, 2, e, o),
        (e, o)=>drawRow(6, 2, 2, e, o),
        (e, o)=>drawRow(7, 1, 2, e, o),
        (e, o)=>drawRow(8, 0, 2, e, o),
        (e, o)=>drawRow(9, 0, 2, e, o),
    ],
    [
        (e, o)=>drawRow(0, 1, 5, e, o),
        (e, o)=>drawRow(1, 0, 7, e, o),
        (e, o)=>drawRow(4, 1, 5, e, o),
        (e, o)=>drawRow(5, 1, 5, e, o),
        (e, o)=>drawColumn(5,7,0,2,e, o),
        (e, o)=>drawColumn(2,3,0,2,e, o),
        (e, o)=>drawColumn(2,3,5,2,e, o),
        (e, o)=>drawColumn(5,7,5,2,e, o),
        (e, o)=>drawRow(8, 0, 7, e, o),
        (e, o)=>drawRow(9, 1, 5, e, o),
    ],
    [
        (e, o)=>drawRow(0, 1, 5, e, o),
        (e, o)=>drawRow(1, 0, 2, e, o),
        (e, o)=>drawRow(1, 5, 2, e, o),
        (e, o)=>drawRow(2, 0, 2, e, o),
        (e, o)=>drawRow(2, 5, 2, e, o),
        (e, o)=>drawRow(3, 0, 2, e, o),
        (e, o)=>drawRow(3, 5, 2, e, o),
        (e, o)=>drawRow(4, 0, 2, e, o),
        (e, o)=>drawRow(4, 5, 2, e, o),
        (e, o)=>drawRow(5, 1, 6, e, o),
        (e, o)=>drawRow(6, 5, 2, e, o),
        (e, o)=>drawRow(7, 5, 2, e, o),
        (e, o)=>drawRow(8, 5, 2, e, o),
        (e, o)=>drawRow(9, 1, 5, e, o),
        (e, o)=>drawRow(8, 0, 2, e, o),
    ]

];

// r: row, i: inicio, q: quantidade
function drawRow( r, i, q, elemento, o){
    for(let index = i; index < q + i; index++){
        elemento.children[index + r*7].style.background = "black";
        elemento.children[index + r*7].style.zIndex = "2";
        animationNumber(elemento.children[index + r*7], o);
        
    }
}

function animationNumber(e, o){
    let antes = data_old.getHours();
    let depois = data_atual.getHours();
    if(o == 'm'){
        antes = data_old.getMinutes();
        depois = data_atual.getMinutes();
    }
    if(o == 's'){
        antes = data_old.getSeconds();
        depois = data_atual.getSeconds();
    }

    if(antes != depois){
        let posX = (Math.random() * 300 - 150) + 'px';
        let posY = (Math.random() * 300 - 150) + 'px';
        
        e.style.setProperty('--left', posX);
        e.style.setProperty('--top', posY);

        e.style.animation = "none";
        setTimeout(()=>{
            e.style.animation = "animationTransition .5s linear";
        }, 10);
    }
}
// ir: inicio, i: inicio linha, f: fim
function drawColumn(i, f, ir, q, elemento, o){

    for(let linha = i; linha <= f; linha++)
        for(let index = ir; index < q + ir; index++){
            elemento.children[linha * 7 + index].style.background = "black";
            elemento.children[linha * 7 + index].style.zIndex = "2";
            animationNumber(elemento.children[linha * 7 + index], o);
        }
}
function clear(){
    numeros.forEach(element => {
        for(let linha = 0; linha < 70; linha++){
            element.children[linha].style.background = "white";
            element.children[linha].style.zIndex = "1";
        }

    });
}
function desenharNumero(){
    clear();
    let horas = data_atual.getHours().toString().padStart(2, '0');
    let minutos = data_atual.getMinutes().toString().padStart(2, '0');
    let segundos = data_atual.getSeconds().toString().padStart(2, '0');

    pontos[horas[0]].forEach(v =>{
        v(numeros[0], 'h');
        
    });
    pontos[horas[1]].forEach(v =>{
        v(numeros[1], 'h');
        
    });

    pontos[minutos[0]].forEach(v =>{
        v(numeros[2], 'm');
        
    })
    pontos[minutos[1]].forEach(v =>{
        v(numeros[3], 'm');
        
    })
    pontos[segundos[0]].forEach(v =>{
        v(numeros[4], 's');
        
    })
    pontos[segundos[1]].forEach(v =>{
        v(numeros[5], 's');
        
    })
}

desenharNumero();
