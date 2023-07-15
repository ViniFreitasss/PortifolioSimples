function qualquer(a, b) {
    a = a || 1                 // Perceba que o a está recebendo a estrutura condicional 'ou', ou seja, se o valor atribuido à 'a' for verdadeiro ele retorna 'a' se for falso retornará 1.
    b = b || 1 
    return a + b
}
    // Este possui umas falhas por exemplo ao passar o valor 0 o mesmo retornará 1.
    
    // Estratégias 2, 3 e 4.

function qualquer1(a, b, c) {
    a = a !== undefined ? a : 1
    // Possui uma falha o null e o NaN "passariam"
    b = 1 in arguments ? b : 1
    // O índice teria que ser alterado para parâmetros diferentes 
    c = isNaN(c) ? 1 : c
    // Forma mais segura

}
    
   // Jeito Oficial

function qualquer2(a = 0, b = 0, c = 0) {
    return a + b + c
}