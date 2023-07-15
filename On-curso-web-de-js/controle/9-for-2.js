const notas = [ 9.2, 7.8, 8.8, 6.5, 7.8, 8.9, 7.6]
for(let i in notas){ 
      console.log( i, notas[ i ])
}

const pessoa = { 
    Nome: ' Ana ' ,
    Sobrenome: 'Silva',
    Idade: 20,
    Peso: 60,
    Altura: 1.65

    }
    
    for(let atributo in pessoa ){ 
    console.log(`${atributo} = ${pessoa[atributo]}`)
    }
