

console.log('comentário simples')
//comentário de javascript

console.log('comentário amplo')
/*
comentário amplo em javascript,
 ou seja,
  de multiplas linhas
*/

console.log('Dicas de como utilizar comentários')
//cuidado com comentário irrelevantes

/*quando for criar uma aplicação crie váriaveis didáticas, 
ou seja, váriasveis que ilustrem o que está ocorrendo, 
evite criar muitos comentários tenha um código mais limpo*/

console.log(typeof Object)

//testes
let a = 3
global.b = 123
this.c = 465

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports === this) 
console.log(module.exports)

// dentro do node cada arquivo é um módulo

// criando uma variavel diretamente no escopo global; não recomendado
abc = 2345
console.log(global.abc)
