{
    {
        {
            {
                 var sera = 'Será ???'
                }
            }
        }
    }

    console.log(sera)

    // a variável var é identificavel independente do bloco em que for criada(desde que não seja uma função)
    
    function teste(){
        var local = 123
        
    }

    teste()
    //console.log(local)

    // mesmo a variável var não é reconhecida forá do escopo de uma função

    //(NO BROWESER)objeto global window que contem tudo que está forá das funções, o node não tem o objeto esse objeto
    var local = 123
    global.console.log(local)

    // Evite o escopo global em projetos que estão sendo versionados qualquer sobescrita da variável pode gerar erro

    // var global ou local