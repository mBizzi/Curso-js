const valores = [7.7, 8.9, 6.3, 9.2] //forma literal//numeros real usar o ponto
console.log (valores[0], valores[3]) //pegar vslores no indice 10 e no indice 03

valores [4] = 10 //adicionar no indice 04 o valor 10
console.log (valores.length) //(length)acessar a quantidade, quantos há, acessar o index

valores.push({id: 3}, false, null, 'teste')//(push)adicionar novos elementos
console.log (valores)

console.log(valores.pop());//(pop)tirar a ultima posição do array|e vai retorna
delete valores [0]//(delete)excluir do array//tirar um atributo
console.log(valores);

console.log (typeof valores)//consultar o tipo