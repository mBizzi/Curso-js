// par/nome e valor

const saudaçao = "ola" //contexto léxico1

function exec() {
    const saudaçao = "tudo bem" //contexto léxico 2
    return saudaçao
}
//objetos são grupos anhinhados de par/nome e valor

const cliente = {
    nome: "Pedro",
    idade: 22,
    peso: 90,
    endereço: {
        longadoro: "rua da Divisa",
        numero: 64,
    }
}
 console.log (saudaçao)
 console.log(exec());
 console.log (cliente)