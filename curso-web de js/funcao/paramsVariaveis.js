function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    } return console.log(soma)
}

soma(1,2,3,4,5)
soma()
soma('Teste','Teste1')