const save_png = document.getElementById('save-png');
const save_jpg = document.getElementById('save-jpg');

let img_canvas = document.createElement('a');

save_png.addEventListener('click', saveCanvasPng);
save_jpg.addEventListener('click', saveCanvasJpg);

function saveCanvasPng(){
    let urlImg = canvas.toDataURL('image/png');
    
    img_canvas.download = 'sua-img.png';
    img_canvas.href = urlImg;
    img_canvas.click();

}

function saveCanvasJpg(){
    let urlImg = canvas.toDataURL('image/jpeg');

    img_canvas.download = 'sua-img.jpg';
    img_canvas.href = urlImg;
    img_canvas.click();

}