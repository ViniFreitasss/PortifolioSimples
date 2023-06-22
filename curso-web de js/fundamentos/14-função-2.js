// armazendo uma função em uma variável ou constante
const imprimiSoma = function(a,b){
    console.log(a + b)
}

imprimiSoma(2, 3)

// armazenando uma função arrow em uma variável

 const soma = (a, b) => {
     return a + b
 }

 console.log(soma(4,6))

 // retorno implícito

 const subtracao = (a, b) => a - b

 console.log(subtracao(89, 57))

 // função hiper reduzida

 const imprimi2 = a => console.log(a)
 imprimi2('legal !!!')

 // testes
let qualquer = (a,b) =>{
        return (Math.pow(a,b))
    }
    console.log(qualquer(4,5))

 