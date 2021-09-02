let listaDeFruta = ['abacaxi', 'pera', 'banana', 'morango', 'couve', 'uva'] 
console.log(`Lista de Frutas no inicio era: ${listaDeFruta}`);
delete listaDeFruta [4]
//listaDeFruta.splice(3,1) => deletar da lista e deixar o length sem espaços
listaDeFruta.push ('abacate', 'kiwi')

let listaAtual = `Atualmente a lista de frutas contem as seguintes frutas: ${listaDeFruta} `
let quantidade = `A quantidade de fruta é: ${listaDeFruta.length} `
let terceiroitem = `O terceiro intem da lista é: ${listaDeFruta[3]} `

console.log (listaAtual + "\n" + quantidade + "\n" + terceiroitem)









/*function adicionarItensALista(lista ,...itens){
    console.log(`Adicionando itens a lista ${itens}`)
    lista.push(itens)
}*/

/*const retornoConsoleLog = imprimir("opa") //outra funçao ao templete
imprimir(listaDeFrutaAtual)
imprimir(quantidade)
imprimir(terceiroItem)

function imprimir(texto) {
    console.log(texto)*/


