const [a] = [10] //quando se encontra do lado esquedo esta usando um operador de desestruturaçao
console.log (a) // depois do "=" esta se criando um array

const [n1, ,n3, ,n5,n6 = 0] = [10, 7, 9, 8 ]
console.log (n1, n3, n5, n6) //Desestrutura e ganha valor em variaveis 

const [ ,[ nota] ] = [, [8,] [9, 6, 8 ]] //ignora o primeiro arrey| pega a segunda posicao do segundo array
console.log (nota)