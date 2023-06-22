function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

// Para criar um atributo privado em js basta criar uma função usando let ou const

// Para criar um atributo publico basta usar this.


const uno = new Carro // perceba que a função Carro foi instanciada dentro da const, ou seja, foi passada para dentro de uno.

uno.acelerar()

console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)

ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())

// perceba que a função haje como um molde para os objetos instaciados.

console.log(typeof Carro)
console.log(typeof ferrari)
