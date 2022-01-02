//estrutura vetorial em que se pode agrupar um conjunto de elementos e controla-las pelo indice

//Em js o array é heterogeneo

const valoresArray = [1,2,3,4,5,6,7,8]

console.log(valoresArray[0], valoresArray[3])
console.log(valoresArray[6]) 

valoresArray [6] = 10.12

console.log(valoresArray[6])
 
//Acessando quantidade de elementos do Array
console.log(valoresArray.length)

//função para adicionar elementos no array
valoresArray.push("Estou aqui")
console.log(valoresArray.length)

// O array em js pode ser heterogeneo porem não é uma boa prática
valoresArray.push({id: 3}, false, null, 'teste')
console.log(valoresArray)

// função que retira o último valor do array
console.log(valoresArray.push(4))
console.log(valoresArray.pop())


// deletando valores do array
delete valoresArray[0]
console.log(valoresArray)

//tipo do array
console.log(typeof valoresArray)

