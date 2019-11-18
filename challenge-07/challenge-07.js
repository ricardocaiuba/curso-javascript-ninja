console.log("----------------[  Operador de módulo %  ]-------------------") ;
console.log("3 / 3 => ", 3 / 3) ;
console.log("3 % 3 => ", 3 % 3) ;
console.log("5 / 2 => ", 5 / 2) ;
console.log("5 % 2 => ", 5 % 2) ;

var numerosPares = 0
while (numerosPares <= 20) {
    if ((numerosPares % 2) === 0) {
        console.log("=>", numerosPares) ;
    }
    numerosPares++ ;
}

console.log("----------------[  Arrays (length)  ]-------------------") ;
var arr = [
    "Rodrigues",
    null,
    true,
    {
        bola: "azul"
    },
    function() {

    }
] ;
console.log(arr.length) ;
console.log("-") ;

var qdeItens = arr.length ;
while (qdeItens >= 0) {
    console.log(arr[qdeItens - 1]) ;
    qdeItens-- ;
}

console.log("-") ;

var qdeItens = arr.length ;
while (qdeItens > 0) {
    console.log(arr[qdeItens - 1]) ;
    qdeItens-- ;
    if (qdeItens === 3) {
        console.log(arr[qdeItens].bola) ;
    }
}

console.log("----------------[  Método push  ]-------------------") ;
var arr = [
    1,
    2,
    3, 
    "Rodrigues",
    {
        bola: "azul"
    }
] ;
console.log(arr) ;
console.log(arr.length) ;
for (var i = 0 ; i < arr.length ; i++ ) {
    console.log(arr[i].bola) ;
}

console.log("Add item ao array:") ;
arr.push(["la", "la2", "la3"]) ;

arr.push({
    carro: "BMW"
}) ;
console.log(arr) ;
console.log(arr.length) ;

arr.push(function soma(arg1, arg2) {
    return arg1 + arg2 ;
}) ;
console.log(arr) ;
const functionSoma = 7 ;
console.log(arr[functionSoma](1, 5)) ;
arr.push(null) ;
arr.push([
    "a",
    "b",
    "c",
    {
        firstName: "Ricardo",
        lastName: "Rodrigues",
        age: 43
    }
]) ;
console.log(arr) ;
/*
Crie um array com 5 items (tipos variados).
*/


/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
// ?

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// ?

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ?

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// ?

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
// ?

console.log( 'Números ímpares entre 111 e 125:' );
// ?