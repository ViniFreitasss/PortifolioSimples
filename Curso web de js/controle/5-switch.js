const imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10:                    //não é necessário repetir sentenças de código no switch
        case 9:
            console.log('Quadro de Honra')
            break //palavras reservada que faz com que ao ler(o copilador) o código que se encaixa na condição esse saia do switch.(break follow through)
        
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3, 2, 1, 0:                // Também podem ser substituidos por ","
            console.log('Reprovado')
            break
        default: 
            console.log('Nota inválida')
            break
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

//switch é uma estrutura de controle que permite seleção multipla.