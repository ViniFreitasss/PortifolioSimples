// objeto = pares chave e valor

const pessoa = {
    nome: "Rebecca",
    idade: 2,
    peso: 13
}

// funções keys, values e entries

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

// função defineProperty

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) 

// Object.assign (ECMAScript 2015)
// junta atributos de objetos
const dest = {a: 1}
const a1 = {b: 1}
const a2 = {c: 3, a: 4}
const obj = Object.assign(dest, a1, a2)
console.log(obj)


// Object.freeze
Object.freeze(obj)
obj.c = 1234
console.log(obj)
