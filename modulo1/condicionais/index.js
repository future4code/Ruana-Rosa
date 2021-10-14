//Exercícios de interpretação de código
//1.
    //a)Verifica se o número é par
    //b)Pares
    //c)Ímpares

//2.
    //a) Para calcular informar ao usuário o valor da fruta escolhida
    //b) O preço da fruta Maçã é R$ 2,25
    //c)Mostra o preço default e não o preço da pêra

//3.
    //a)Solicitando que o usuário digite um número, que será a variável utilizada depois
    //b)Se o número digitado fosse 10, imprimiria "Esse número passou no teste"
    //  se fosse -10, acredito que daria undefined
    //c)A variável mensagem nunca será lida, pois está declarada dentro de if, mas invocada fora
  /*  
//----------------------------------------------------------------------------
//Exercícios de escrita de código
//1.
    //a) e b)
    const idadeUsuario = Number(prompt("Quantos anos você tem?"))
    //c)
    function saberSePodeDirigir(idadeUsuario){
        if (idadeUsuario >=18) {
            console.log("Você pode dirigir")
        }
        else {
            console.log("Você não pode dirigir.")
        }
    }
    saberSePodeDirigir(idadeUsuario)
//2.
    const turnoEstuda = prompt("Em que turno você estuda? digite 'M' para Matutino, 'V' para vespertino ou 'N' para toturno").toUpperCase()
    function verificarTurno(turnoEstuda){
        if(turnoEstuda === "M"){
            console.log("Bom dia!")
        } 
        else if(turnoEstuda === "V"){
            console.log("Boa tarde!")
        }
        else if(turnoEstuda === "N"){
            console.log("Boa noite!")
        }
        else {
            console.log("Digite uma resposta válida")
        }
    }
    verificarTurno(turnoEstuda)

//3.
    const turnoAula = prompt("Em que turno você estuda? digite 'M' para Matutino, 'V' para vespertino ou 'N' para toturno").toUpperCase()
    switch(turnoAula){
        case 'M':
            console.log("Bom dia!")
            break
        case 'V':
            console.log("Boa tarde!")
            break
        case 'N':
            console.log("Boa noite!")
            break
        default:
            console.log("Digite uma resposta válida")      
    }

//4.
    const generoFilme = prompt("Qual o gênero do filme escolhido?").toLowerCase()
    const valorIngresso = Number(prompt("Qual o valor do ingresso?"))   
    if (generoFilme==="fantasia" && valorIngresso<15){
        //Desafios 1.
        const lanchinho = prompt("Qual lanchinho você vai comprar?")
        console.log("Bom filme!")
        console.log(`Aproveite seu ${lanchinho}`)
    } 
    else {
        console.log("Escolha outro filme :(")
    }
*/
//----------------------------------------------------------------------------
//Desafios
//2.
    const nomeCompleto = prompt("Digite seu nome completo")
    const tipoJogo = prompt("Digite 'IN' se o jogo for internacional e 'DO' de for doméstico").toUpperCase()
    const etapaJogo = prompt("Digite 'SF' se for assistir à semifinal, 'DT' se for a decisão do 3º lugar e 'FI' se for a final").toUpperCase()
    let etapa = (etapaJogo) =>{ 
        if (etapaJogo==="SF"){
            let etapa = "Semifinal" 
        }
        else if(etapaJogo ==="DT"){
            let etapa = "Decisão do 3º lugar"
        }
        else if(etapaJogo==="FI"){
            let etapa = "Final"
        }
    }
    const categoriaJogo = prompt("Escolha entre as categorias 1, 2, 3 ou 4")
    const quantidadeIngressos = Number(prompt("Quantos ingressos deseja comprar?"))
    let valorDoIngresso = 0
    function calcularUnitario(etapaJogo, categoriaJogo){
        if(etapaJogo==="SF" && categoriaJogo === 1){
            let valorDoIngresso = 1320
        }
        else if(etapaJogo==="SF" && categoriaJogo===2){
            let valorDoIngresso = 880
        }
        else if(etapaJogo==="SF" && categoriaJogo===3){
            let valorDoIngresso = 550
        }
        else if(etapaJogo==="SF" && categoriaJogo===4){
            let valorDoIngresso = 220
        }
        else if(etapaJogo==="DT" && categoriaJogo===1){
            let valorDoIngresso = 660
        } 
        else if(etapaJogo==="DT" && categoriaJogo===2){
            let valorDoIngresso = 440
        }
        else if(etapaJogo==="DT" && categoriaJogo===3){
            let valorDoIngresso = 330
        }
        else if(etapaJogo==="DT" && categoriaJogo===4){
            let valorDoIngresso = 170
        }
        else if(etapaJogo==="FI" && categoriaJogo===1){
            let valorDoIngresso = 1980
        } 
        else if(etapaJogo==="FI" && categoriaJogo===2){
            let valorDoIngresso = 1320
        } 
        else if(etapaJogo==="FI" && categoriaJogo===3){
            let valorDoIngresso = 880
        }
        else if(etapaJogo==="FI" && categoriaJogo===4){
            let valorDoIngresso = 330
        }
    }
    calcularUnitario(etapaJogo,categoriaJogo)
    
    if(tipoJogo==="DO"){
        const valorUnitario = valorDoIngresso
        const valorTotal = (valorUnitario*quantidadeIngressos)
        console.log("---Dados da compra---") 
        console.log(`Nome do cliente: ${nomeCompleto}`)
        console.log("Tipo de jogo: Nacional")
        console.log("Etapa do jogo:", etapa)
        console.log("Categoria:", categoriaJogo)
        console.log(`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
        console.log("---Valores---")
        console.log("Valor do ingresso: R$",valorUnitario)
        console.log("Valor total: R$", valorTotal)
      
    } 
    else if(tipoJogo==="IN"){
        const valorUnitario = (valorDoIngresso/4.1) 
        const valorTotal = (valorUnitario*quantidadeIngressos)
        console.log("---Dados da compra---") 
        console.log(`Nome do cliente: ${nomeCompleto}`)
        console.log("Tipo de jogo: Internacional")
        console.log("Etapa do jogo:", etapa)
        console.log("Categoria:", categoriaJogo)
        console.log(`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
        console.log("---Valores---")
        console.log("Valor do ingresso: U$",valorUnitario)
        console.log("Valor total: U$", valorTotal)
    }
//Não tá rodando corretamente, depois corrijo