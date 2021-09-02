// novo recurso do ES2015 
 
const pessoa = {            // anotação literal de um objeto usando nome e valor
      nome: "ana", 
      idade: 05,
      endereço: {
          lougadoro: "rua abc", 
          numero: 1000
      }

}
//let nome = pessoa.nome
//console.log (nome)

const { nome, idade } = pessoa // tire de dentro de pessoa nome e idade
console.log (nome, idade) //tirar atributos de dentro de um objeto e atribui a variaveis

const { nome:n, idade:i} = pessoa
console.log(n,i);   //tirar atributos e renomealos nas variaveis


const { sobrenome, bemHumorada = true} = pessoa //(bem humorada = true = resposta padrão)
console.log (sobrenome, bemHumorada) //sobrenome undefined

const { endereço: { lougadoro, numero, cep} } = pessoa // extrai diretamente de endereco 
console.log (lougadoro, numero, cep) //cep retorna undefined

const {conta:{ ag, n}} //erro quando não se tem obejeto de forma anhiada 
console.log (ag, n)




