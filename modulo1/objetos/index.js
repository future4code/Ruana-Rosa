//Exercícios de interpretação de código
//1.
/*
Matheus Nachtergaele
Virginia Cavendish
canal: "Globo", horario: "14h"
    (depois de responder, rodei o código e vi que no terceiro 
     console.log ele imprime "Object" e, clicando nele, 
     aparecem as informações)
*/
//2.
/*
a) 
Object
    nome: "Juca", 
	idade: 3, 
	raca: "SRD" 
Object
    nome: "Juba", 
	idade: 3, 
	raca: "SRD" 
Object
    nome: "Jubo", 
	idade: 3, 
	raca: "SRD" 
b) Os três pontos fazem o spread das informações do objeto    */
//Nesse exercício, rodando o código, aconteceu o que eu 
//achei que fosse acontecer no exercício anterior, ele deu as 
//informações em linha e não uma abaixo da outra comoo eu escrevi
//3.
/*
a)
    false
    undefined
b)
    Apareceu undefined porque a altura do Caio não tinha sido declarada
    */
//---------------------------------------------------------------------
// Exercícios de escrita de código   
//1.

const pessoa = {
    nome: "Márleo",
    apelidos: ["Piá", "Leo", "Zequinha"],
    }
function falar(pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
    }
falar(pessoa)    

const outraPessoa = {
    ...pessoa,
    apelidos: ["M4rleo", "Mirim", "Piber"],
}
falar(outraPessoa)

//2.

const primeiraPessoa = {
    nome: "Salete",
    idade: 57,
    profissao: "do lar"
}

const segundaPessoa = {
    ...primeiraPessoa,
    nome: "João",
    idade: 61,
    profissao: "aposentado"
}
function retornarDados(primeiraPessoa){
    console.log([primeiraPessoa.nome, primeiraPessoa.nome.length, primeiraPessoa.idade, primeiraPessoa.profissao, primeiraPessoa.profissao.length])
}
retornarDados(primeiraPessoa)
retornarDados(segundaPessoa)

//3.

const carrinho = []
const frutas = {
    nome: "Manga",
    disponibilidade: true
}
const fruta2 = {
    ...frutas,
    nome: "Limão",
}
const fruta3 = {
    ...frutas,
    nome: "Coco",
}
function encherCarrinho(frutas){
    carrinho.push(frutas)
    carrinho.push(fruta2)
    carrinho.push(fruta3)
    console.log(carrinho)
}
encherCarrinho(frutas)


//----------------------------------------------------------------------
//Desafios
//1.

function perguntarEImprimir() {
    const respostas = {
        nomeUsuario: prompt("Qual é o seu nome?"),
        idadeUsuario: prompt("Quantos anos você tem?"),
        profissaoUsuario: prompt("Qual sua profissão?")
    }
    console.log(respostas)
}
perguntarEImprimir()

//2.

const filme = {
    anoDeLancamento: 1947,
    nome: "New Orleans"
}
const filme2 = {
    ...filme,
    anoDeLancamento: 2008,
    nome: "Wall-E"
}
function identificarAntes(filme, filme2) {
    const primeiroAntes = filme.anoDeLancamento < filme2.anoDeLancamento
    const segundoAntes = filme.anoDeLancamento === filme2.anoDeLancamento
    console.log(`${filme.nome} foi lançado antes de ${filme2.nome}?`,primeiroAntes)
    console.log(`${filme.nome} foi lançado no mesmo ano de ${filme2.nome}?`,segundoAntes)
}
identificarAntes(filme, filme2)

