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
  console.log("Number Objects Array:");
  // ?

  /*
Crie um array chamado `justNumbers`, que terá como elementos somente os
números do array criado acima. Mostre esse novo array no console.
*/
  console.log("\nJust Numbers:");
  // ?

  /*
Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
no console.
*/
  console.log("\nJust module of division by 2 or 3:");
  // ?

  /*
Declare uma variável chamada operation que receba, do array criado acima,
um valor reduzido pela seguinte operação:
- Somar 1 ao último valor retornado;
- Multiplicar o resultado pelo valor atual.
O cálculo deve começar com zero.
Mostre o resultado no console.
*/
  console.log("\nOperation:");
  // ?

  /*
Faça o mesmo cálculo passado acima, mas começando do último item para o
primeiro. O nome da variável deve ser operation2. Mostre o resultado no
console.
*/
  console.log("\nOperation 2:");
  // ?

  /*
Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
a "língua do P".
PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
falada, como se você estivesse falando em código xD
*/
  console.log('\nSeu nome na língua do "P":');
  // ?

  /*
Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
e atribuirá o seu nome invertido (usando o array criado acima).
*/
  console.log("\nInversed Name:");
  // ?

  /*
Mostre no console o array `numberObjects`.
*/
  console.log("\nNumber objects");
  // ?

  /*
Verifique se existem em algum índice de numberObjects um objeto ìgual a
{ number: 2 }. Se houver, mostre no console:
- "Existe um objeto { number: 2 } em numberObjects!"
Senão, mostre a frase:
- "Não existe um objeto { number: 2 } em numberObjects :("
Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
o que acontece ;)
*/
  console.log("\nExiste um { number: 2 } em numberObjects?");
  // ?

  /*
Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
*/
  console.log(
    "\nE buscando a partir do último índice, o { number: 2 } existe?"
  );
  // ?

  /*
Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
formato de String.
*/
  console.log(
    "\njustMod2Or3 é um array? Se for, a representação dele em String é:"
  );
  // ?
})();
