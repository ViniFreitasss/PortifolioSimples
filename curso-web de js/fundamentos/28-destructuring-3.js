function rand({ min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min // calculo redundante apenas para gerar gargalo no código
    return Math.floor(valor)
}

console.log(rand({ max: 50, min: 40}))
console.log(rand({}))

// Nesta função o distructure de objeto foi passado dentro dos parametros da função com o intuito de facilitar o acesso dos atributos

// Math.random() função que exibe um numero aleatório
// Math.floor() função que arredonda o numero para baixo

// Observe que na instancia da função foram passados atributos dentro de um objeto graças ao destructure que permite que eles sejam utilizados

//testes
console.log(Math.random())
console.log((50 - 40) + 40)
console.log(Math.random() * 50)
console.log(Math.ceil(0.4))