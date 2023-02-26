const inp_file = document.getElementById('inp_file');
const canvas = document.getElementById('canvas');
const base_canvas = document.getElementById('base-canvas');
const ctx = canvas.getContext('2d', { willReadFrequently: true });
let isMouseMove = false;
let isMouseEnter = false;
let lastPosition = {};
let img = new Image();

inp_file.addEventListener('change', addImageCanvas);
document.body.addEventListener('mousemove', mouseMove);
base_canvas.addEventListener('mouseleave', mouseOut);
base_canvas.addEventListener('mouseenter', mouseEnter);

// setInterval(showColor, 1000);

function showColor(){
    if(!isMouseEnter){
        return;
    }
    // removePop();
    const imageData = ctx.getImageData(
        lastPosition.x, 
        lastPosition.y, 
        1, 1
    ).data;

    const colorRGB = `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`;

    let elementShowColor = document.getElementsByClassName('mostraCor')[0];
    if(!elementShowColor){
        elementShowColor = document.createElement('div');
        elementShowColor.classList.add('mostraCor');

    }

    elementShowColor.style.left = lastPosition.x + 'px';
    elementShowColor.style.top = lastPosition.y + 'px';
    elementShowColor.textContent = colorRGB;

    base_canvas.appendChild(elementShowColor);
    


}
function mouseMove(e){
    isMouseMove = true;
    if(isMouseEnter){
        console.log(e);
        lastPosition = {
            x: e.pageX - canvas.offsetLeft,
            y: e.pageY - canvas.offsetTop,
        }
        createLupa();
        showColor();
    }

}
function mouseEnter(){
    isMouseEnter = true;
}
function mouseOut(){
    isMouseEnter = false;
}
function addImageCanvas(e){
    let base64String;
    var reader = new FileReader();
      
    reader.onload = function () {
        base64String = reader.result;
        img.src = base64String;

        img.onload = ()=>{
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        }

    }
    reader.readAsDataURL(this.files[0]);


}

function createLupa(){
    let lupa_canvas =  document.getElementById('lupa');
    let tamanho = 100;
    let zoom = 0.11 * 100; //10%

    if(!lupa_canvas){
        lupa_canvas = document.createElement('canvas');
        lupa_canvas.id = 'lupa';
        lupa_canvas.width = tamanho;
        lupa_canvas.height = tamanho;
        base_canvas.appendChild(lupa_canvas);
    }
    
    let lupa_ctx = lupa_canvas.getContext('2d');

    lupa_ctx.fillStyle = '#ffffff';
    lupa_ctx.fillRect(0, 0, lupa_canvas.width, lupa_canvas.height);
    
    lupa_canvas.style.left = lastPosition.x + 'px';
    lupa_canvas.style.top = lastPosition.y + 'px';
    
    lupa_ctx.drawImage(
        img, 
        lastPosition.x - zoom/2, 
        lastPosition.y - zoom/2, 
        zoom, zoom, 
        0, 0, 
        tamanho, tamanho
    );

    
        
        //desenhar um contorno para cada pixel
    for (let i = 1; i <= zoom; i++) {
            lupa_ctx.strokeStyle = '#cccccccc';
            lupa_ctx.beginPath();
                lupa_ctx.moveTo(i * zoom, 0);
                lupa_ctx.lineTo(i * zoom, tamanho);
            lupa_ctx.stroke();
                
            lupa_ctx.beginPath();
                lupa_ctx.moveTo(0, i * zoom);
                lupa_ctx.lineTo(tamanho, i * zoom);
            lupa_ctx.stroke();
    }
    
    //desenhar o pixel selecionado
    lupa_ctx.strokeStyle = '#ff0000';
    lupa_ctx.strokeRect(tamanho/2 - zoom/2, tamanho/2 - zoom/2, zoom, zoom);
    
}

function removePop(){
    let removePop = document.getElementsByClassName('mostraCor')[0];
    if(removePop) base_canvas.removeChild(removePop);
}