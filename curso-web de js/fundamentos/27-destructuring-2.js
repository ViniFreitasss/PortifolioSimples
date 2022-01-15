
//Jeito convencional 
//const valores = [10]
//console.log(valores[0])

// criando destructure com array e setando valores
// repare que ao criar um destruture utilizando o array já feita a declaração das variaveis

const [a] = [,10]
console.log(a)

const [n1, n2, n3, n4, n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

// a ',' dentro do array permite igonarar o primeiro elemento e ir pro array que esta contido dentro do array me questão.

// Embora não seja uma boa prática
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)