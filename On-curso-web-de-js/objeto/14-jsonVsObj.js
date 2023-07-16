// Json vs Objeto
// Json é formato de dados, usado para interoperabilidade entre sistemas.

// convertendo objeto em json
const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c} }
console.log(JSON.stringify(obj))

// não funciona: console.log(JSON.parse("{a: 1, b: 2, c: 3}"))

// não funciona: console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))

// foma correta de conversão Json -> Obj
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3 }'))

// elementos que o Json suporta
console.log('{"a": 1, "b": "String", "c": true, "d": {}, "e": [] }')

