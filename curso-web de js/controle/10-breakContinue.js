const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// O break fará com que o compilador saia do laço de repetição
for( x in nums ){
    if( x == 5) {
            break 
        } 
        console.log(`${x} = ${nums[x]}`)
 }

 //O continue fará que o compilador ignore uma repetição quando o laço atingir a condição,
for( y in nums ){
        if( y == 5){
                continue 
                    }
                console.log(`${y} = ${nums[y]}`)
 }

 // uso de rótulo

 // Não utilizar essa estrutura 
 externo: 
 for(a in nums){
     for(b in nums){
         if(a == 2 && b == 3){
             break externo
         }console.log(`Par = ${a}, ${b}`)
     }
 }