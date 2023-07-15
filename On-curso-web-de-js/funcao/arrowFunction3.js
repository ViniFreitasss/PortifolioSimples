const { cpuUsage } = require("process")

let comparaComThis = function(param){
    console.log(param === this)
}
//This sempre aponta para o escopo global quando usado para referênciar uma função comum tanto no Node quando no Broweser
comparaComThis(global)

// OBS = This esta sendo usado para referênciar o global "então o this não é o this"
comparaComThis(this)

// perceba que o this da função que setava para global foi alterado pelo bind e passou a apontar para o obj.
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// funções arrow sempre apontam para o module.exports
let comparaComThisArrow = (param) => console.log(param === this)

comparaComThisArrow(global)
comparaComThisArrow(module.exports)

// tentativa de mudar o escopo da função arrow.

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)

// Perceba que a arrow function não sofrer alteração de escopo.