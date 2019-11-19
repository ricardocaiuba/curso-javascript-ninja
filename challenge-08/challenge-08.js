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

// Você pode atribuir funções:
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
console.log("----------------[  Exercicio 1  ]-------------------");
var sum = function calculateSum(arg1, arg2) {
    return arg1 + arg2 ;
} ;
console.log(sum) ;
console.log(sum(2, 3)) ;

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
console.log("----------------[  Exercicio 2  ]-------------------");
var firtParam1 = 2, secondParam = 3 ;
var result = sum(firtParam1, secondParam) ;
console.log(`A soma de ${firtParam1} e ${secondParam} é igual a ${result}.`)

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log("----------------[  Exercicio 3  ]-------------------");
console.log(`O nome da função que faz a soma é ${sum.name}`)
/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
console.log("----------------[  Exercicio 4  ]-------------------");
function showName(showName) {
    return showName ;
}
console.log(showName("Ricardo Rodrigues dos Santos")) ;
/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
console.log("----------------[  Exercicio 5  ]-------------------");
var varShowName = showName ;
console.log(varShowName("Canjica e Trovão")) ;

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log("----------------[  Exercicio 6  ]-------------------");
console.log(`A função ${varShowName.name} retorna ${varShowName("Ricardo Rodrigues")}.`) ;

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
console.log("----------------[  Exercicio 7  ]-------------------");
function calculator(operator) {
    return function(firstParam, secondParam) {
        var resultOperator ;
        var result = "" ;
        switch (operator) {
            case "+":
                resultOperator = firstParam + secondParam ;
                break ;
            case "-":
                resultOperator = firstParam - secondParam ;
                break ;
            case "*":
                resultOperator = firstParam * secondParam ;
                break ;
            case "/":
                resultOperator = firstParam / secondParam ;
                break ;
            case "%":
                resultOperator = firstParam % secondParam ;
                break ;
            default:
                result = "Operação inválida!" ;
                                
        }
        if (!result) {
            result = `Resultado da operação: ${firstParam} ${operator} ${secondParam} = ${resultOperator}.`
        }
        return result
    } ;
} 
console.log(calculator("+")(5, 2)) ;
/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
console.log("----------------[  Exercicio 8  ]-------------------");
var sum = calculator("+") ;
console.log(sum) ;

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log("----------------[  Exercicio 9  ]-------------------");
console.log(sum(10, 45)) ;

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
console.log("----------------[  Exercicio 10  ]-------------------");
var subtraction = calculator("-") ;
var multiplication = calculator("*") ;
var division = calculator("/") ;
var mod = calculator("%") ;
console.log(subtraction) ;
console.log(multiplication) ;
console.log(division) ;
console.log(mod) ;

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
console.log("----------------[  Exercicio 11  ]-------------------");
console.log(`subtraction => ${subtraction(5, 2)}`) ;
console.log(`multiplication => ${multiplication(20, 8)}`) ;
console.log(`division => ${division(10, 2)}`) ;
console.log(`mod => ${mod(50, 10)}`) ;
console.log("-");
console.log(`invalid => ${calculator("Y")(1, 2)}`) ;
