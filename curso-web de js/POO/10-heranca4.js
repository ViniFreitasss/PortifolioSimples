function MeuObjeto(){}
console.log(MeuObjeto.prototype)

// Criando duas instancias da função.

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

// Todos os objetos criados apartir duma mesma função construtora apontam para um mesmo prototipo
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Qualter'
obj2.falar()
