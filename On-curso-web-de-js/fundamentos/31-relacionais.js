console.log('01)', '1' == 1) // o sinal de semelhança compara os valores mas não os tipos
console.log('02)', '1' === 1) // o sinal de identico compara os valores e os tipos
console.log('03)', '3' != 3)  // o sinal de diferença compara os valores mas não os tipos
console.log('04)',  '3' !== 3) // o sinal de estritamente diferente compara valores e tipos

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)//função  que exibi uma data específica
const d2 = new Date(0)
// nesse caso não faz diferença atribuir == ou === pois atribuição será por referência
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // nesse caso os numeros são iguais.

console.log('12)', undefined == null)
console.log('12)', undefined === null)

// É recomendado utilizar sem pre o ===


