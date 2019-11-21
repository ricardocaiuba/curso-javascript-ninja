console.log("----------------[  Wrapper Objects  ]-------------------");
// -- Valores primitivos não sáo objetos --
var name = "Rodrigues" ;
console.log(name.length) ;

console.log("----------------[  Construtores  ]-------------------");
var name = new String("Ricardo Rodrigues") ;
var age = new Number(43) ;
var ninja = new Boolean(false) ;

console.log(name, ` -> ${name} - valueOf -> ${name.valueOf()}`) ;
console.log(age) ;
console.log(ninja) ;

console.log("-");

var myVar = String(10) ;
console.log(myVar)
var myVar = String("10".valueOf()) ;
console.log(myVar)
var myVar = Number("180") ;
console.log(myVar)

console.log("----------------[  typeOf  ]-------------------");
// Como testar tipos de valores?
// operdor unário typeof <operand>
console.log(typeof indefined) ;
console.log(typeof function() {}) ;
console.log(typeof true) ;
console.log(typeof 10) ;
console.log(typeof "JS Ninja") ;

console.log("-") ;
// Confiar no typeOf apenas com dados primitivos
function sum(num1, num2) {
    return num1 + num2 ;
}

console.log(sum(10, 2)) ;
console.log(sum("JS", 2)) ;
console.log(sum({}, [])) ;

function subtraction(num1, num2) {
    var result ; 
    result = "Parâmetros inválidos" ;
    if (typeof num1 === "number" && typeof num2 === "number" ) {
        result =  `Resultado de ${num1} - ${num2} é ${num1 -num2}` ;
    }
    return result ;
}
console.log(subtraction(10, 3)) ;
console.log(subtraction({}, [])) ;

function subtraction(num1, num2) {
    var result ; 
    result = "Parâmetros inválidos" ;
    if (typeof num1 === "number" && typeof num2 === "number" ) {
        result =  `Resultado de ${num1} - ${num2} é ${num1 -num2}` ;
    } else if (typeof num1 === "object" && num1 === null) {
        result = "Parâmetros não podem ser nulos" ;
    }
    return result ;
}

console.log(subtraction(10, 3)) ;
console.log(subtraction({}, [])) ;
console.log(subtraction(null, [])) ;

console.log("-");

