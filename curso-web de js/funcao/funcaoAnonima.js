const soma = function(x, y){

    return x + y
}

const imprimiResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

// observe que os dados que estavam em a e b foram passados para x e y devido á atribuição da função soma ao parametro operacao.

imprimiResultado(3,4)
imprimiResultado(3,4, soma)
imprimiResultado(3,4, function(x, y){
    return x - y
})
imprimiResultado(2, 3, (x, y) => x * y)

const pessoa = {
    falar(){
        console.log('Opa')
    }
}

falar()