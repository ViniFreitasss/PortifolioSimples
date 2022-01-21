function tratarErroLancar(erro){
    //throw new Error('Erro tente mais uma vez')
    throw 10
}


function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch (e) {
        tratarErroLancar()
    }finally{
        console.log('finale')
    }
}
const obj = { name: 'Qualter' }

imprimirNomeGritado(obj)

// evite mostrar menssagens erro que não fazem sentido para o usuario