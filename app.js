let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroaleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function mensagenInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Digite um número de 1 a 10');
}

mensagenInicial();

function verificarChute() {
    let = chute = document.querySelector('input').value;
    
    if (chute == numeroaleatorio) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagententativa = `Voce acertou o numero secreto com ${tentativas} ${palavratentativa}`;
        exibirTextoNaTela('p', mensagententativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroaleatorio) {
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++;
        limpaCampo();
    }
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosNaLista = listaDeNumeroSorteados.length;

    if (quantidadeDeNumerosNaLista == numeroLimite) {
        listaDeNumeroSorteados = [];
    }

    if(listaDeNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
}


function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroaleatorio = gerarNumeroAleatorio();
    tentativas = 1;
    mensagenInicial();
    limpaCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}