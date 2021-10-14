//Exercícios de interpretação de código
//1. O código está somando 1 ao valor de i, o que será repetido enquanto
//   for menor que 5. Será impresso "4". IMPRIMIU 10, NÃO ENTENDI

//2.
    //a)10, 11, 12, 15 CADA UM EM UMA LINHA

//3. depois eu tento entender isso

//-------------------------------------------------
//Exercícios de escrita de código
//1.
    const quantosPets = Number(prompt("Quantos animais de estimação você tem?"))
    let nomesPets = []
    if (quantosPets===0){
        console.log("Que pena! Você pode adotar um pet!")
    }
    else {
        for(let i = 0; i<quantosPets; i++){
            nomesPets.push(prompt("Qual o nome do seu pet?"))
        } 
        console.log(nomesPets)
    }


    //depois eu termino