
const areaCircunferencia = (raio, area) =>{
    area = Math.PI * Math.pow(raio, 2)
    console.log(area.toFixed(2), 'm²')
    }
    
    areaCircunferencia(10)


// ---------------------------------------

const notas = [6,7,8,9,10]
for(x in notas){
    if(x == 2){
        break
    }
    console.log(`${x} = ${notas[x]}`)
}


const doceria = ['bolo', 'sonho']
console.log(doceria.pop())

const obj = {} 
obj.falar = (a, b) => a + b