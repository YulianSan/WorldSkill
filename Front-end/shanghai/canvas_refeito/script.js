const inp_img = document.getElementById('inp_img');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d', {willReadFrequently: true});

const img = new Image();
let canMove = false;
let proporcao = 0;

inp_img.addEventListener('change', loadImage);
canvas.addEventListener('mouseenter', mouseEnter);
canvas.addEventListener('mouseleave', mouseOut);
canvas.addEventListener('mousemove', mouseMove);


function mouseEnter(){
    canMove = true;
}

function mouseOut(){
    canMove = false;
}

function mouseMove(e){
    if(!canMove){
        return;
    }
    

    let positions = {
        x: e.pageX - e.target.offsetLeft,
        y: e.pageY - e.target.offsetTop,
        xWithMargin: e.pageX,
        yWithMargin: e.pageY,
    }

    let colorRGB = getColorPosition(positions);

    showColor(positions, colorRGB);
    showLupa(positions);
}

function showColor({x, y, xWithMargin, yWithMargin}, colorRGB){
    let divShowColor = document.getElementById('show-color');
    if(!divShowColor){
        divShowColor = document.createElement('div');
        divShowColor.id = 'show-color';
        document.body.append(divShowColor);
    }

    divShowColor.textContent = colorRGB;
    divShowColor.style.left = xWithMargin + 'px';
    divShowColor.style.top = yWithMargin + 'px';


}
function getColorPosition({x, y}){
    let dataColor = ctx.getImageData(
        x,
        y,
        1,
        1
    ).data;

    // return color rgb
    return `rgb(${dataColor[0]},${dataColor[1]},${dataColor[2]})`;
}


function showLupa({x, y, xWithMargin, yWithMargin}){
    let canvasLupa = document.getElementById('canvas-lupa');
    let size = 100;
    let zoom = .5 * size;

    if(!canvasLupa){
        canvasLupa = document.createElement('canvas');
        canvasLupa.id = 'canvas-lupa';
        canvasLupa.width = size;
        canvasLupa.height = size;
        document.body.append(canvasLupa);
    }

    let ctx_lupa = canvasLupa.getContext('2d');
    canvasLupa.style.left = xWithMargin + 'px';
    canvasLupa.style.top = yWithMargin + 'px';

    ctx_lupa.drawImage(
        img,
        x/proporcao - zoom/2,
        y/proporcao - zoom/2,
        zoom,
        zoom,
        0,
        0,
        100,
        100,
    )

    console.log(img.width, img.height)



}
function loadImage(e){
    let size = {
        maxWidth: 1000,
        maxHeight: 1000
    }

    let file = new FileReader();

    file.onload = ()=>{
        let base64 = file.result;
        img.src = base64;

        img.onload = ()=>{
            proporcao = 1000/Math.max(img.width, img.height);
            img.width = img.width * proporcao;
            img.height = img.height * proporcao;

            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(
                img,
                0,
                0,
                img.width,
                img.height
            );

        }
    }
    file.readAsDataURL(e.target.files[0]);
}