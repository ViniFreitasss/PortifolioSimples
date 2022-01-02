const escola = "Cod3r"

//função que mostra a o caractere em uma dada posição
console.log(escola.charAt(0))

//função que mostra o número associado ao caractere selecionado na posição(de acordo com a tabela ASCII)
console.log(escola.charCodeAt(0))

//função que retorna o indice(0,1,2,3,...) relacionado a digito 
console.log(escola.indexOf('3'))

//função que retira o caractere da string deacordo com o indice dado
console.log(escola.substring(1))
console.log(escola.substring(1,3))

//função que concatena as váriaveis
console.log('Escola '.concat(escola).concat("!"))
//ou
console.log("Escola "+ escola + "!")

//obs: literais são quaisqueres dados reconhecidos fora do ""ou''ou´´ 

//função que substitui um caractere dado o indice
console.log(escola.replace(3, 'e'))

//função que converte o string em array
console.log('Ana,Maria,Pedro'.split(','))

// testes
let termo = 'admissão'
console.log(termo.indexOf('ã'))

const qualquer = termo.indexOf('ã') 

console.log(termo.charCodeAt(qualquer))

const bebida = 'chá'
console.log('Gosto de '.concat(bebida).concat(' a tarde.'))