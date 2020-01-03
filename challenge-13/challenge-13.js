console.log("----------------[  ARRAYS - toString()  ]-------------------");

var arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);
console.log(arr.toString());
console.log(arr.join("-"));
console.log("- objetos");
var obj = { a: 1, b: 2, c: 3 };
console.log(obj);
console.log(obj.toString());
console.log(obj.toString());

console.log("----------------[  ARRAYS - concat  ]-------------------");
console.log(arr.concat(6));
console.log(arr);
console.log(arr.push(7));
console.log(arr);
console.log(arr.concat([7, 8, 9, 10]));

console.log("----------------[  ARRAYS - unshift  ]-------------------");
console.log(arr);
console.log(arr.unshift("R"));
console.log(arr);

console.log("----------------[  ARRAYS - shift  ]-------------------");
console.log(arr);
console.log("push: ", arr.push(4));
console.log(arr);
console.log("pop: ", arr.pop());
console.log(arr);
console.log("unshift: ", arr.unshift(90));
console.log(arr);
console.log("shift: ", arr.shift());
console.log(arr);

console.log("----------------[  ARRAYS - slice  ]-------------------");
var arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log("slice(1): ", arr.slice(1));
console.log("slice(0): ", arr.slice(0));
console.log("slice(0, 2): ", arr.slice(1, 4));

console.log("----------------[  ARRAYS - splice  ]-------------------");
arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log("splice(3): ", arr.splice(3));
console.log(arr);
arr = [1, 2, 3, 4, 5, 6, 7];
console.log("splice(1, 3): ", arr.splice(1, 3));
console.log(arr);
console.log("splice(1, 0, 'a', 'b', 'c'): ", arr.splice(1, 0, "a", "b", "c"));
console.log(arr);
console.log("splice(1, 4, 2, 3, 4): ", arr.splice(1, 4, 2, 3, 4));
console.log("splice(3, 2, 4, 5): ", arr.splice(3, 2, 4, 5));
console.log("splice(5, 0, 6): ", arr.splice(5, 0, 6));
console.log(arr);

console.log("----------------[  ARRAYS - forEach  ]-------------------");
arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach(function(item, index, array) {
  console.log(item, index, array);
});
arr.forEach(function(item, index) {
  console.log(item, index);
});
var sum = 0;
arr.forEach(function(item) {
  sum += item;
});
console.log(sum);

console.log("----------------[  ARRAYS - every  ]-------------------");
arr = [1, 2, 3, 4, 5, 6, 7];
var every = arr.every(function(item) {
  return item < 5;
});
console.log(every);

console.log("----------------[  ARRAYS - some  ]-------------------");
arr = [1, 2, 3, 4, 5, 6, 7];
var some = arr.some(function(item) {
  return item % 2 === 0;
});
console.log(some);

console.log("----------------[  ARRAYS - map  ]-------------------");
arr = [1, 2, 3, 4, 5, 6, 7];

var map = arr.map(function(item) {
  return item + 1;
});
console.log(map);
var map = arr.map(function(item, index, array) {
  return {
    index: index,
    item: item
  };
});
console.log("map", map);
var newArr = [];
arr.forEach(function(item, index) {
  newArr.push({ index: index, item: item });
});
console.log("newArr, ", newArr);
console.log("-");

console.log("----------------[  ARRAYS - filter  ]-------------------");
arr = [1, 2, 3, 4, 5, 6, 7];

var filter = arr.filter(function(item) {
  return item > 2;
});
console.log("filter: ", filter);

var map2 = arr.map(function(item) {
  return item + 10;
});

var filter2 = map2.filter(function(item) {
  return item > 13;
});

console.log("filter2: ", filter2);

var map3 = arr
  .map(function(item) {
    return item + 10;
  })
  .filter(function(item) {
    return item > 13;
  });
console.log("map3: ", map3);
/*
    Envolva todo o código desse desafio em uma IIFE.
*/
(function() {
  /*
    Crie um array e mostre no console a representação em String desse array,
    usando o método visto na aula 13.
  */
  var arrExam = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("O array em formato de string é:", arrExam.toString());

  /*
    Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
    Cada array deve conter os estados dessa região.
  */
  var arrSul = ["Paraná", "Santa Catarina", "Rio Grande do Sul"];
  var arrSudeste = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo"
  ];
  /*
    Crie uma variável chamada `brasil`, que irá receber as duas regiões
    concatenadas. Mostre o `brasil` no console.
  */
  var brasil = arrSul.concat(arrSudeste);
  console.log("\nAlguns Estados do Brasil:", brasil);

  /*
    Adicione 3 novos estados da região Norte no início do array e mostre no console.
    */
  brasil.unshift("Amazonas", "Acre", "Rondonia");
  console.log("\nMais estados adicionados:", brasil);
  // ?

  /*
    Remova o primeiro estado do array `brasil` e mostre-o no console.
    */
  console.log("\nEstado removido:");
  // ?

  /*
    Crie um novo array chamado `newSul`, que receba somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
    */
  // ?

  /*
    Mostre no console os estados que estão em `newSul`.
    */
  console.log("\nEstados do Sul do Brasil:");
  // ?

  /*
    Mostre no console todos os estados que estão em `brasil`.
    */
  console.log("\nAlguns Estados do Brasil:");
  // ?

  /*
    Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
    */
  // ?

  /*
    Mostre no console os estados do nordeste.
    */
  console.log("\nEstados do Nordeste:");
  // ?

  /*
    Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
    chamada `newSudeste`.
    */
  // ?

  /*
    Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado.
    */
  // ?

  /*
    Mostre no console os estados em `newSudeste`.
    */
  console.log("\nEstados em newSudeste:");
  // ?

  /*
    Mostre no console os estados do `brasil`.
    */
  console.log("\nAlguns estados do Brasil:");
  // ?

  /*
    usando forEach, percorra o array `brasil` e gere um novo array chamado
    `newBrasil`. Esse array deve ter cada item como um objeto, com as
    propriedades:
    - `id`: que será o índice do array `brasil`,
    - `estado`: que será o estado do array `brasil`.
    */
  // ?

  /*
    Mostre o array `newBrasil` no console
    */
  console.log("\nnewBrasil:");
  // ?

  /*
    Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
    atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
    - "Sim, todos os estados tem mais de 7 letras!"
    Senão, mostre no console:
    - "Nem todos os estados tem mais de 7 letras!"
    */
  console.log("\nTodos os estados de `brasil` tem mais de 7 letras?");
  // ?

  /*
    Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma variável. Se esse estado existir no array, mostrar a frase no
    console:
    - "Ceará está incluído!"
    Senão, mostrar a frase:
    - "Ceará não foi incluído :("
    */
  console.log("\nCeará está incluído em `brasil`?");
  // ?

  /*
    Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "[ESTADO] pertence ao Brasil."
    Atribua o novo array a uma variável chamada `map`.
    */
  // ?

  /*
    Mostre no console o array criado acima:
    */
  console.log("\nnewBrasil agora com mais informações:");
  // ?

  /*
    Filtre o array criado acima, retornando somente os estados que tiverem
    ID par. Atribua o valor à uma variável chamada `filter`.
    */
  // ?

  /*
    Mostre o array filtrado acima no console.
    */
  console.log("\nEstados com ID par:");
  // ?
})();
