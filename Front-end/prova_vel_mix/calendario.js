const inp_calendario = document.getElementById('inp_calendario');
const table_days = document.getElementById('days');
const controler_calendario = document.getElementById('is_open');
const setMonth = document.getElementsByClassName('control');
const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];


setMonth[0].addEventListener('click', ()=>{setValueInpMonth(-1)});
setMonth[1].addEventListener('click', ()=>{setValueInpMonth(1)});

controler_calendario.addEventListener('change', (e)=>{
    if(!html_table) setValueTable();
});

const html_default = `<tr>
                        <td>Su</td>
                        <td>Mo</td>
                        <td>Tu</td>
                        <td>We</td>
                        <td>Th</td>
                        <td>Fr</td>
                        <td>Sa</td>
                    </tr>`;
let html_table = ``;
inp_calendario.textContent =  new Date().toLocaleDateString('pt-BR');

function setValue(day, month, year){

    inp_calendario.textContent = day.toString().padStart(2,0) + '/' + month.toString().padStart(2,0) + '/' + year.toString().padStart(2,0);
    
}

function getValue() {
    var dataSel = inp_calendario.textContent.match(/\d{1,}/g);

    return dataSel;
}
function setValueInp(day){
    var dateOld = getValue();

    setValue(Number(day), dateOld[1], dateOld[2]);

}
function setValueInpMonth(v){
    var dateOld = getValue();

    dateOld[1] = (Number(dateOld[1]) - 1).toString();
    
    var dateNew = new Date(dateOld[2], dateOld[1] ,dateOld[0]);
    
    dateNew.setMonth(dateNew.getMonth() + v);
    
    if((Number(dateOld[1]) + 1)%12 != dateNew.getMonth()){
        dateNew.setMonth((Number(dateOld[1]) + 1)%12)
        dateNew.setDate(1);
    }

    setValue(dateNew.getDate(), dateNew.getMonth() + 1, dateNew.getFullYear());
    
    setValueTable();

}
function setValueTable(){
    let dateChoose = getValue();

    let dataMonth = getDays(dateChoose[2], dateChoose[1]);

    document.getElementById('mes').textContent = meses[dateChoose[1] - 1] + " " +dateChoose[2];

    table_days.innerHTML = html_default;
    html_table = '<tr>';

    for (let i = 0; i < dataMonth.init; i++) {
        html_table += '<td class="rest">20</td>' 
    }

    for(let i = 1; i <= dataMonth.days.length; i++){
        if((i + dataMonth.init - 1) % 7 == 0){
            html_table += '</tr><tr>';
        }
        html_table += `<td>${i}</td>`
    }
    
    let rest = 1;
    let resto = 7 - ((dataMonth.init + dataMonth.days.length) % 7);
    if(resto != 7)
        for (let i = (dataMonth.init + dataMonth.days.length) % 7 ; i < 7; i++) {
            html_table += `<td class="rest">${rest}</td>`;
            rest++;
        }

    html_table += '</tr>';

    table_days.innerHTML += html_table;
    const days = Array.from(document.querySelectorAll('tbody tr td:not(.rest)'));
    days.forEach( v => v.addEventListener('click', (e)=>{setValueInp(e.target.textContent)}));
}

function getDays(year, month){
    month = Number(month)- 1;

    var date = new Date(year, month, '1');
    var days = [];

    var init = date.getDay();
    while(date.getMonth() === month){
        
        days.push(date.getDate());
        date.setDate(date.getDate() + 1);
    }

    return {
        days,
        init
    }
}