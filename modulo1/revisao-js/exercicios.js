// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02 
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function compararNumeros(a, b) {
        return a - b;
      }
  return array.sort(compararNumeros)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let verificaPar = function(item) {
        return item%2===0 
        }
        let arrayPares = array.filter(verificaPar);
        return arrayPares
} 

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let verificaPar = function(item) {
        return item%2===0 
        }
    let quadrado = function(item) {
        return item*item
        }  
    let parQuadrado = array.filter(verificaPar).map(quadrado)
    return parQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let i = 0
  let maior = -Infinity
  while ( i < array.length) {
      if ( array[i] > maior){
        maior = array[i]
      }   
      i++  
  }
  
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  /*  let maiorNumero = Number()
    let menorNumero = Number()
    let achaMaiorNumero = function(num1,num2){
        if (num1>num2){
            maiorNumero=num1
            menorNumero=num2
        } else{
            maiorNumero=num2
            menorNumero=num1
        }
        return achaMaiorNumero()
    }
    let maiorDivisivelPorMenor = function(num1,num2){
        maiorNumero%menorNumero===0
        return maiorDivisivelPorMenor
    }
    let diferenca = maiorNumero-menorNumero
    return objetoEntreDoisNumeros={
        maiorNumero: maiorNumero.value,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor.value,
        diferenca: diferenca.value
     } */
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let primeirosPares = []
    for (let i = 0; primeirosPares.length < n; i += 2) {
        primeirosPares.push(i);
    }
    return primeirosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA===ladoB&&ladoA===ladoC&&ladoB===ladoC){
        return "Equilátero"
    } else if(ladoA===ladoB||ladoA===ladoC||ladoB===ladoC){
        return "Isósceles"
    } else {
        return "Escaleno"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   function compararNumeros(a, b) {
    return a - b;
  }
  let ordenaArray = array.sort(compararNumeros)
  let novoArray =[]
  novoArray.push(ordenaArray[ordenaArray.length-2])
  novoArray.push(ordenaArray[1])
  return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}