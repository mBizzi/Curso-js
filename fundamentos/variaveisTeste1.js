//Dentro do escopo global ela e vista na aplicação toda
{
    {
        {
            {
                var sera = "sera?"  
            }
        }                     
    }
}
console.log(sera);


//Dentro da função ela so e vista na funçã

function teste() {
    var local = 123
    console.log(local);
}
teste()


//variaves definidas com a palavra reservada var, tem escopo global e escopo de função 
//variaveis definidas com let, tem escopo global, escopo de função e escopo de blocos