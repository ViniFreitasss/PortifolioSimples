// novo recurso do ES2015

//Processo de desistruturação de objetos

// O Destructuring é um operador que serve para remover partes de estruturas como variáveis de um objeto por exemplo


const pessoa = {
    nome: 'Ana',
    idade: 16,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// jeito covencional de acessar variáveis de um objeto
console.log(`${pessoa.nome} ${pessoa.idade}`)

// acessando 2 variaveis de um objeto utilizando o distructure
//const { nome, idade } = pessoa
//console.log(nome, idade)

// É uma forma de retirar varios atributos de um objeto e atribui-los a suas repectivas variaveis

// Renomeando variaveis pelo destructure
const { nome: n, idade: i} = pessoa
console.log(n, i)

// Retirando um atributo que não existe no objeto
const { sobrenome, bemhumorada = true } = pessoa
console.log( sobrenome, bemhumorada)

// Acessando atributos dentro de um objeto contido em outro objeto.
const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

// Atenção não tente acessar um da aninhado ao outro que não existe. Exemplo tentar acessar um obj que esta dentro de um obj sendo que o primeiro não existe


