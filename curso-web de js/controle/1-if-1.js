function soBoaNoticia(nota){
    if(nota >= 7){
       console.log('Aprovado com', nota) 
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade... ', valor)
    }
}

// Os parametros do if sempre são covertidos para a estrutura booleana.

seForVerdadeEuFalo()