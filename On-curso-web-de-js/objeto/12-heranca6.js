function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Bem Vindo', 567)
console.log(aula1, aula2)

// simulando new(parte avançada)

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo')
const aula4 = novo(Aula, 'Até breve')
