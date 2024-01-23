function verificarChute() {

  let textoTentativa = numeroTentativa > 1 ? 'tentativas' : 'tentativa';
  let valorChutado = document.querySelector('input').value;
  if (valorChutado == numeroSecreto) {
    exibirTextoNaTela('h1', 'Voce Ganhou');
    exibirTextoNaTela('p', `Voce acertou o numero secreto com ${numeroTentativa} ${textoTentativa}`);
    habilitarBotao();
  } else {
    if (valorChutado > numeroSecreto) {
      exibirTextoNaTela('p', 'Valor chutado é Maior que o numero Secreto.');
    } else {
      exibirTextoNaTela('p', 'Valor chutado é Menor que o numero Secreto.');
    }
    numeroTentativa++;
    limparCampo();
  }
  
}

function reiniciarJogo(){
  numeroTemp = numeroSecreto;
  numeroSecreto = gerarNumeroAleatorio();
  while (numeroTemp == numeroSecreto){
    numeroSecreto = gerarNumeroAleatorio();
  }
  limparCampo();
  numeroTentativa = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
  console.log(numeroSecreto);
}

function habilitarBotao(){
  return document.getElementById('reiniciar').removeAttribute('disabled');
}



function limparCampo(){
  valorChutado = document.querySelector('input');
  valorChutado.value = '';
}

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.3});
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function exibirMensagemInicial(){
  exibirTextoNaTela('h1', 'Descubra o Número');
  exibirTextoNaTela('p', 'digite um numero de 1 a 10');
}

let numeroTentativa = 1;
let numeroSecreto = gerarNumeroAleatorio();
let numeroTemp;


exibirMensagemInicial()





