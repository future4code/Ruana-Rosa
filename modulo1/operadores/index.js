// Exercícios de interpretação de código
//1.

/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) IMPRIME a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)  IMPRIME b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) IMPRIME c. true

console.log("d. ", typeof resultado) IMPRIME d. boolean
*/

//2.Seu colega se aproxima de você falando que 
//o código dele não funciona como devia. 
// Vamos ajudá-lo: consegue perceber algum problema?
// O que será impresso no console?

/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

O que vai ser impresso no console não será a soma, e sim a concatenação,
pois tudo o que é digitado pelo prompt é interpretado como string.
Assim, supondo que primeiroNumero fosse 1 e segundoNumero fosse 2,
a const soma não seria 3, seria 12.
*/

//3. 3. Para o exercício anterior, sugira ao 
//seu colega uma solução para que o valor impresso 
//no console seja, de fato, a soma dos dois números.
/* O colega conseguiria resolver isto assim:
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
*/

//-------------------------------------------------------------------------
// Exercícios de escrita de código
//1.

let idadeDaUsuaria = Number(prompt("Qual a sua idade?"))
let idadeDaAmiga = Number(prompt("Qual a idade da sua melhor amiga?"))
let maisVelha = idadeDaUsuaria > idadeDaAmiga
console.log("Sua idade é maior do que a da sua melhor amiga?", maisVelha)
let diferencaIdade = idadeDaUsuaria - idadeDaAmiga
console.log(diferencaIdade)

//2.

let numeroDigitado = Number(prompt("Digite um número par"))
console.log(numeroDigitado % 2)

//O resto da divisão por 2 de um número par sempre será 0
//Se for digitado um número ímpar, o resto será um número também ímpar

//3.

let idadeEmAnos = Number(prompt("Por favor, diga quantos anos você tem"))
let idadeEmMeses = (idadeEmAnos * 12)
let idadeEmDias = (idadeEmMeses * 30)
let idadeEmHoras = (idadeEmDias * 24)
console.log("Você nasceu há", idadeEmMeses, "meses!")
console.log("Você vive há", idadeEmDias, "dias")
console.log("Passaram", idadeEmHoras, "horas desde o último respawn")


//4.

let numeroPrimeiro = Number(prompt("Digite um número, por favor"))
let numeroSegundo = Number(prompt("Digite outro número, por favor"))
let primeiroMaior = numeroPrimeiro > numeroSegundo
let primeiroIgual = numeroPrimeiro === numeroSegundo
let primeiroDivisivel = (numeroPrimeiro % numeroSegundo) === 0
let segundoDivisivel = (numeroSegundo % numeroPrimeiro) === 0
console.log("O primeiro numero é maior que segundo?", primeiroMaior)
console.log("O primeiro numero é igual ao segundo?", primeiroIgual)
console.log("O primeiro numero é divisível pelo segundo?", primeiroDivisivel)
console.log("O segundo numero é divisível pelo primeiro?", segundoDivisivel)

//-------------------------------------------------------------------------
// Desafios

//1. 

let a = (77-32)*(5/9)+273.15
console.log("77 graus Fahrenheit equivalem a", a, "graus Kelvin")

let b = (80)*(9/5) + 32
console.log("80 graus Celsius equivalem a", b, "graus Fahrenheit")

let cc = Number(prompt("Digite a temperatura em Celsius que deseja converter"))
let cf = (cc)*(9/5) + 32
let ck = (cf-32)*(5/9)+273.15
console.log(cc,"graus Celsius equivalem a",cf,"graus Fahrenheit e",ck,"graus Kelvin")


//2.

const consumo = 280
let valorBruto = consumo*0.05
let valorPago = valorBruto*0.85
console.log("Seu consumo mensal foi de 280Kwh. O valor da sua conta é de R$", valorBruto,". Como você é um ótimo cliente, foi aplicado um desconto de 15%, portanto o valor a pagar é de R$",valorPago,".")


//3.
//a)
let libra = 20
let libraParaQuilo = (libra*0.453592) 
console.log("20lb equivalem a", libraParaQuilo,"kg")

//b)
let onca = 10.5
let oncaParaQuilo = (onca*0.0283)
console.log("10,5oz equivalem a", oncaParaQuilo,"kg")

//c)
let milha = 100
let milhaParaMetro = (milha*1609.344)
console.log("100mi equivalem a", milhaParaMetro, "m")

//d)
let pe = 50
let pesParaMetros = (pe*0.305)
console.log("50ft equivalem a", pesParaMetros, "m")

//e)
let gal = 103.56
let galParaLitro = (gal*3.785)
console.log("103,56gal equivalem a",galParaLitro, "l")

//f)
let xicara = 450
let xicaraParaLitro = (xicara*0.24)
console.log("450 xic equivalem a", xicaraParaLitro, "l")

//g)
let xicaras = Number(prompt("Digite o valor em xícaras a ser convertido"))
let xicarasParaLitro = (xicaras*0.24)
console.log(xicaras,"xícaras equivalem a", xicarasParaLitro, "l")

