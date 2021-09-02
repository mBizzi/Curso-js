// Armazena uma função dentro de uma variável

const imprimirSoma = function (a, b) {
   console.log(a + b); 
}

imprimirSoma (2, 3)

//Armazenando uma função arrow em uma variável

const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3));

//retorno explicito 
const divisao = (a, b) => a / b
console.log (divisao(10, 2))

// arrow function e uma forma de reduzir o codigo ()

const imprimir2 = a  => console.log (a)
imprimir2("Olá Mundo")