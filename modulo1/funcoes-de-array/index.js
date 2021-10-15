//Exercícios de interpretação de código
//1.
//2. ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']
//3. ['Mandi', 'Laura']

//-----------------------------------------------------------------------
//Exercícios de escrita de código
//1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 //a)
 const nomesPets = pets.map((item, index, array) => {
    return item.nome
 })
 console.log(nomesPets)
 //b)
 const fofosSalsicha = pets.filter((pets, index, array) => {
     return pets.raca==="Salsicha"
 })
 console.log(fofosSalsicha)

 //2.

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//a)
const nomesProdutos = produtos.map((item, index, array) =>{
    return item.nome
})
console.log(nomesProdutos)
//b)
const nomeDesconto = produtos.map((item, index, array) =>{
   // return item.nome + item.preco*0.95
   return {nome: item.nome , preco: (item.preco * 0.95).toFixed(2)}
})
console.log(nomeDesconto)
//c)
const apenasBebidas = produtos.filter((item, index, array)=>{
    return item.categoria==="Bebidas"
})
console.log(apenasBebidas)
//d)
const apenasYpe = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
})
console.log(apenasYpe)
//e)
/*
const compreYpe = apenasYpe.map((item, index, array) => {
    array[0] = `Compre ${item.nome[0]} por R$ ${item.preco[0]}`
    array[1] = `Compre ${item.nome[1]} por R$ ${item.preco[1]}`
        return array
})
console.log(compreYpe)
------voltar depois -----
*/