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
// O objeto pai não muda o valor, mas se mudar o valor do pai, muda do filho.
var objEmpty = Object.create({}) ;
console.log(objEmpty) ;
console.log(objEmpty.toString()) ;
console.log("-")
var obj5 = {}
console.log("LIteral: ", obj5.toString()) ;
obj5.x = 1;
obj5.y = 2 ;
console.log("Atribuindo Parametros: ", obj5) ;
var obj6 = {}
console.log("obj6:", obj6) ;
obj6 = Object.create(obj5) ;
console.log("obj6:", obj6.x) ;
console.log("-")
var obj7 = Object.create(obj6) ;
console.log("obj7.x:", obj7.x) ;
console.log("-")
console.log("obj5.x:", obj5.x) ;
console.log("obj6.x:", obj6.x) ;
console.log("obj7.x:", obj7.x) ;
console.log("-")
obj6.x = 10 ;
console.log("obj5.x:", obj5.x) ;
console.log("obj6.x:", obj6.x) ;
console.log("obj7.x:", obj7.x) ;
console.log("-")
console.log(obj5) ;
console.log(obj6) ;
console.log(obj7) ;
// Acessando propriedades
console.log("-") ;
for (var prop in obj5) {
    console.log(prop) ;
}
console.log("-") ;
for (var prop in obj6) {
    console.log(prop) ;
}
console.log("-") ;
for (var prop in obj7) {
    console.log(prop) ;
}

console.log("-") ;

for (var prop in obj5) {
    console.log(obj5.hasOwnProperty(prop) ? prop : "not found") ;
}
console.log("-") ;
for (var prop in obj6) {
    console.log(obj6.hasOwnProperty(prop) ? prop : "not found") ;
}
console.log("-") ;
for (var prop in obj7) {
    console.log(obj7.hasOwnProperty(prop) ? prop : "not found") ;
}

console.log("----------------[  Mais formas de criar objetos  ]-------------------");
console.log("Object.keys") ;
console.log(Object.keys(obj5)) ;  
console.log(Object.keys(obj6)) ;  
console.log(Object.keys(obj7)) ;  
console.log("-") ;
console.log("Object.keys(obj5).length:", Object.keys(obj5).length) ;
console.log("Object.keys(obj6).length:", Object.keys(obj6).length) ;
console.log("Object.keys(obj7).length:", Object.keys(obj7).length) ;

console.log("--- [  Object.isPrototypeOf  ] ---") ;
console.log("obj5.isPrototypeOf(obj6)", obj5.isPrototypeOf(obj6)) ;
console.log("obj5.isPrototypeOf(obj7)", obj5.isPrototypeOf(obj7)) ;
console.log("obj6.isPrototypeOf(obj7)", obj6.isPrototypeOf(obj7)) ;
console.log("-") ;
console.log("obj7.isPrototypeOf(obj5)", obj7.isPrototypeOf(obj5)) ;
console.log("obj6.isPrototypeOf(obj5)", obj6.isPrototypeOf(obj5)) ;
console.log("obj7.isPrototypeOf(obj6)", obj7.isPrototypeOf(obj6)) ;
var obj8 = Object.create(obj7) ;
console.log("obj7.isPrototypeOf(obj8)", obj7.isPrototypeOf(obj8)) ;

console.log("--- [  JSON.stringify(obj)  ] ---") ;
console.log("", JSON.stringify(obj)) ;
console.log("", JSON.stringify(obj8)) ;
console.log("", JSON.stringify(obj5)) ;
var str = JSON.stringify(obj) ;
console.log("-") ;
console.log(str) ;
console.log(JSON.parse(str)) ;

console.log("--- [  Arrays  ] ---") ;
// Adicionar itens no array
var arr = [] ;
console.log("arr: ", arr) ;
arr[0] = 10 ;
console.log("arr: ", arr) ;
arr[1] = 5 ;
console.log("arr: ", arr) ;
arr[2] = 8 ;
console.log("arr: ", arr) ;
arr[3] = "nome"
console.log("arr: ", arr) ;
arr[12] = "doze" ;
console.log("arr: ", arr) ;
console.log("arr[4]: ", arr[4]) ;
arr.push([1, 2, 3]) ;
console.log("arr: ", arr) ;

console.log("-") ;
// remover ultimos itens do array
console.log("arr: ", arr) ;
arr.pop() ;
console.log("After remove arr: ", arr) ;

console.log("-") ;
var newArr = [] ;
newArr.push("arroz") ;
newArr.push("feijão") ;
newArr.push("macarrão") ;
console.log("newArr: ", newArr) ;
var last = newArr.pop() ;
console.log("newArr: ", newArr) ;
console.log("last: ", last) ;
console.log(newArr.push("lazanha")) ;
console.log("newArr: ", newArr) ;

console.log("--- [  ARRAYS -> Método Join  ] ---") ;
console.log(newArr) ;
console.log("newArr.join('|'):", newArr.join(", ")) ;
console.log(`Meu almoço hoje será ${newArr.join(", ")}`) ;

console.log("--- [  ARRAYS -> Método reverse  ] ---") ;

console.log(newArr) ;
newArr.reverse() ;
console.log(newArr) ;

console.log("--- [  ARRAYS -> Método sort  ] ---") ;
console.log(newArr) ;
newArr.sort() ;
console.log(newArr) ;
newArr.push("ervilhas") ;
console.log(newArr) ;
newArr.sort() ;
console.log(newArr) ;
console.log("--------------------------------------------------");

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