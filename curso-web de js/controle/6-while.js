function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while( opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')

// while é uma estrutura de repetição utilizada quando não se tem um número pré determinado de repetições

// os parametros de while são booleanos, ou seja, utilizam verdadeiro e falso, no entanto no while funciona assim: enquanto a estrutura relacional for verdadeira o laço se repete já quando for falsa ele finalmente finaliza.