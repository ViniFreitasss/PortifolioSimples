
// função literal
function fun1(a, b) {
    console.log(a + b)
}

//Armazenada em variável
const fun2 = function (a, b) {
    console.log(a + b)
}

//função dentro de array

    const nums = [function (a, b) { console.log(a + b) }, fun1, fun2]
        nums[0](5, 8)

//função dentro de objeto 
    
        const obj = {}
        obj.falar = function () { }
        console.log(obj.falar())

//função como retorno 
        function Soma1(a, b) {
            return function Soma2(c) {
                console.log(a + b + c)
            }
        }
Soma1(8, 9)(7)

//função como parâmetro 
        function run(fun) {
            fun()
        }
run(function (a, b) { console.log(a + b) })
