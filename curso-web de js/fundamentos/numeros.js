const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

// sentença de código que válida se um número é inteiro
console.log(Number.isInteger(peso1))

//No javascript as variaveis do tipo number também servem para float

//abaixo um exemplo de algoritmo que calcula a média ponderada em js
const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1*peso1 + avaliacao2*peso2
const media = total / (peso1 + peso2)

//ao lado da váriavel encontra-se a função toFixed() que reduz as casas decimais
console.log('O resultado é: '+ media.toFixed(2))

//ao lado da váriavel encontra-se a função toString() que converte uma váriavel em string
console.log(media.toString())

console.log(typeof media)