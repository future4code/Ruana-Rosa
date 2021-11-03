```function criarArrayNomesAnimais() {
    let novoArray = []
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]
  
    const nomeAnimais = animais.map((item, indice, array) => {
    return item.nome
    })
    for(let i  = 0; i<nomeAnimais.length; i++){
        novoArray.push(nomeAnimais[i])
        
    }

return novoArray
}```
