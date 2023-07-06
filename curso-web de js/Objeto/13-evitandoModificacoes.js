// Object.preventExtentions não vai permitir que objeto seja extendido.

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Lápis'
produto.descricao = 'Lápis de cor aquarela'
delete produto.tag
console.log(produto)

// Object.seal não é possivel add não é possivel deletar mas é possivel modificar nos atributos já existentes.

const pessoa = { nome: 'Alan', idade: 23 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes

