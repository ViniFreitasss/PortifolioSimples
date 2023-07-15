function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido ${area} m²`)
    }else{
        return console.log(area, 'm²')
    }
}

area(2,2)
area(5,5)
area(7)
area(4,5,6)