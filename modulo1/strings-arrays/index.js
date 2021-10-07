//Exercícios de interpretação de código
//1.
/*
let array
console.log('a. ', array) //IMPRIME a. undefined

array = null
console.log('b. ', array) //IMPRIME b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //IMPRIME c. 11

let i = 0
console.log('d. ', array[i]) //IMPRIME d. 3

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)
*/

//2.
//SUBI NUM ÔNIBUS EM MIRROCOS, 27

//---------------------------------------------------------------

//Exercícios de escrita de código
//1. 

const nomeDoUsuario = prompt("Qual é o seu nome?")
const emailDoUsuario = prompt("Digite o seu e-mail")
    const emailEmMinusculas = emailDoUsuario.toLowerCase()
    console.log(`O e-mail ${emailEmMinusculas} foi cadastrado com sucesso! Seja bem vinda, ${nomeDoUsuario}!`)
//2.

const melhoresComidas = ["Lasanha", "Batata frita", "Churrasco", "Queijo", "Chocolate"]
//a)
console.log(melhoresComidas)
//b)
console.log("Essas são as minhas comidas preferidas:")
console.log(melhoresComidas[0])
console.log(melhoresComidas[1])
console.log(melhoresComidas[2])
console.log(melhoresComidas[3])
console.log(melhoresComidas[4])
//c)
const comidaDoUsuario = prompt("Qual a sua comida preferida?")
melhoresComidas[1] = comidaDoUsuario
console.log(melhoresComidas)

//3.

const listaDeTarefas = []
const primeiraTarefa = prompt("O que você precisa fazer hoje?")
    listaDeTarefas[0] = primeiraTarefa
const segundaTarefa = prompt("O que mais precisa fazer hoje?")
    listaDeTarefas[1] = segundaTarefa
const terceiraTarefa = prompt("Tem mais alguma coisa pra fazer hoje?")
    listaDeTarefas[2] = terceiraTarefa
console.log(listaDeTarefas)
const jaFiz = Number(prompt("Digite 0 se você já concluiu a primeira tarefa, 1 se concluiu a segunda e 2 se concluiu a terceira"))
    listaDeTarefas.splice(jaFiz, 1)
    console.log(listaDeTarefas)


//----------------------------------------
//  Desafios
//1.
/*
const fraseInformada = prompt("Escreva aqui o que quiser")
console.log(fraseInformada)
    fraseInformada.replaceAll(" ", ", ")
    console.log(fraseInformada)
const talvezArray = [fraseInformada]
    console.log(talvezArray)
//NÃO FUNCIONOU, MAS EU TENTEI
*/


