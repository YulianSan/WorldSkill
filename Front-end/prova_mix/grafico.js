const canvas = document.getElementById('grafico');
const ctx = canvas.getContext('2d');

sel_pais.addEventListener('change', (e)=>{desenharGrafico(e.target.value)});

function desenharGrafico(pais = null) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if(pais){
        for (let i = 1; i < 6; i++) {
            ctx.fillText( (300/i).toString(), 0, 100 * i); 
            
        }
        ctx.fillText( '0', 0, 600);
        
        for (let i = 1; i <= 7; i++) {
            ctx.fillText( (1985 + i * 5).toString(), 100 * i, 620); 
        
        }
        
        desenharStatus(3 , pais);
        desenharStatus(4 , pais);
        desenharStatus(5 , pais);
        
        return;

    }

    
}


function desenharStatus(index, pais) {
    ctx.lineWidth = 10;
    switch (index) {
        case 3:
                ctx.strokeStyle = "#f8be65aa";
            break;
    
        case 4:
                ctx.strokeStyle = "#da6668aa";
            break;
        case 5:
            ctx.strokeStyle = "#6f8fc2aa";
            break;
        default: 
            return;
    }
        
    ctx.beginPath();
    for (let i = 1; i <= 7; i++) {
        console.log(paises[pais][1989 + i][index])
        ctx.lineTo(10 + 100 * i, 600 - paises[pais][1989 + i][index]);
    }
    ctx.stroke(); 
    ctx.fillStyle = "#000000";
    
}
desenharGrafico('Zimbabwe');