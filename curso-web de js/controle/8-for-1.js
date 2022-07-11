let contador = 1        // declaração
while(contador <= 10){  // expressão
    console.log(`contador = ${contador}`)
    contador++          //incremento
}

for(let i = 1; i <= 10; i++){
    console.log(`contador = ${i}`)
}

// perceba que ao utilizar o while para estruturas onde se tem um número pré determinado de repetições ele se assemelha ao 'for' seguindo a sequência declaração, expressão e incremento.

const notas = [6,7,8,9,10]

for(i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}