function pontuacaoString(...string){
    let pontuacao = []; // Array que vai conter todas as pontuações

    string.forEach( (v, i) =>{ // foreach por cada palavra
        v.split('').forEach( p =>{ // separa cada letra da string e faz um foreach
            if(!pontuacao[i]) pontuacao[i] = 0; // inicia o array se ele ainda ñ foi iniciado
            pontuacao[i] += (p.toLowerCase().charCodeAt(0) - 96); // pega o valor da letra
        });
    });

    let maior = Math.max(...pontuacao); // pega a maior pontuação
    let indexMaior = pontuacao.indexOf(maior); // procura o primeiro elemento com esse valor
    return string[indexMaior]; //retorna a string com maior pontuação
}

console.log(pontuacaoString('a', 'abdc', 'dabc'));