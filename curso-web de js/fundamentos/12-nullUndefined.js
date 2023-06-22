
const a = {name: 'Teste'}

// quando ocorre essa atribuição o que de fato ocontece é que a constante "a" adiquiri o endereço de memória onde o objeto esta armazenado

// Neste caso temos objetos igualados,portanto os valores serão identicos em ambas as constantes.
// atribuição por referência: significa na prática que se modificar a o b perceberá a mudança e vise-versa.
	
	const b = a

    console.log(b)
    console.log(a)

// Neste caso temos tipo primitivo

let c = 3

let d = c

d++

console.log(c)
console.log(d)
// Neste caso os valores das variáveis serão diferentes.
// Quando se trabalha com dados primitivos se faz uma copia do valor, sendo assim eles são independentes,diferente dos objetos em que a atribuição é por referência.	
// objetos e primitivos = possuem atribuições diferentes em JS sendo por elas por copia e por referência repectivamente



let valor  // não inicializada
console.log(valor)
// console.log(valor2) O undefined é diferente do not defined que é um  erro exibido quando a variável não é sequer declarada.

valor = null // ausência de valor, ambora esteja declara

// recomendado sempre utilizar o null para zerar valores de variáveis

// cuidado acessar um dado que está null ou undefined gera erro

// exemplo: console.log(valor.String())

//O ideial é sempre utilizar um valor "nulo" como padrão como 0.
const produto = {}
console.log(produto.preco)

// tentar execuatar variáveis dinâmicas não gera erro, e sim undefined.

produto.preco = 3.50

console.log(produto)

produto.preco = undefined // evite atribuir undefined


