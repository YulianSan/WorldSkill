const inp_color = document.getElementById('inp_color');
const result  = document.getElementById('results');

inp_color.addEventListener('change', getColors);

function getColors(){
    let rgb = /^rgb\(([0-2]{0,1}[0-5]{1,2},){2}[0-2]{0,1}[0-5]{1,2}\)$/;
    let hex = /^#([0-9a-f]){0,3}([0-9a-f]){3,3}$/;

    if(rgb.test(this.value)) return isRGB(this.value);
    if(hex.test(this.value)) return isHex(this.value);
    else isInvalid();
}


function isRGB(v) {
    let values = v.split(/[^0-9]/).filter(v => {
        return v != '';
    });

    let hex = values.map( v =>{
        return Number(v).toString(16).padStart(2, '0');
    });

    result.innerHTML = `The color type is: RGB<br/> 
                        HEX value: #${hex.join('')}<br/>
                        RGB value: ${v}`;
}

function isHex(v) {
    let values = v.slice(1).split('');
    let rgb = [];
    for (let i = 0; i < 3; i++) {
        if(v.length > 4){
            rgb.push(parseInt( values[i*2] + values[i*2+1],16)); 
        }
        else{
            rgb.push(parseInt(values[i] + values[i],16)); 
        }

    }

    result.innerHTML = `The color type is: HEX<br/> 
                        HEX value: ${v}<br/>
                        RGB value: rgb(${rgb.join(',')})`;
    // console.log(v)
}
function isInvalid(){
    result.textContent = "Error"
}
