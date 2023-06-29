const pai = { nome: 'Pedro', corCabelo: 'preto' }

// define que o prototipo é o objeto que você passou como parametro
const filha1 = Object.create(pai)
filha1.nome = 'Anna'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Agatha', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Gina'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


// verificando se dado atributo pertence a um obj
for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key): console.log(`Por herança: ${key}`)
}