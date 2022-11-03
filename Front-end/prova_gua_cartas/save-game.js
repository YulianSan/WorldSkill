const forms_save = document.getElementById("salvar");
const inp_name = document.getElementById('name');
const btn_save = document.getElementById('save-game');

btn_save.disabled = true;

forms_save.addEventListener('submit', saveGame);
inp_name.addEventListener('input', buttonIsActive);

function saveGame(e) {
    e.preventDefault();

    if(!localStorage.getItem( inp_name.value ) ){
        localStorage.setItem(`${inp_name.value}`, tentativas);
        telas.welcome.classList.remove('hidden');
        telas.game.classList.add('hidden');
        telas.ganhou.classList.add('hidden');
    }
    
}

function buttonIsActive() {
    
    if(this.value.length > 0){

        if( localStorage.getItem( this.value ) ){
            btn_save.disabled = true;
            document.getElementById('error').textContent = 'Nome já existe';
        }else{
            document.getElementById('error').textContent = '';
            btn_save.disabled = false;
        }

    }
}

function carregarRank() {
    let rowRank = document.getElementById('rank-row');
    let arrayJogadores = [];
    let top10 = [];
    
    rowRank.innerHTML = "";

    for( const i in localStorage){
        if( i == "length")
            break;

        arrayJogadores.push({
            nome: i, 
            tentativas: Number(localStorage[i])
        });

    }

    arrayJogadores.sort(
        function(a, b){

            if( a.tentativas < b.tentativas )
                return -1
            if( a.tentativas > b.tentativas )
                return 1
            
            return 0;
        }
    );
    top10 = arrayJogadores;
    top10.splice(10, top10.length - 10)
    console.log(top10)

    for (const jogador in top10) {
        rowRank.innerHTML += `<tr> <td>${top10[jogador].nome}</td> <td>${top10[jogador].tentativas}</td> </tr>`;
        
    }
}

carregarRank();