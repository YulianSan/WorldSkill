const numeros = Array.from(document.getElementsByClassName('numero'));
let data_atual = new Date();
setInterval(
    ()=>{
        data_atual.setSeconds(data_atual.getSeconds()+1);
        desenharNumero();
    },1000
)
const pontos = [
    [
        (e)=>drawRow(0, 1,5, e),
        (e)=>drawRow(1, 0, 7, e),
        (e)=>drawColumn(2,7,0,2,e),
        (e)=>drawColumn(2,7,5,2,e),
        (e)=>drawRow(8, 0, 7, e),
        (e)=>drawRow(9, 1, 5, e),
    ],
    [
        (e)=>drawColumn(0,9,3,2,e),
        (e)=>drawRow(1, 1,2, e),
        (e)=>drawRow(9, 0,7, e),
    ],
    [
        (e)=>drawRow(0, 1, 5, e),
        (e)=>drawRow(1, 0, 2, e),
        (e)=>drawRow(1, 5, 2, e),
        (e)=>drawRow(2, 5, 2, e),
        (e)=>drawRow(3, 5, 2, e),
        (e)=>drawRow(4, 4, 2, e),
        (e)=>drawRow(5, 3, 2, e),
        (e)=>drawRow(6, 2, 2, e),
        (e)=>drawRow(7, 1, 2, e),
        (e)=>drawRow(8, 0, 2, e),
        (e)=>drawRow(9, 0, 7, e),
    ],
    [
        (e)=>drawRow(0, 0, 7, e), 
        (e)=>drawRow(1, 5, 2, e), 
        (e)=>drawRow(2, 4, 2, e), 
        (e)=>drawRow(3, 3, 2, e), 
        (e)=>drawRow(4, 2, 3, e), 
        (e)=>drawRow(5, 4, 2, e), 
        (e)=>drawRow(6, 5, 2, e), 
        (e)=>drawRow(7, 5, 2, e), 
        (e)=>drawRow(8, 5, 2, e), 
        (e)=>drawRow(9, 1, 5, e), 
        (e)=>drawRow(8, 0, 2, e), 
    ],
    [
        (e)=>drawColumn(0,9,4,2,e),
        (e)=>drawColumn(4,5,0,2,e),
        (e)=>drawRow(9, 3,4, e),
        (e)=>drawRow(5, 2,5, e),
        (e)=>drawRow(3, 1,2, e),
        (e)=>drawRow(2, 2,2, e),
        (e)=>drawRow(1, 3,1, e),
    ],
    [
        (e)=>drawRow(0, 0, 7, e), 
        (e)=>drawRow(1, 0, 2, e), 
        (e)=>drawRow(2, 0, 2, e), 
        (e)=>drawRow(3, 0, 6, e), 
        (e)=>drawColumn(4,8,5,2,e),
        (e)=>drawRow(9, 1, 5, e), 
        (e)=>drawRow(8, 0, 2, e), 
    ],
    [
        (e)=>drawRow(0, 1, 5, e),
        (e)=>drawRow(1, 0, 2, e),
        (e)=>drawRow(2, 0, 2, e),
        (e)=>drawRow(3, 0, 2, e),
        (e)=>drawRow(4, 0, 2, e),
        (e)=>drawRow(5, 0, 2, e),
        (e)=>drawRow(6, 0, 2, e),
        (e)=>drawRow(7, 0, 2, e),
        (e)=>drawRow(8, 0, 2, e),
        (e)=>drawRow(8, 5, 2, e),
        (e)=>drawRow(7, 5, 2, e),
        (e)=>drawRow(6, 5, 2, e),
        (e)=>drawRow(5, 2, 4, e),
        (e)=>drawRow(9, 1, 5, e),
        (e)=>drawRow(1, 5, 2, e),
    ],
    [
        (e)=>drawRow(0, 0, 9, e),
        (e)=>drawRow(1, 5, 2, e),
        (e)=>drawRow(2, 5, 2, e),
        (e)=>drawRow(3, 5, 2, e),
        (e)=>drawRow(4, 4, 2, e),
        (e)=>drawRow(5, 3, 2, e),
        (e)=>drawRow(6, 2, 2, e),
        (e)=>drawRow(7, 1, 2, e),
        (e)=>drawRow(8, 0, 2, e),
        (e)=>drawRow(9, 0, 2, e),
    ],
    [
        (e)=>drawRow(0, 1, 5, e),
        (e)=>drawRow(1, 0, 7, e),
        (e)=>drawRow(4, 1, 5, e),
        (e)=>drawRow(5, 1, 5, e),
        (e)=>drawColumn(5,7,0,2,e),
        (e)=>drawColumn(2,3,0,2,e),
        (e)=>drawColumn(2,3,5,2,e),
        (e)=>drawColumn(5,7,5,2,e),
        (e)=>drawRow(8, 0, 7, e),
        (e)=>drawRow(9, 1, 5, e),
    ],
    [
        (e)=>drawRow(0, 1, 5, e),
        (e)=>drawRow(1, 0, 2, e),
        (e)=>drawRow(1, 5, 2, e),
        (e)=>drawRow(2, 0, 2, e),
        (e)=>drawRow(2, 5, 2, e),
        (e)=>drawRow(3, 0, 2, e),
        (e)=>drawRow(3, 5, 2, e),
        (e)=>drawRow(4, 0, 2, e),
        (e)=>drawRow(4, 5, 2, e),
        (e)=>drawRow(5, 1, 6, e),
        (e)=>drawRow(6, 5, 2, e),
        (e)=>drawRow(7, 5, 2, e),
        (e)=>drawRow(8, 5, 2, e),
        (e)=>drawRow(9, 1, 5, e),
        (e)=>drawRow(8, 0, 2, e),
    ]

];

// r: row, i: inicio, q: quantidade
function drawRow( r, i, q, elemento){
    for(let index = i; index < q + i; index++)
    elemento.children[index + r*7].style.background = "black";
}

// ir: inicio, i: inicio linha, f: fim
function drawColumn(i, f, ir, q, elemento){

    for(let linha = i; linha <= f; linha++)
        for(let index = ir; index < q + ir; index++)
            elemento.children[linha * 7 + index].style.background = "black";
}
function clear(){
    numeros.forEach(element => {
        for(let linha = 0; linha < 70; linha++)
            element.children[linha].style.background = "white";

    });
}
function desenharNumero(){
    clear();
    let horas = data_atual.getHours().toString().padStart(2, '0');
    let minutos = data_atual.getMinutes().toString().padStart(2, '0');
    let segundos = data_atual.getSeconds().toString().padStart(2, '0');

    pontos[horas[0]].forEach(v =>{
        v(numeros[0]);
        
    });
    pontos[horas[1]].forEach(v =>{
        v(numeros[1]);
        
    });

    pontos[minutos[0]].forEach(v =>{
        v(numeros[2]);
        
    })
    pontos[minutos[1]].forEach(v =>{
        v(numeros[3]);
        
    })
    pontos[segundos[0]].forEach(v =>{
        v(numeros[4]);
        
    })
    pontos[segundos[1]].forEach(v =>{
        v(numeros[5]);
        
    })
}

desenharNumero();
