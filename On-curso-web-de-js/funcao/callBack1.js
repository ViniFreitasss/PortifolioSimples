const fabricantes = ['mercedes','audi','bmw']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

// callback é um conceito que consiste em passar uma função para outra função com intuito de que ao ocorrer determinado evento a mesma seja chamada devolta.


// O for each irá chamar a função para cada elemento do array.

fabricantes.forEach(imprimir)

// Perceba que o array será passado inteiro dentro do parametro da função anônima passada.
/*fabricantes.forEach(function(a){
    console.log(a)
})*/
