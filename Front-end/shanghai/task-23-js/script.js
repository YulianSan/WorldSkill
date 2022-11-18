const min_price = document.getElementById('min');
const max_price = document.getElementById('max');
const progress  = document.getElementsByClassName('progress-blue')[0];
let space = 100;
let valueMax = 1000;

min_price.addEventListener('input', valueMinChange);
max_price.addEventListener('input', valueMaxChange);

function valueMinChange(){
    let difference_price = max_price.value - min_price.value;
    if(difference_price < space) {
        min_price.value = Number(max_price.value) - space;
    }
    drawProgress();
}

function valueMaxChange(e){
    let difference_price = max_price.value - min_price.value;
    if(difference_price < space) {
        max_price.value = Number(min_price.value) + space;
    }
    drawProgress();
}

function updateValues(){
    document.getElementById('min-value').textContent = `$ ${min_price.value}`;
    document.getElementById('max-value').textContent = `$ ${max_price.value}`;
}
function drawProgress(){
    progress.style.left = `${100*(min_price.value/valueMax)}%`;
    progress.style.width = `${100*((max_price.value - min_price.value)/valueMax)}%`;
    updateValues();
}