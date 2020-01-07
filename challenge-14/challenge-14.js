console.log("----------------[  ARRAYS - reduce  ]-------------------");

var arr = [1, 2, 3, 4, 5];
console.log(arr);
var reduce = arr.reduce(function (acumulado, atual, index, array) {
    return acumulado + atual;
}, 0);
/*
1ª - 0 + 1 = 1
2ª - 1 + 2 = 3
3ª - 3 + 3 = 6
4ª - 6 + 4 = 10
5ª - 10 + 5 = 15
*/
console.log("reduce (não modifica o array) ", reduce);

var string = ["R", "I", "C", "A", "R", "D", "O"];
var reduce2 = string.reduce(function (acumulado, atual, index, array) {
    return acumulado + atual;
});
console.log("Com string ", reduce2);

console.log("----------------[  ARRAYS - reduceRight  ]-------------------");
var stringReduceRight = ["R", "I", "C", "A", "R", "D", "O"];
var reduce3 = stringReduceRight.reduceRight(function (acumulado, atual, index, array) {
    return acumulado + atual;
});
console.log("Com reduceRight: ", reduce3);

console.log("----------------[  ARRAYS - indexOf  ]-------------------");
var arrIndexOf = [1, 2, 3, 4, 5];
console.log("Posição: ", arrIndexOf.indexOf(3));
console.log("Posição: ", arrIndexOf.indexOf(33));

var lastName = ["R", "O", "D", "R", "I", "G", "U", "E", "S"];
console.log("Posição da letra no sobrenome: ", lastName.indexOf("R", 1));

console.log("----------------[  ARRAYS - lastIndexOf  ]-------------------");
lastName = ["R", "O", "D", "R", "I", "G", "U", "E", "S"];
console.log("Posição da letra no sobrenome: ", lastName.lastIndexOf("R"));
console.log("Posição da letra no sobrenome: ", lastName.lastIndexOf("R", 2));

console.log("----------------[  ARRAYS - isArray  ]-------------------");
lastName = ["R", "O", "D", "R", "I", "G", "U", "E", "S"];
console.log("isArray: ", Array.isArray(lastName));
console.log("isArray: ", Array.isArray("Ricardo"));
console.log("isArray: ", Array.isArray({}));

console.log("-----------------------------------");

(function () {
    /*
    Envolva todo o código desse desafio em uma IIFE.
    */

    /*
  Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
  elemento será um objeto no formato:
  { number: [NUMBER] }
  Os números devem ser de 1 a 10.
  Mostre esse array no console.
  */
    console.log("----------------[  Exercício 1  ]-------------------");
    var numberObjects = [];
    for (var i = 1; i <= 10; i++) {
        numberObjects.push({ number: i })
    }

    console.log("Number Objects Array: ", numberObjects);

    /*
  Crie um array chamado `justNumbers`, que terá como elementos somente os
  números do array criado acima. Mostre esse novo array no console.
  */
    console.log("----------------[  Exercício 2  ]-------------------");
    var justNumbers = numberObjects.map(function (item) {
        return item.number;
    });

    console.log("\nJust Numbers: ", justNumbers);
    /*
    Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
    somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
    no console.
    */
    console.log("----------------[  Exercício 3  ]-------------------");
    var justMod2Or3 = justNumbers.filter(function (item) {
        return item % 2 === 0 || item % 3 === 0
    });

    var justMod2Or3_Aux = justNumbers.map(function (item) {
        if (item % 2 === 0 || item % 3 === 0) {
            return item;
        }
    });

    console.log("\nJust module of division by 2 or 3: ", justMod2Or3);
    console.log("\nJust module of division by 2 or 3 - aux: ", justMod2Or3_Aux);

    /*
    Declare uma variável chamada operation que receba, do array criado acima,
    um valor reduzido pela seguinte operação:
    - Somar 1 ao último valor retornado;
    - Multiplicar o resultado pelo valor atual.
    O cálculo deve começar com zero.
    Mostre o resultado no console.
    */
    console.log("----------------[  Exercício 4  ]-------------------");
    var operation = justMod2Or3.reduce(function (acumulado, atual) {
        return (acumulado + 1) * atual;
    }, 0);

    console.log("\nOperation:", operation);

    /*
    Faça o mesmo cálculo passado acima, mas começando do último item para o
    primeiro. O nome da variável deve ser operation2. Mostre o resultado no
    console.
    */
    console.log("----------------[  Exercício 5  ]-------------------");
    var operation2 = justMod2Or3.reduceRight(function (acumulado, atual) {
        return (acumulado + 1) * atual;
    }, 0);

    console.log("\nOperation 2: ", operation2);

    /*
    Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
    do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
    a "língua do P".
    PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
    infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
    falada, como se você estivesse falando em código xD
    */
    console.log("----------------[  Exercício 6  ]-------------------");
    var name = ["RI", "CAR", "DO"];
    var reduceP = name.reduce(function (acumulado, atual) {
        return acumulado + "P" + atual
    }, "");

    console.log('\nSeu nome na língua do "P": ', reduceP);

    /*
    Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
    e atribuirá o seu nome invertido (usando o array criado acima).
    */
    console.log("----------------[  Exercício 7  ]-------------------");
    var inversedName = name.reduceRight(function (acumulado, atual) {
        return acumulado + atual;
    });
    console.log("\nInversed Name: ", inversedName, name.reverse().join(""));

    /*
    Mostre no console o array `numberObjects`.
    */
    console.log("----------------[  Exercício 8  ]-------------------");
    console.log("\nNumber objects ", numberObjects);

    /*
    Verifique se existem em algum índice de numberObjects um objeto ìgual a
    { number: 2 }. Se houver, mostre no console:
    - "Existe um objeto { number: 2 } em numberObjects!"
    Senão, mostre a frase:
    - "Não existe um objeto { number: 2 } em numberObjects :("
    Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
    o que acontece ;)
    */
    console.log("----------------[  Exercício 9  ]-------------------");
    console.log("\nExiste um { number: 2 } em numberObjects?");
    var objSearch = numberObjects[1];
    if (numberObjects.indexOf(objSearch) > -1) {
        console.log("Existe um objeto { number: 2 } em numberObjects!");
    } else {
        console.log("Não existe um objeto { number: 2 } em numberObjects :(");
    }
    /*
    Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
    será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
    */
    console.log("----------------[  Exercício 9  ]-------------------");
    console.log("\nE buscando a partir do último índice, o { number: 2 } existe?");
    if (numberObjects.lastIndexOf({ number: 2 }, 2) > -1) {
        console.log("Existe um objeto { number: 2 } em numberObjects!");
    } else {
        console.log("Não existe um objeto { number: 2 } em numberObjects :(");
    }
    /*
    Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
    formato de String.
    */
    console.log("\njustMod2Or3 é um array? Se for, a representação dele em String é:");
    if (Array.isArray(justMod2Or3)) {
        console.log("justMod2Or3 é um array", justMod2Or3.toString());
    } else {
        console.log("Não é um array!");
    }
})();
