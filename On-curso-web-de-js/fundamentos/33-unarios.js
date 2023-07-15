let num1 = 1
let num2 = 2

num1++ //acrescenta uma unidade à variável
console.log(num1)

--num1
console.log(num1) // subtrai uma unidade da variável

//precedência maior em pre-fix

console.log(++num1 === num2--) // o valor só é decrementado após a coparação devido à ordem de precedência.
console.log(num1 === num2)

// Dica de ouro mantenha o seu código o mais simples possível.
// não coloque incrementos dentro de comparações.

//CLEAN CODE

