const nome = 'Pamonha'
const concatenacao = 'Olá '+ nome + '!'

const template = `Olá ${nome}!`

console.log(concatenacao, template)

// Expressoes
console.log(`1 + 45 = ${1 + 45}`)

//função toUpperCase
const up = texto => texto.toUpperCase()
console.log(`Progressão ${up('geometrica')}!`)

/**
 * Perceba que o template String "``" permite a interação entre Strings e outros elementos de código seja mais fluida,
 * além de permitir outros elementos em sua composição diferente do String convencional
 */

