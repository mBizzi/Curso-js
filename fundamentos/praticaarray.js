function criarProduto(nome, quantidade, preco) { //automatização da criaçao de produto
    return { nome, quantidade, preco } //retorno vai ser um objeto 
}

const fruta = criarProduto("banana", 6, 5.90)
const listaDeCompras = [  //lista de compras é um array
    fruta, // invocar a funçao e atribuir os parametros
    criarProduto("arroz", 1, 8.50), // nome quantidade e preço
    criarProduto("feijao", 2, 6.20)
]

const listaDeCompras2 = [  //lista de compras é um array
    fruta, // invocar a funçao e atribuir os parametros
    criarProduto("arroz", 1, 8.50), // nome quantidade e preço
    criarProduto("feijao", 2, 6.20)
]

criarProduto("opaytufdbhgfdxhjtgrdfgfdhs", 2, 6.20)

fruta.nome = "abacate"
listaDeCompras[1].nome = "morango"

console.log("IMPRIMINDO PRIMEIRA LISTA") // imprimir a lista 
console.log(listaDeCompras) // imprimir a lista 

console.log("IMPRIMINDO SEGUNDA, LISTA") // imprimir a lista 
console.log(listaDeCompras2) // imprimir a lista 