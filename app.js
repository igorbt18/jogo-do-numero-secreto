let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2})
}


function mensagemInicial () {
   exibirTextoNaTela("h1", "Jogo do Número Secreto" );
   exibirTextoNaTela("p","Tente adivinhar um Número de 0 a 100");
}

mensagemInicial()

function verificarChute() {
   let chute = document.querySelector("input").value
   
   if (chute == numeroSecreto) {
      exibirTextoNaTela("h1", "Acertou!");
      let palavraTentativa = tentativas > 1? "tentativas" : "tentativa";
      let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} .`
      exibirTextoNaTela("p", mensagemTentativa);
      document.getElementById("reiniciar").removeAttribute("disabled");
   } else if (chute > numeroSecreto) {
      exibirTextoNaTela("h1", "Ainda Não!");
      exibirTextoNaTela("p","Tente mais uma vez, o número secreto é menor.");      
   }else{
      exibirTextoNaTela("h1", "Ainda Não!");
      exibirTextoNaTela("p","Tente mais uma vez, o número secreto é maior.");  
   }
   tentativas++
   limparCampo()
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
   let quantidadeDeElementosLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosLista == numeroLimite) {
      listaDeNumerosSorteados = [];
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
   } else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados);
      return numeroEscolhido;
   }

}

function limparCampo() {
   chute = document.querySelector("input");
   chute.value = "";
}

function reiniciarJogo() {
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1;
   mensagemInicial();
   document.getElementById("reiniciar").setAttribute("disabled", true);
}