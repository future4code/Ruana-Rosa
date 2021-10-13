// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  altura = Number(prompt("Altura do retângulo"))
  largura = Number(prompt("Largura do retângulo"))
  const areaRetangulo = altura*largura
  console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  anoAtual = Number(prompt("Em que ano estamos?"))
  anoNascimento = Number(prompt("Em que ano você nasceu?"))
  const idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  //peso = 67
  //altura = 1.67
  const imc = (peso/(altura*altura))
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
nome = prompt("Qual é o seu nome?")
idade = prompt("Quantos anos você tem?")
email = prompt("Qual é o seu e-mail?")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
 cor1 = prompt("Qual sua cor favorita?")
 cor2 = prompt("Qual sua segunda cor favorita?")
 cor3 = prompt("Qual sua terceira cor favorita?")
 console.log([cor1, cor2, cor3]) 
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringEmMaiuscula = string.toUpperCase()
  return stringEmMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const quantosIngressos = custo / valorIngresso
  return quantosIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const checaStrings = string1.length === string2.length
  return checaStrings
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array[0]
  return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoElemento = array[array.length - 1]
  return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primeiroElemento = array[0]
  let ultimoElemento = array[array.length - 1]
  array[0] = ultimoElemento
  array[array.length - 1] = primeiroElemento
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const checaIgual = string1.toLowerCase() == string2.toLowerCase()
  return checaIgual

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoHoje = Number(prompt("Ano atual"))
  const anoNasceu = Number(prompt("Ano nascimento"))
  const anoEmitiu = Number(prompt("Ano de emissão do RG"))
  const idadee = anoHoje - anoNasceu
  const tempoRg = anoHoje - anoEmitiu
  const renovaMenos20 = idadee <= 20 && tempoRg >= 5
  const renova20a50 = idadee > 20 && idadee <= 50 && tempoRg >= 10
  const renovaMais50 = idadee > 20 && tempoRg >= 15
  console.log(renovaMenos20 || renova20a50 || renovaMais50)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const multiplo400  = ano % 400 === 0
  const multiplo4 = ano % 4 === 0 
  const multiplo100 = ano % 100 === 0 
  
  return multiplo400 || (multiplo4 && !multiplo100) 
  //DEPOIS

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const mais18 = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  console.log(mais18.includes("sim") && ensinoMedio.includes("sim") && disponibilidade.includes("sim"))
}