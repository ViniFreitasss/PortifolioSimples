function rand([min = 0, max = 1000]){
    if(min > max) [min,max] = [max,min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log([])

// perceba que ao utilizar o destructure em uma função a ordem de criação pode ser invertida, ou seja, se pode desistrutar um array que não existe e posteriormente utilizar seus atributos como se fossem variáveis.