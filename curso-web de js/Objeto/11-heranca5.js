console.log(typeof String)
// String é uma função
console.log(typeof Array)
// Array é uma função
console.log(typeof Object)
// Object é uma função
// toda função tem o atributo prototype

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
// split = vai quebrar a string num array este arry terá todas as letras separadas incluindo espaços em branco.
// reverse = vai inverter todos os elementos do array
// join = junta todos os elementos do array numa string

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())

// sobre escrevendo um comportamento duma função
String.prototype.toString = function(){
    return 'Lascou tudo'
}
// Não substitua comportamentos que já existem duma forma global
console.log('Escola Cod3r'.reverse())

