const canvas = document.getElementById('canvas');
const ctx    = canvas.getContext('2d');
const colors = ['#ff0','#f00','#f0f','#00f', '#0f0'];
const bolhas = [];


canvas.addEventListener('mousemove', trilha)
function trilha(e){

    let bolha = {
        x: e.clientX,
        y: e.clientY,
        velX: Math.floor(Math.random() * 8) - 4,
        velY: Math.floor(Math.random() * 8) - 4,
        size: Math.floor(Math.random() * 40),
        scale: 1,
        color: colors[Math.floor(Math.random()*colors.length)]
    }
    
    bolhas.push(bolha);

}

function animarTrila(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < bolhas.length; i++) {
        const e = bolhas[i];
        
        e.scale -= .03;


        if(e.scale <= 0) {
            bolhas.shift();
            continue;
        }

        e.x += e.velX;
        e.y += e.velY;
    
        
        ctx.fillStyle = e.color;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size * e.scale, 0, 2 * Math.PI);
        ctx.fill();
        
    }
        
    requestAnimationFrame(animarTrila);
}

animarTrila();