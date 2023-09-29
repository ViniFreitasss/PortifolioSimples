const fs = require('fs') // biblioteca presente no core do node para leitura de dados

const caminho =__dirname + "/arquivo.json"

// sincrona...
// se for um arquivo pesado, o event loop pode ficar travado.

const conteudo = fs.readFileSync(caminho, "utf-8")
console.log(conteudo)

// assincrono...
// mais interessante

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require("./arquivo.json")
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})