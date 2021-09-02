const nome = "Maria"
const concatenação = "Olá " + nome + "!"

const template = `
Olá                    
 ${nome}! `       //template suporta quebra de linhas

console.log(concatenação, template)

// expressoes... 
console.log (`1 + 1 = ${1 + 1}`)

// chamar expressão dentro da função

const up = texto => texto.toUpperCase()
console.log(`ei...${up(`cuidado`)}!`) 



