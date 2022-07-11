function Pessoa(){
    this.idade = 0

    // observe que o self foi utilizado para driblar a variação do this excluindo também a necessidade do .bind
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

// instancia da função que cria um objeto com a mesma.
new Pessoa
