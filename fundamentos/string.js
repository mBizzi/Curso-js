// funcionalidade do string

const escola = "cod3r"

console.log (escola.charAt(4)) //caractere 4 (r)
console.log (escola.charAt(5)) // caractere na casa vazia 5 = retorna vazio
console.log (escola.charCodeAt(3)) //posição na tabela unicode (51)
console.log (escola.indexOf("e"))//em que casa esta (retorna o numero °(3))

console.log (escola.substring(0)) //do 1 até o final
console.log (escola.substring(0, 3)) //os 3 primeiros sem incluir o 3°
console.log ("Escola " .concat(escola).concat("!"))
//console.log ("Escola " + escola + (" !!"))

console.log .(escola.replace(/\d/, "e")) //espreção regular (troca os digitos)
console.log(escola.replace(/\w/g, "e")) // todas as letras substituidas por "e" 

//                                   //

console.log ("Ana, Maria, Pedro".split (","))//converte string em array e o separador e a ","

