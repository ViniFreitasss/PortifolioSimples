console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

// this aponta para module.exports

// tome cuidado com o this quando você esta dentro duma função que esta dentro dum módulo

function logThis(){
    console.log('Dentro duma função')
    // dentro duma função o this não aponta para module.exports
    console.log(this === exports)
    console.log(this === module.exports)
    // dentro duma função this aponta para global.
    console.log(this === global)

}

// Obs numa arrow function this aponta para module.exports

logThis()