const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    moedelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)

//__proto__ percorre a cadeia de prototipos até achar o atributo 