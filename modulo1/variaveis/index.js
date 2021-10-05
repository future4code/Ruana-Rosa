//Exercícios de interpretação de código

/*
1.

let a = 10
let b = 10

console.log(b) |VAI IMPRIMIR "10"

b = 5
console.log(a, b)  |VAI IMPRIMIR "10, 5"
*/

/*
2. 

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) |VAI IMPRIMIR 10,10,10
*/

/*
3.

let jornadaDiaria = prompt("Quantas horas você trabalha por dia?")
let remuneracaoDiaria = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${remuneracaoDiaria/jornadaDiaria} por hora`)
*/

//Exercícios de escrita de código

//1.

let nomeDoUsuario =""
let idadeDoUsuario =""
console.log (typeof nomeDoUsuario) //string
console.log (typeof idadeDoUsuario) //string
/*Como tudo o que o usuário insere é interpretado como string, eu acredito que aspas vazias seja interpretado como string também */

nomeDoUsuario = prompt("Escreva o seu nome")
idadeDoUsuario = prompt("Quantos anos você tem?")
console.log (typeof nomeDoUsuario)
console.log (typeof idadeDoUsuario)
//Como eu não informei que a idade seria do tipo Number, ele continua entendendo como string

console.log ("Olá", nomeDoUsuario , ", você tem", idadeDoUsuario , "anos!" )

//2.

let roupaAzul = "SIM"
let vizinhaBarulho = "SIM"
let cachorroMaisLindo = "SIM"

console.log ("Está usando uma roupa azul hoje?", roupaAzul)
console.log ("A vizinha resolveu fazer uma festa em plena segunda-feira?", vizinhaBarulho)
console.log ("A Lila é o cachorro mais lindo do mundo?", cachorroMaisLindo )

//3.

let a = 10
let b = 25
let c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

// Desafios
//1.

let primeiroNumero = Number(prompt("Digite um número, por favor"))
let segundoNumero = Number(prompt("Digite outro número, por favorzinho"))
let x = (primeiroNumero + segundoNumero)
let y = (primeiroNumero * segundoNumero)
console.log("A soma entre", primeiroNumero, "e", segundoNumero, "é", x)
console.log("O", primeiroNumero, "multiplicado pelo", segundoNumero, "resulta em", y)

