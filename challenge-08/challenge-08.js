console.log("----------------[  nomear funções  ]-------------------");
var func = function func() {
    return "hi" ;
} ;

console.log(func()) ;
console.log(func) ;
console.log(func.name) ;

function myFunction2() {
    return "function 2" ;
}
console.log(myFunction2()) ;
console.log(myFunction2) ;
console.log(myFunction2.name) ;

console.log("----------------[  Functional Programming  ]-------------------");
// Objetos de primeira classe
// {} <3 function() {}
// Como vc usa objetos literais
var car = {
    brand: "Chevrolet",
    model: "Silverado"
} ;

// Você pode criar funções literais!
function sum(arg1, arg2) {
    return arg1 + arg2 ;
}

// Como você atribui objetos à variáveis
var obj = {} ;

// Cocê pode atribuir funções:
var func = function func() {} ;

// Como você retorna objetos em uma função:
function person() {
    return ({
        name: "Ricardo",
        lastName: "Rodrigues"
    }) ;
}
console.log(person()) ;
console.log(person().name) ;
console.log(person().lastName) ;

function person2() {
    var info = {
        name: "Ricardo",
        lastName: "Rodrigues"
    }
    return info ;
}

console.log(person2()) ;

console.log("----------------[  Functional Programming - Parte 2  ]-------------------");

function adder(x) {
    return function(y) {
        return x + y ;
    } ;
}

function adder(x) {
    function addOther(y) {
        return x + y ;
    }
    return addOther ;
}


var add2 = adder(2) ;
console.log(add2) ;
console.log(add2(3)) ;
console.log(adder(5)(8)) ;

console.log("----------------[  Objetos com parâmetros  ]-------------------");

var car = {
    color: "gray" 
}
function getCarColor(myCar) {
    return myCar.color ;
}
console.log(getCarColor(car)) ;

function showOtherFunction(func) {
    return func() ;
}

function toReturnMyFullName() {
    return "Ricardo Rodrigues dos Santos" ;
} 
console.log(showOtherFunction(function() {
    return "Functional JS Ninja!" ;
})) ;

console.log(showOtherFunction(toReturnMyFullName)) ;


/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
// ?

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
// ?

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
// ?

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
// ?

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
// ?

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
// ?

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
// ?

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
// ?

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
// ?

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
// ?

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
// ?