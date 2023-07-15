function getInteiroAleatorioEntre(max, min){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 // repare que antes seria ilógico atribuir -1 para o "while" pois este sairia imediatamente do laço de repetição uma vez satisfeito o parametro relacional, porém agora com o "do while" é possivel realizar esta atribuição pois o bloco é executado antes da validação dos parametros



do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção selecionada foi ${opcao}.`)
} while (opcao !== -1)

console.log('Até a próxima!')