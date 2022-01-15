const resultado = nota => nota >= 7 ? "aprovado" : "reprovado"


console.log(resultado(7.1))
console.log(resultado(6))

// Um operador ternario é composto por 3 partes
// primeira:  qualquer expressão booleana: nota >= 7
// segunda: ? sinal de iniciação do operador ternario
// terceira: estrutura de verdadeiro e falso dividida por :