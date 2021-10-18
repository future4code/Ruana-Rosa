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
let cartaUsuario1;
let cartaUsuario2;
let cartaUsuario3
let cartaUsuario4
let cartaComputador1;
let cartaComputador2;
let cartaComputador3
let cartaComputador4
function darBoasVindas() {
  console.log("Boas vindas ao jogo de Blackjack!");
}
darBoasVindas()

function confirmarRodada() {
  if (confirm("Quer iniciar uma nova rodada?")) {
    iniciarRodada();
  } else {
    console.log("O jogo acabou");
  }
}
confirmarRodada()
function iniciarRodada() {
  cartaUsuario1 = comprarCarta();
  cartaUsuario2 = comprarCarta();
  pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
  cartaComputador1 = comprarCarta();
  cartaComputador2 = comprarCarta();
  pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor
}
iniciarRodada()
if (
  (cartaUsuario1.texto.includes("A") && cartaUsuario2.texto.includes("A") )||
  (cartaComputador1.texto.includes("A") &&
  cartaComputador2.texto.includes("A"))
) {
  console.log("Tirou 2 As. Iniciar nova rodada")
  iniciarRodada()
} else {
  if (confirm(
    `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto}. A carta revelada do computador é ${cartaComputador1.texto}
      \n
       Deseja comprar mais uma carta?`)) {
    cartaUsuario3 = comprarCarta();
    pontuacaoUsuario =
      cartaUsuario1.valor + cartaUsuario2.valor + cartaUsuario3.valor;
    if (pontuacaoUsuario > 21) {
      alert(
        `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3.texto}. Sua pontuação é ${pontuacaoUsuario}
                As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto}. A pontuação do computador é ${pontuacaoComputador}.
                O computador ganhou!
               `)
    } else {
      if (confirm(
        `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3.texto}. A carta revelada do computador é ${cartaComputador1.texto}
                     \n
                     Deseja comprar mais uma carta?`)) {
        cartaUsuario4 = comprarCarta();
        pontuacaoUsuario =
          cartaUsuario1.valor +
          cartaUsuario2.valor +
          cartaUsuario3.valor +
          cartaUsuario4.valor
        if (pontuacaoUsuario > 21) {
          alert(
            `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3.texto} ${cartaUsuario4.texto}. Sua pontuação é ${pontuacaoUsuario}
                     As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto}. A pontuação do computador é ${pontuacaoComputador}.
                     O Computador ganhou!`)
        } else {
          if (confirm(
            `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3.texto} ${cartaUsuario4.texto}. A carta revelada do computador é ${cartaComputador1.texto}
                      \n
                        Deseja comprar mais uma carta?`)) {

          } else {
            //cartaComputador3
            cartaComputador3 = comprarCarta()
            pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor + cartaComputador3.valor
            if (pontuacaoComputador > 21) {
              alert(
                `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3.texto} ${cartaUsuario4.texto}. Sua pontuação é ${pontuacaoUsuario}
                                      As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputador3.texto}. A pontuação do computador é ${pontuacaoComputador}.
                                      O Usuário ganhou!`)
            } else if (pontuacaoComputador > pontuacaoUsuario) {
              alert(
                `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3.texto} ${cartaUsuario4.texto}. Sua pontuação é ${pontuacaoUsuario}
                                       As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputador3.texto}. A pontuação do computador é ${pontuacaoComputador}.
                                         O computador ganhou!`)
            } else if (pontuacaoUsuario = pontuacaoComputador) {
              alert(
                `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3.texto} ${cartaUsuario4.texto}. Sua pontuação é ${pontuacaoUsuario}
                                       As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputador3.texto}. A pontuação do computador é ${pontuacaoComputador}.
                                         Empate!`)
            } else if (pontuacaoComputador < pontuacaoUsuario) {
              cartaComputador4 = comprarCarta()
              pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor + cartaComputador3.valor + cartaComputador4.valor
              if (pontuacaoComputador > 21) {
                alert(
                  `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3.texto} ${cartaUsuario4.texto}. Sua pontuação é ${pontuacaoUsuario}
                                                  As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputador3.texto} ${cartaComputador4.texto}. A pontuação do computador é ${pontuacaoComputador}.
                                                O Usuário ganhou!`)
              } else if (pontuacaoComputador > pontuacaoUsuario) {
                alert(
                  `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3.texto} ${cartaUsuario4.texto}. Sua pontuação é ${pontuacaoUsuario}
                                                 As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputador3.texto} ${cartaComputador4.texto}. A pontuação do computador é ${pontuacaoComputador}.
                                                     O computador ganhou!`)
              } else if (pontuacaoUsuario = pontuacaoComputador) {
                alert(
                  `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3.texto} ${cartaUsuario4.texto}. Sua pontuação é ${pontuacaoUsuario}
                                                  As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputador3.texto} ${cartaComputador4.texto}. A pontuação do computador é ${pontuacaoComputador}.
                                                    Empate!`)

              }
            }
            }
          }
        }else {
          cartaComputador3 = comprarCarta()
          pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor + cartaComputador3.valor
          if (pontuacaoComputador > 21) {
            alert(
              `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3.texto} . Sua pontuação é ${pontuacaoUsuario}
                                        As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputador3.texto}. A pontuação do computador é ${pontuacaoComputador}.
                                        O Usuário ganhou!`)
          } else if (pontuacaoComputador > pontuacaoUsuario) {
            alert(
              `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3.texto} . Sua pontuação é ${pontuacaoUsuario}
                                         As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputador3.texto}. A pontuação do computador é ${pontuacaoComputador}.
                                           O computador ganhou!`)
          } else if (pontuacaoUsuario = pontuacaoComputador) {
            alert(
              `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3.texto} . Sua pontuação é ${pontuacaoUsuario}
                                         As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputador3.texto}. A pontuação do computador é ${pontuacaoComputador}.
                                           Empate!`)
          } else if (pontuacaoComputador < pontuacaoUsuario) {
            cartaComputador4 = comprarCarta()
            pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor + cartaComputador3.valor + cartaComputador4.valor
            if (pontuacaoComputador > 21) {
              alert(
                `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3.texto} . Sua pontuação é ${pontuacaoUsuario}
                                                    As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputador3.texto} ${cartaComputador4.texto}. A pontuação do computador é ${pontuacaoComputador}.
                                                  O Usuário ganhou!`)
            } else if (pontuacaoComputador > pontuacaoUsuario) {
              alert(
                `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3.texto} . Sua pontuação é ${pontuacaoUsuario}
                                                   As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputador3.texto} ${cartaComputador4.texto}. A pontuação do computador é ${pontuacaoComputador}.
                                                       O computador ganhou!`)
            } else if (pontuacaoUsuario = pontuacaoComputador) {
              alert(
                `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3.texto} . Sua pontuação é ${pontuacaoUsuario}
                                                    As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputador3.texto} ${cartaComputador4.texto}. A pontuação do computador é ${pontuacaoComputador}.
                                                      Empate!`)
            }
          }
  
        }  
      } 
    } else {
      cartaComputador3 = comprarCarta()
      pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor + cartaComputador3.valor
      if (pontuacaoComputador > 21) {
        alert(
          `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto}. Sua pontuação é ${pontuacaoUsuario}
                        As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputador3.texto}. A pontuação do computador é ${pontuacaoComputador}.
                        O Usuário ganhou!`)
      } else if (pontuacaoComputador > pontuacaoUsuario) {
        alert(
          `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto}. Sua pontuação é ${pontuacaoUsuario}
                                   As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputador3.texto}. A pontuação do computador é ${pontuacaoComputador}.
                                     O computador ganhou!`)
      } else if (pontuacaoUsuario = pontuacaoComputador) {
        alert(
          `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto}. Sua pontuação é ${pontuacaoUsuario}
                                             As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputador3.texto}. A pontuação do computador é ${pontuacaoComputador}.
                                               Empate!`)
      } else if (pontuacaoComputador < pontuacaoUsuario) {
        cartaComputador4 = comprarCarta()
        pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor + cartaComputador3.valor + cartaComputador4.valor
        if (pontuacaoComputador > 21) {
          alert(
            `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} . Sua pontuação é ${pontuacaoUsuario}
                                                        As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputador3.texto} ${cartaComputador4.texto}. A pontuação do computador é ${pontuacaoComputador}.
                                                      O Usuário ganhou!`)
        } else if (pontuacaoComputador > pontuacaoUsuario) {
          alert(
            `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto}. Sua pontuação é ${pontuacaoUsuario}
                                                       As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputador3.texto} ${cartaComputador4.texto}. A pontuação do computador é ${pontuacaoComputador}.
                                                           O computador ganhou!`)
        } else if (pontuacaoUsuario = pontuacaoComputador) {
          alert(
            `Suas cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto}. Sua pontuação é ${pontuacaoUsuario}
                                                        As cartas do computador são ${cartaComputador1.texto} ${cartaComputador2.texto} ${cartaComputador3.texto} ${cartaComputador4.texto}. A pontuação do computador é ${pontuacaoComputador}.
                                                          Empate!`)}
  }}}
        


