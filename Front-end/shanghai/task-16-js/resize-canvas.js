const resize = Array.from(document.getElementsByClassName('resize'));
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let isResize = false;
let PosInicio = {x: 0, y: 0, i: -1};
resize.forEach( addEventResize );


function addEventResize(v, i){
    
    v.addEventListener('mousedown', (e)=>{inicio( e, i )});
    // v.addEventListener('mouseup', fim);
}
document.addEventListener('mouseup', fim);
document.addEventListener('mousemove', redimencionar);

function inicio(e, i){
    switch (i) {
        case 0:
            document.body.style.cursor = "e-resize"
            PosInicio.x = e.pageX;
        break;

        case 1:
            PosInicio.y = e.pageY;
            document.body.style.cursor = "n-resize"
        break;
            
        case 2:
            PosInicio.x = e.pageX;
            PosInicio.y = e.pageY;
            document.body.style.cursor = "se-resize"
        break;
    }
    PosInicio.i = i;

    isResize = true;
}

function redimencionar(e){
    if(!isResize) return;

    let diffPosX;
    let diffPosY;

    switch (PosInicio.i) {
        case 0:
            diffPosX = e.pageX - PosInicio.x;
            PosInicio.x = e.pageX;
            canvas.width = canvas.width + diffPosX;
        break;
        
        case 1:
            diffPosY = e.pageY - PosInicio.y;
            PosInicio.y = e.pageY;
            canvas.height = canvas.height + diffPosY;
        break;
            
        case 2:
            diffPosX = e.pageX - PosInicio.x;
            diffPosY = e.pageY - PosInicio.y;
            
            PosInicio.x = e.pageX;
            PosInicio.y = e.pageY;

            canvas.width = canvas.width + diffPosX;
            canvas.height = canvas.height + diffPosY;
        break;
    }
    

}
function fim(){
    document.body.style.cursor = "default";
    isResize = false;
    isDraw = false;
}
