console.log("----------------[  do / while  ]-------------------");
var counter = 1;
while (counter < 10) {
    console.log(counter++);
}
console.log("Caounter não é menor que 10:", counter);

console.log("-");

counter = 1;
do {
    console.log(counter++);
} while (counter < 10);

console.log("----------------[  for in  ]-------------------");

var car = {
    brand: "VW",
    model: "Gol",
    year: 2013
};

for (var prop in car) {
    console.log(prop, car[prop]);
}
console.log(car);

console.log("-");

console.log("brand in car?", "brand" in car);
console.log("brand in doors?", "doors" in car);

console.log("----------------[  Saltos  ]-------------------");

// return é um tipo de salto

function myFunction(arg) {
    if (arg === 10) {
        return true ;
    }
    var nome = "Ricardo Rodrigues" ;
    return `${nome} -> ${arg}!` ;
}

console.log(myFunction(5)) ;
console.log(myFunction(10)) ;

console.log("-");
// break
var number = 10 ;
switch (number) {
    case 1:
        console.log("1") ;
        break;
    case 2:
        console.log("2") ;
        break;
    case 10:
        console.log("10") ;
        break;
        
    default:
        console.log("Default") ;
}
console.log("fim do switch") ;

console.log("-");
// breack com for
for (var i = 0 ; i < 10 ; i++) {
    if (i === 5) {
        break ;
    }
    console.log(i) ;
}
console.log("Fim do for") ;

console.log("-");
// com array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
for (var i = 0 ;  i < arr.length ; i++) {
    if (i === 5) {
        break ;
    }
    console.log(i) ;
}
console.log("Fim do for com array") ;

console.log("-");
// continue

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
for (var i = 0 ;  i < arr.length ; i++) {
    if (i === 5) {
        continue ;
    }
    console.log("continue ->", i) ;
}
console.log("Fim do for com continue") ;

// Envolva todo o código desse arquivo em uma IIFE (incluindo esse comentário).

/*
Crie uma variável chamada `once`, que recebe `false` como seu valor.
Crie um loop que execute enquanto essa variável for verdadeira. Dentro do
loop, mostre no console a mensagem:
'Entrou ao menos uma vez!'
Qual loop você deve usar para que essa mensagem seja mostrada no console?
*/
// ?

/*
Crie um objeto chamado `person`, que receba as seguintes propriedades:
- 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
para o nome, idade, peso e data de nascimento dessa pessoa.
*/
// ?

/*
Use um loop para percorrer o objeto criado acima, mostrando no console
a frase:
'The [PROPERTY] of person is [VALUE]'
Aproveite e crie uma variável `counter` que vai contar quantas propriedades
esse objeto tem.
Após o loop, mostre a frase:
'The person has [COUNTER] properties'
*/
// ?

/*
Crie uma função chamada `moreThan`, que vai verificar se a pessoa (objeto
criado acima) é mais velha que a idade passada por parâmetro.
Se verdadeiro, retornar `true`. Senão, retornar false.
Após a função, mostrar a mensagem no console:
'The person has more than 25 years old? [TRUE/FALSE]'
*/
// ?

/*
Faça um loop de 0 a 20, que adicione cada número como um item de um
array chamado `numbers`. Se o contador for maior que 10, saia do loop.
Mostre no console os números no array.
*/
console.log('De 0 a 10:');
// ?

/*
Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
esses. Se o número for ímpar, pular para o próximo número.
Mostrar no console os números do array.
*/
console.log('Pares de 0 a 20:');
// ?
