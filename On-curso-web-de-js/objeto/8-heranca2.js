// Cadeia de prototipos prototype chain

Object.prototype.attr0 = 'Z' // não faça isso não é recomendado.
const avo = { attr1: 'A'}
const pai = {__proto__:avo, attr2: 'B' }
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

// exemplo

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
       // da mesma forma que se usa this para referenciar o objeto atual se usa super para referenciar o prototipo
    }
}

// estabelece a relação de prototipo obj, seguido de prototipos
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

