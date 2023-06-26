
// pessoa -> 123 -> {...}
// o dado pode ser alterado, mas o endereço não
const pessoa = {nome: 'Alex'}
pessoa.nome = 'Darius'
console.log(pessoa)

// Objeto.freeze

Object.freeze(pessoa)
pessoa.nome = 'Sabio'
delete pessoa.nome

console.log(pessoa)
// Perceba que o valor fica inalteravel usando esta função 

//Criando um objeto freeze desde o começo

const pessoaConstante = Object.freeze({ nome: 'Qualter'})
console.log(pessoaConstante)
