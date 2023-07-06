
const personagem = {
    saudacao:'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

personagem.falar()
// O this meio que permite acessar atributos fora do escopo

const falar = personagem.falar
falar()

// perceba que o uma vez que o this é setado para o escopo da função falar o atributo saudação não pode mais ser acessado pelo objeto no qual foi declarado originalmente.

// usando bind para contornar a situação.

const falarDePersonagem = personagem.falar.bind(personagem)

falarDePersonagem()
