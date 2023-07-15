
// vantagem do function declaration = quando utilizado se pode até mesmo chamar a função antes de sua criação pois o compilador às lê primeiro.
console.log(soma(3,4))

// function expression não possuí a mesma vantagem.
// console.log(sub(3,4))

// named fuction expression não possuí a mesma vantagem.
// console.log(mult(3,4)) 

// function declaration
function soma(x, y){
    return x + y
}

// fuction expression
const sub = function(x, y){
    return x - y
}

// named function expression (pouco usado)
const mult = function mult(x, y){
    return x * y
}
