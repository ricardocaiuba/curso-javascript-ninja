/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArr = [
    1, 
    2, 
    "Ricardo Rodrigues",
    true,
    43,
    1.85,
    "dos Santos",
    "Treinamento Javascript",
    null,
    undefined
] ;

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArray(arg) {
    return arg ;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myArray( myArr )[1] ) ; // 2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornarValor(argArr, index) {
    return argArr[index] ;
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var mySecondArr = [
    "Ricardo Rodrigues dos Santos",
    43,
    "Pogramador",
    true,
    ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
    {
        funcao: "Programador"
    }
] ;

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myArray(mySecondArr)) ;

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( bookName ) {
    var listBooks = {
        "Livro1": {
            quantidadePaginas: 488,
            autor: "John",
            editora: "Novatec"
        },
        "Livro2": {
            quantidadePaginas: 220,
            autor: "Outro autor",
            editora: "Novatec"
        },
        "Livro3": {
            quantidadePaginas: 263,
            autor: "Erick",
            editora: "Bookman"
        }
    } ;
    return !bookName ? listBooks : listBooks[bookName] ;
}

console.log("Resultado: ", book("Livro1")) ;

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log("Todos os Livros: ", book()) ;

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro Livro1 tem ${book("Livro1").quantidadePaginas} páginas!`) ;


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var bookName = "Livro1" ;
console.log(`O autor do livro ${bookName} é ${book(bookName).autor}.`) ;

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
bookName = "Livro2" ;
console.log(`O livro ${bookName} foi publicado pela editora ${book(bookName).editora}.`) ;
