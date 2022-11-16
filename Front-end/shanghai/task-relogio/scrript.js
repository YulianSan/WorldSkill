const numeros = Array.from(document.getElementsByClassName('numero'));
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
    [],
    [
        
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
    [],
    [],
    [],
    [],
    []

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
function desenharNumero(){
    pontos[0].forEach(v =>{
        v(numeros[0]);
        
    });
    pontos[1].forEach(v =>{
        v(numeros[1]);
        
    });

    pontos[4].forEach(v =>{
        v(numeros[2]);
        
    })/
    pontos[1].forEach(v =>{
        v(numeros[3]);
        
    })
}
desenharNumero();
