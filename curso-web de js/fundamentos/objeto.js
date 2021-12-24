const prod1 = {} //criação do objeto
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 80
prod1["Desconto legal"] = 40 // evitar atributos com espaços

//Um objeto é um cojunto de pares "chave/valor"
//Perceba que variaveis foram relacionadas mesmo sem serem declaradas isso é possivél por o objeto aceita variaveis dinâmicas

console.log(prod1)

//Outra notação para criar os objetos

const prod2 = {
    name: 'Relógio Casio',
    preco: 300.00,
}
console.log(prod2)

//json não é a mesma coisa que objeto, json é um formato textual