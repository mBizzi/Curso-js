// executar um processo baseado na sentença de código
// função sem retorno

function imprimirSoma (a, b){
    console.log (a + b)
}

imprimirSoma (2,3)
imprimirSoma (2, 10, 4, 5, 8, 98) //soma acontece nos dois primeiros números, os demais são ignorados
imprimirSoma ()


//função com retorno
function soma(a, b = 100) { //(100)é um valor padrão, caso não tenha outro
 return a + b //retornando o valor, sem imprimir    
}
//console.log (soma(2,5))
console.log (soma(2)) 
console.log(soma());