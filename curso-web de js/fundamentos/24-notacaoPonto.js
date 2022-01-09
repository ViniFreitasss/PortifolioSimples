// Notação Ponto

// Permite que acesse funções dentro de objetos
console.log(Math.ceil(6.1))

//obs: console e Math são objetos, enquanto log e ceil são funções

// Permite acessar objetos
const obj1 = {}
obj1.nome = 'bola'
/* 
obj1['nome'] = 'bola1' notação alternativa
console.log(obj1.nome) permite acessar o "atributo da variável" embora seja menos usual
*/

// this torna o atributo público ou seja será visivel fora da função
function Obj (nome){
    this.nome = nome
    this.exec = function(){
        console.log('exec ...')
    }
}

// a notação ponto é um recurso que permite acessar menbros"atributos,funções,objestos"

const obj2 = new Obj('Phafinir')
const obj3 = new Obj('Thoru')
console.log(obj2.nome)
console.log(obj3.nome)
console.log(obj3.exec())

