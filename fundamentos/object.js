const prod1 = {}      //forma literal de criar um objeto
prod1.nome = "celular utra mega"    // objeto é uma coleção de chave e valores
prod1.preço = 4998.90  //nome e preço são atributos
prod1["desconto legal"] = 0.40 //evitar atributos com espaço (caso nescecite essa é a sintax)

console.log (prod1)

const prod2 = {
   nome: "camisa polo",
   preco: 79.90,
   obj: {
       blabla:1,
       obj: {
           blabla: 2
       }
   }
}
console.log(prod2)

//'{ "nome": "camisa polo", "preco": 79.90 }'
//jsom valido