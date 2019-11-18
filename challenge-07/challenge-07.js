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
console.log("----------------[  Exercicio 1  ]-------------------") ;
var myArray = [
    {
        firstName: "Ricardo",
        lastName: "Rodrigues",
        age: 43
    },
    null,
    [
        10,
        20, 
        30
    ],
    function Display(arg) {
        return console.log(arg) ;
    },
    "Canjica",
    "Trovão",
    "Pipoca"
] ;
console.log(myArray) ;
const display = 3 ;
myArray[display]("Olá") ;
/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
console.log("----------------[  Exercicio 2  ]-------------------") ;
myArray.push(function addItem(arg) {
    myArray.push(arg) ;
    return myArray ;
}) ;

myArray[display](myArray) ;
myArray[display](myArray.length) ;

const functionAddItem = 7 ;
myArray[functionAddItem]("Ricardo Rodrigues dos Santos") ;
myArray[display](myArray) ;

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log("----------------[  Exercicio 3  ]-------------------") ;
myArray[functionAddItem]([
    "Ricardo",
    43,
    {
        empresa: "Sage Brasil Software",
        naturalidade: "Santa Bárbara D´Oeste - SP"
    }
]) ;
myArray[display](myArray) ;

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("----------------[  Exercicio 4  ]-------------------") ;
myArray[display](`O segundo elemento do ultimo array criado é o ${myArray[myArray.length - 1][1]}`) ;

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("----------------[  Exercicio 5  ]-------------------") ;
var arrayPosition = 2 ;
var message = `O primeiro array tem ${myArray[arrayPosition].length} itens.` ;
myArray[display](message) ;
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("----------------[  Exercicio 6  ]-------------------") ;
var arrayPosition = 9 ;
var message = `O ultimo array tem ${myArray[arrayPosition].length} itens.` ;
myArray[display](message) ;
/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log("----------------[  Exercicio 7  ]-------------------") ;
var startNumber = 10 ;
while (startNumber <= 20) {
    if (startNumber % 2 === 0) {
        myArray[display](`Números pares => ${startNumber}`) ;
    }
    startNumber++ ;
}
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log("----------------[  Exercicio 8  ]-------------------") ;
var startNumber = 10 ;
while (startNumber <= 20) {
    if (startNumber % 2 !== 0) {
        myArray[display](`Números impares => ${startNumber}`) ;
    }
    startNumber++ ;
}
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log("----------------[  Exercicio 9  ]-------------------") ;
for (var i = 100 ; i <= 120 ; i++) {
    if (i % 2 === 0) {
        myArray[display](`Números pares com o for => ${i}`) ;
    }
}
console.log("-") ;
for (var i = 100 ; i <= 120 ; i++) {
    if (i % 2 !== 0) {
        myArray[display](`Números impares com o for => ${i}`) ;
    }
}