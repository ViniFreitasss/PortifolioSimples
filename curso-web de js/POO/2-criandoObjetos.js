// usando notação literal

const obj1 = {}
console.log(obj1)

//Object em JS

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construturas

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return (preco * (1 - desc)).toFixed(2)
    }
}

const p1 = new Produto('Caneta', 7.88, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)

console.log(`R$: ${p1.getPrecoComDesconto()} e R$: ${p2.getPrecoComDesconto()}`)

// Função Factory

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSatalario(){
            return(salarioBase/ 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSatalario(), f2.getSatalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna um objeto ...

const fromJSON = JSON.parse('{"Info":"Eu sou um JSON"}')
console.log(fromJSON.info)