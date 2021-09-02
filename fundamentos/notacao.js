console.log(Math.ceil(6.1)); //arredondamento de numero reais (ceill=ceu)

const obj = {}  
obj.nome = "Bola" //atrubuir ao objeto de forma dinamica
obj["nome"]  = "bola2" //nome = atributo //(criar atributos com espaço
console.log(obj.nome); //criar ou acessar um atributo que ja exista e sempre com essa sintax)

function obj (nome) {
    this.name = nome //this deixa publico
}
 
const obj2 = new obj