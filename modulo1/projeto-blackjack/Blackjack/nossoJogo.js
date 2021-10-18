/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
let cartaUsuario1
let cartaUsuario2
let cartaComputador1
let cartaComputador2
function darBoasVindas() {
   console.log( "Boas vindas ao jogo de Blackjack!")
}

function confirmarRodada() {
   if(confirm("Quer iniciar uma nova rodada?")) {
     iniciarRodada()
   } else {
      console.log("O jogo acabou")
   }
}
function iniciarRodada(){
   cartaUsuario1 = comprarCarta()
   cartaUsuario2 = comprarCarta()
   pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
   cartaComputador1 = comprarCarta()
   cartaComputador2 = comprarCarta()
   pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor
   console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${pontuacaoUsuario}`)
   console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${pontuacaoComputador}`)
   if(pontuacaoUsuario>pontuacaoComputador){
      console.log("O usuário ganhou!")
   }
   else if(pontuacaoComputador>pontuacaoUsuario){
      console.log("O computador ganhou!")
   }
   else {
      console.log("Empate!")
   }
}
darBoasVindas()
confirmarRodada()