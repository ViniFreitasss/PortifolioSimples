// função sem retorno
function imprimiSoma(a, b){
    console.log(a + b)
}

// flexibilidades no comportamento da função

imprimiSoma(1,2)
// atribuí o numero à variável e define como undefined a outra, pois o dado não foi passado na chamada da função retornando um NaN
imprimiSoma(1)
// atribuí os 2 primeiros números às 2 variáveis diponíveis e ignora as restantes 
imprimiSoma(1,9,3,4)
// atribuí undefined às duas variáveis disponíveis, pois nenhum valor foi passado na chamada 
imprimiSoma()

// Função com retorno
//Perceba que b teve um valor padrão atribuido para quando nenhum valor for passado. 
 function soma(a, b = 0){
    return a + b
 }
soma(2, 3)
 console.log(soma(2,3))