const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) =>{
    return func.salario < funcAtual.salario
}

axios.get(url).then(reponse =>{
    const funcionarios = reponse.data
   // console.log(funcionarios)

// mulher chinesa com o menor salário:
const func = funcionarios
.filter(chineses)
.filter(mulheres)
.reduce(menorSalario)

console.log(func)
})