(function() {
    /*
    Crie uma IIFE que envolva todo esse arquivo (inclusive esse comentário),
    e faça a indentação correta.
    */
    console.log("----------------[  Exercicio 1  ]-------------------");

    /*
    Sem alterar os códigos nos `console.log` abaixo, faça com que o retorno
    deles seja "true", usando os Wrapper Objects como "conversores" nos valores
    das variáveis. Analise o que está sendo impresso no console para saber como
    resolver o problema corretamente.
    */
    console.log("----------------[  Exercicio 2  ]-------------------");
    var five = Number("5");
    console.log( five + ' é número?', typeof five === 'number' );

    var concat = String(10) + String(10);
    console.log( '"' + concat + '" é uma string? E é igual a "1010"?', typeof concat === 'string' );

    /*
    Voltando ao exemplo da calculadora, vamos utilizar mais uma abordagem
    funcional, mas dessa vez, separando algumas responsabilidades.
    - Primeiro, crie um objeto chamado `operation` que terá as propriedades:
    
    - Cada propriedade vai receber uma função (logo, elas serão métodos), e essa
    função receberá dois parâmetros e retornará a operação referente à sua
    propriedade, usando os valores passados por parâmetro.
    */
    console.log("----------------[  Exercicio 3  ]-------------------");
    var operation = {
        '+': function(x, y) {
            return x + y
        },
        '-': function(x, y) {
            return x - y
        },
        '*': function(x, y) {
            return x * y
        },
        '/': function(x, y) {
            return x / y
        },
        '%': function(x, y) {
            return x % y
        }
    } ;
    console.log(operation["*"]) ;
    console.log(operation) ;
    /*
    Crie uma função chamada `isOperatorValid`, que receberá um operador por
    parâmetro.
    - Essa função será responsável por verificar se o operador passado por
    parâmetro a ela é válido, ou seja, se ele é igual a '+', '-', '*', '/' ou
    '%'.
    - Se for igual a qualquer um desses, ela deverá retornar "true".
    Caso contrário, "false".
    - O desafio é fazer o retorno sem usar "if" ou "switch".
    */
    console.log("----------------[  Exercicio 4  ]-------------------");
    function isOperatorValid(operator){
        //return operation[operator] !== undefined ;
        return !!operation[operator] ;
    }
    console.log(isOperatorValid("+")) ;
    console.log(isOperatorValid("9")) ;

    /*
    Agora vamos criar a calculadora.
    - Crie uma função chamada `calculator`, que receberá como parâmetro um
    operador;
    - Se o operador não for válido, a função deve retornar "false";
    - Se o operador for válido, retornar uma segunda função que receberá dois
    parâmetros;
    - Se algum dos parâmetros não for um número, retornar "false";
    - Senão, retornar o método do objeto "operation" criado acima, baseado no
    operador passado para a função "calculator", e passando para esse método
    os dois parâmetros da função de retorno de "calculator".
    */
    console.log("----------------[  Exercicio 5  ]-------------------");
    function calculator(operator) {
        var result = isOperatorValid(operator) ;
        if (result) {

            result = function(arg1, arg2) {
                if (typeof arg1 !== "number" || typeof arg2 !== "number") {
                    return false ;
                }
                return operation[operator](arg1, arg2) ;
            }
        }
        return result ;
    }

    console.log(calculator("Q")) ;
    console.log(calculator("+")) ;
    console.log(calculator("+")(5, 10)) ;

    /*
    Crie uma função chamada "showOperationMessage" que recebe três parâmetros:
    - o operador, o primeiro número e o segundo número. O retorno da função
    deve ser a frase:
    'A operação [NUMBER1] [OPERATOR] [NUMBER2] =';
    Essa função mostrará a mensagem da operação que criaremos mais abaixo.
    */
    console.log("----------------[  Exercicio 6  ]-------------------");
    function showOperationMessage(operator, arg1, arg2) {
        return `A operação ${arg1} ${operator} ${arg2} =` ;
    }

    /*
    Crie uma função chamada "showErrorMessage" que recebe um parâmetro: o
    operador da operação cálculo, quando a operação não for válida.
    Essa função deverá retornar a frase:
    'Operação "[OPERATOR]" não permitida!'
    */
    console.log("----------------[  Exercicio 7  ]-------------------");
    function showErrorMessage(operator) {
        return `Operação "${operator}" não permitida!` ;
    }

    /*
    Nossa calculadora está pronta! Agora vamos testá-la:
    PASSO 1:
    - Declare 3 variáveis: "number1" e "number2", iniciando com valor zero, e
    "operationSignal", sem valor por enquanto.
    */
    var number1 = 0 ;
    var number2 = 0 ;
    var operationSignal ;

    /*
    PASSO 2:
    Atribua à variável operationSignal o operador de soma, e declare uma
    variável chamada "sum", que receba a função "calculator", passando por
    parâmetro a variável que recebeu o sinal da operação.
    */
    console.log("----------------[  Exercicio 8  ]-------------------");
    operationSignal = "+"
    var sum = calculator(operationSignal) ;

    /*
    PASSO 3:
    "sum" agora é uma função, e, se o sinal correto não foi passado para a
    função "calculator", "sum" será false. Certifique-se de que "sum" não é
    "false", e então atribua às variáveis "number1" e "number2", dois números
    que serão os operandos da operação de soma.
    Após isso, mostre no console o resultado da operação, passando dois
    parâmetros para o método "log" de "console":
    - O primeiro será a mensagem da operação (usando a função criada acima);
    - O segundo, a função de soma, passando os dois operandos.
    - Se "sum" for "false", mostrar no console a mensagem de erro.
    */
    console.log("----------------[  Exercicio 7  ]-------------------");

    if (sum) {
        number1 = 10 ;
        number2 = 12 ;
        console.log(showOperationMessage(operationSignal, number1, number2), sum(number1, number2)) ;

    } else {
        console.log(showErrorMessage(operationSignal)) ;
    }

    /*
    Repita desde o "PASSO 2" com as operações de subtração, multiplicação,
    divisão e resto. Crie variáveis com os nomes "subtraction",
    "multiplication", "division" e "mod".
    */
    console.log("----------------[  Exercicio 8  ]-------------------");
    operationSignal = "-"
    var subtraction = calculator(operationSignal) ;
    if (subtraction) {
        number1 = 8 ;
        number2 = 11 ;
        console.log(showOperationMessage(operationSignal, number1, number2), subtraction(number1, number2)) ;

    } else {
        console.log(showErrorMessage(operationSignal)) ;
    }

    operationSignal = "*"
    var multiplication = calculator(operationSignal) ;
    if (multiplication) {
        number1 = 80 ;
        number2 = 5 ;
        console.log(showOperationMessage(operationSignal, number1, number2), multiplication(number1, number2)) ;

    } else {
        console.log(showErrorMessage(operationSignal)) ;
    }

    operationSignal = "/"
    var division = calculator(operationSignal) ;
    if (division) {
        number1 = 150 ;
        number2 = 3 ;
        console.log(showOperationMessage(operationSignal, number1, number2), division(number1, number2)) ;

    } else {
        console.log(showErrorMessage(operationSignal)) ;
    }

    operationSignal = "%"
    var mod = calculator(operationSignal) ;
    if (mod) {
        number1 = 150 ;
        number2 = 11 ;
        console.log(showOperationMessage(operationSignal, number1, number2), mod(number1, number2)) ;
    } else {
        console.log(showErrorMessage(operationSignal)) ;
    }
    /*
    Repita o PASSO 2 novamente, mas passando um operador inválido, para ver se
    a mensagem de erro será mostrada no console.
    */
   console.log("----------------[  Exercicio 9  ]-------------------");
   operationSignal = "&"
   var subtraction = calculator(operationSignal) ;
   if (subtraction) {
       number1 = 8 ;
       number2 = 11 ;
       console.log(showOperationMessage(operationSignal, number1, number2), subtraction(number1, number2)) ;

   } else {
       console.log(showErrorMessage(operationSignal)) ;
   }
})() ;