function teste1(num){
    if(num >= 7)
        console.log(num)
        console.log('final')
    
}

teste1(6)
teste1(7)

// neste caso o bloco do if é opcional porém é indicado colocar sempre o bloco para fins de organização

//todas as sentenças que não possuirem parametros do if serão exibidas sempre que a função for executada.

const teste2 = (a,b) =>{
    if(a = b)
    
    ;  // muito cuidado nunca ponha virgula após o if
    
    {
        console.log('A é igual a B')
    }
}

teste2(2,3)