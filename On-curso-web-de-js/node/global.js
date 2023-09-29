// console.log(global)
// não é indicado mexer nesse módulo.

global.MinhaApp = {
    saudacao(){
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
}

Object.freeze(MinhaApp)