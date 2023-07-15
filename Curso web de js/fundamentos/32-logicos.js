function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const materSaudavel = !comprarSorvete 

    return { comprarSorvete, comprarTv50, comprarTv32, materSaudavel }
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))

// não existe um operador ou exclusivo para trabalhar com numeros booleanos, porém ele pode ser simulado pela diferença
// testes
let {a, b} = {a : 3, b : 1}

const [c,d] = [1,2]

console.log(a,b)
console.log(c + d)

