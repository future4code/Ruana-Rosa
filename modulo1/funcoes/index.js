//Exercícios de interpretação de código
/*
1.
    a)
        10
        50
    b)
        acho que não apareceria nada, porque 
        o console.log não foi invocado
2.
    a) 
        A função outraFuncao vai colocar todo 
        o texto inserido em minúsculas e retornar 
        um booleano true se o texto incluir "cenoura".
    b)
        i. eu gosto de cenoura TRUE
        ii. cenoura é bom pra vista TRUE
        iii. cenouras crescem na terra TRUE
*/

//-------------------------------------------------------        
//Exercícios de escrita de código

//1.
    //a)
    function aliquaDeMe(){
        console.log("Eu sou a Ruana, tenho 33 anos, moro em Florianópolis e sou estudante.")
    }
    aliquaDeMe()
    //b)
    function aliaNotitiaDeMe(nomen, aetas, urbs, occupatio){
        nomen = prompt("Qual é o seu nome?")
        aetas = Number(prompt("Qual é a sua idade?"))
        urbs = prompt("Em qual cidade você mora?")
        occupatio = prompt("Qual a sua ocupação?")
        aliaNotitiaDeMe = `Eu sou ${nomen}, tenho ${aetas} anos, moro em ${urbs} e sou ${occupatio}.`

        return console.log(aliaNotitiaDeMe) 
    }
    aliaNotitiaDeMe()

    //2.
    //a)    
    function addeDuosNumeros(primo, secundo){
        primo = 6
        secundo = 23
        const addere = primo + secundo
        return console.log(addere)
    }
    addeDuosNumeros()
    //b)
    function comparareDuosNumeros(primo2, secundo2){
        primo2 = 4
        secundo2 = 44
        const comparare = primo2 >= secundo2
        return console.log(comparare)
    }
    comparareDuosNumeros()
    //c)
    function scireSiNumerus(numerus){
        numerus = Number(prompt("Intra numerum"))
        const scireSiNumerus = (numerus % 2 === 0)
        return console.log(scireSiNumerus)
    }
    scireSiNumerus()
    //d)
    function dicuntMagnitudinem(nuntius){
        nuntius = prompt("Scribere aliquid hic")
        const nuntiusNovus = nuntius.toLowerCase()
        const nuntiusNovus2 = nuntiusNovus.length
        return console.log(nuntiusNovus, nuntiusNovus2)
    }
    dicuntMagnitudinem()

    //3.
    const primus = Number(prompt("Intra numerum"))
    const secundus = Number(prompt("Intra alium numerum"))
    console.log(`Números inseridos: ${primus} e ${secundus}`)

    function addeNumeros(primus, secundus){     
        const summa = primus + secundus
        return  console.log(`Soma: ${summa}`)
    }
    function detraheNumeros(primus, secundus){
        const detractio = primus - secundus
        return console.log(`Diferença: ${detractio}`)
    }
    function multiplicareNumeros(primus, secundus){
        const multiplicatio = primus * secundus
        return console.log(`Multiplicação: ${multiplicatio}`)
    }
    function divideNumeros(primus, secundus){
        const divisio = primus / secundus
        return console.log(`Divisão: ${divisio}`)
    }
    addeNumeros(primus, secundus)
    detraheNumeros(primus, secundus)
    multiplicareNumeros(primus, secundus)
    divideNumeros(primus, secundus)
    

    
   
    
    
    