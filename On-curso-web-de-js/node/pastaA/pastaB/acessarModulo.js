const moduloA = require('../../1-moduloA')
console.log(moduloA.ola)

/*const saudacao = require('saudacao')
console.log(saudacao.ola)*/

const http = require('http')
http.createServer((req, res) =>{

    res.write('Bom dia pessoal')
    res.end()
}),listen(8080)