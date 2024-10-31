function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if (de >= ate) {
        alert('O valor "Do número" deve ser menor que o "Até o número". Tente novamente!');
        return;      
    } else if (quantidade > (ate - de + 1)) {
        alert('O valor "Quantidade" deve ser menor ou igual ao intervalo informado no "Do número" e no "Até o número". Tente novamente!');
        return;      
    }

    let numerosSorteados = [];
    let numero;
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        
        //Includes verifica se o número já foi sorteado
        while (numerosSorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        numerosSorteados.push(numero);
    }
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados} </label>`;
    
    alterarStatusBotaoReiniciar();
}

function obterNumeroAleatorio(min, max) {
    //Math.floor arredonda para um inteiro mais próximo
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotaoReiniciar() {
    let botaoReiniciar = document.getElementById("btn-reiniciar");
    
    if (botaoReiniciar.classList.contains("container__botao-desabilitado")) {
        botaoReiniciar.classList.remove("container__botao-desabilitado");
        botaoReiniciar.classList.add("container__botao");
    } else {
        botaoReiniciar.classList.remove("container__botao");
        botaoReiniciar.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {    
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotaoReiniciar();
}