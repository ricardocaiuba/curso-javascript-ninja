console.log("----------------[  Objetos mutáveis  ]-------------------");
var obj = {
    prop1: "prop1",
    prop2: "prop2"
}
console.log("obj", obj);

var obj2 = {
    prop1: "prop1",
    prop2: "prop2"
}
console.log("obj2", obj2);

obj.prop1 = "Propriedade 1"
console.log("change prop value", obj);

delete obj.prop1;
console.log("delete prop1", obj);

obj.prop1 = "Add prop1 again";
console.log("Add prop1", obj);

console.log("----------------[  Objetos Manipulados por referência  ]-------------------");
var obj1 = {
    prop1: "prop1",
    prop2: "prop2"
}
console.log("obj", obj1);

var obj2 = {
    prop1: "prop1",
    prop2: "prop2"
}
console.log("obj2", obj2);

console.log("obj1 === obj2:", obj1 === obj2);

var objCopy = obj1;
console.log("var objCopy = obj1", objCopy);
console.log("objCopy === obj1:", obj1 === objCopy);
console.log(objCopy.prop1);
objCopy.prop1 = "propriedade do objeto copy";
console.log("propriedade do objeto copy", objCopy);
console.log("obj1", obj1);

console.log("----------------[  Criando objetos  ]-------------------");
// Literal -> mais rápido
var obj = { name: "Ricardo", lastName: "Rodrigues", fullName: "Ricardo Rodrigues" };
console.log(obj);

// com o new object -? via construtor
//var newObj = new Object();
//console.log(newObj);

// Cada vez que se cria um objeto, ele herda do seu próprio protótipo
// com o Object.create() 
var otherObj1 = { x: 1, y: 2 };
var otherObj2 = Object.create(otherObj1);
console.log(otherObj2);
console.log(otherObj1 === otherObj2);
console.log("otherObj2.prototype", otherObj2.prototype);;
console.log("otherObj2.x", otherObj2.x);;
console.log("otherObj1.x", otherObj1.x);;
console.log(otherObj1 === otherObj2);
otherObj2.x = 2;
console.log("otherObj2.x = 2", otherObj2.x);
console.log("otherObj2.x", otherObj2.x);;
console.log("otherObj1.x", otherObj1.x);;
console.log(otherObj1 === otherObj2);




(function () {
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */
    console.log("----------------[  Exercício 1  ]-------------------");

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    console.log("----------------[  Exercício 2  ]-------------------");
    console.log('Propriedades de "person":');

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    // ?

    /*
    Crie um array vazio chamado `books`.
    */
    // ?

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    // ?
    console.log('\nLista de livros:');

    /*
    Mostre no console todos os livros.
    */
    // ?

    console.log('\nLivro que está sendo removido:');
    /*
    Remova o último livro, e mostre-o no console.
    */
    // ?

    console.log('\nAgora sobraram somente os livros:');
    /*
    Mostre no console os livros restantes.
    */
    // ?

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    // ?
    console.log('\nLivros em formato string:');

    /*
    Mostre os livros nesse formato no console:
    */
    // ?

    /*
    Converta os livros novamente para objeto.
    */
    // ?
    console.log('\nAgora os livros são objetos novamente:');

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    // ?

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    // ?
    console.log('\nMeu nome é:');

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    // ?

    console.log('\nMeu nome invertido é:');

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    // ?

    console.log('\nAgora em ordem alfabética:');
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    // ?
})();