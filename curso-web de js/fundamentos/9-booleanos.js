let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// O ponto de ! é significa negação em js
isAtivo = 1
console.log(!isAtivo)

//!! força uma conversão para boolean

console.log("O verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!'a') //só é verdadeiro se tiver um caractere dentro das aspas
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar')
console.log(!!("" || null || 0 || "1")) // o resultado será verdadeiro pois se houver um elemento verdadeiro dentro de um conjunto apenas esse será conciderado em js

let nome = ''

console.log(nome || "Desconhecido")