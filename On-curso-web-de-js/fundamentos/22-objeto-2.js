
// quando se instância uma função ele se torna um objeto

// instancia apartir da API padrão do JS
console.log(typeof new Object)
console.log(typeof Object)

    
// instancia apartir de função definida manualmente
    const Cliente = function(){}
    console.log(typeof Cliente)
    console.log(typeof new Cliente)

// instancia apartir de uma classe
    class Produto {}  // ES 2015 (ES6)
    console.log(typeof Produto)
    console.log(typeof new Produto)

// Instanciando uma função com o new
    function qualquer(){
        console.log(1 - 5)
    }

    new qualquer 
