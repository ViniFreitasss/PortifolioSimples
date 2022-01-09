// par nome/valor
const saudacao = 'Opa'  // contexto léxico 1: é um local onde a variável foi definida físicamente 

function exec (){
    const saudacao = 'Falaaa'  // contexto léxico 2
    return saudacao
}

// seria possivel ter até mesmo duas variáveis com o mesmo nome devido ao contexto lexico que seria diferente

const cliente = {
    nome: 'Adalto',
    idade: 21,
    peso: 65, 
    endereco: {
        logradouro: 'Rua qualquer',
        numero: 123,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)