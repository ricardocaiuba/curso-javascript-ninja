console.log("----------------[  Operador vírgula  ]-------------------") ;
console.log("sintaxe => var a = 1, b = 2, c = 3 ;") ;
function myFunction() {
    var a = 1, b = 2, c = 3 ;
    return ([a, b, c]) ;
}

console.log(myFunction()) ;

function MyFunc() {
    var x = 0 ;
    return (x+=1, x) ;
}

console.log(MyFunc()) ;

console.log("----------------[  switch  ]-------------------") ;
function MyFunction(arg) {
    switch(arg) {
        case 1:
            console.log("x = 1") ;
            break ;
        case 2:
            console.log("x = 2") ;
            break ;
        default:
            console.log("x não é 1 nem 2") ;
    }
}

console.log(MyFunction(1)) ;
console.log(MyFunction(2)) ;
console.log(MyFunction(3)) ;

console.log("-------------------[  while  ]-------------------") ;

var counter = 0 ;
while (counter < 10) {
    console.log(`counter => ${counter}`) ;
    counter ++ ;
}

console.log("-") ;

var counter = 10 ;
while (counter > 0) {
    console.log(`counter => ${counter}`) ;
    counter -- ;
}

console.log("-") ;

var counter = 10 ;
while (counter--) {
    console.log(`counter => ${counter}`) ;
}

/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
console.log("-------------------[  Campeonato Paulista  ]-------------------") ;
var championShip = "Campeonato Paulista" ;
console.log(championShip)

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
console.log("-") ;
var teams = [
    "Sport Club Corinthians Paulista",
    "Santos Futebol Clube",
    "São Paulo Futebol Clube",
    "Associação Portuguesa de Desportos",
    "Sociedade Esportiva Palmeiras"
] ;

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(posicao) {
    var result ;
    if (posicao > 5) {
        result = `Não temos a informação do time que está nessa posição. Posição: ${posicao}`  ;
    } else {
        result = `O time que está em ${posicao}º lugar é o ${teams[posicao - 1]}.` ;
    }
    
    return result ;
}

console.log(showTeamPosition(1)) ;
console.log(showTeamPosition(5)) ;
console.log(showTeamPosition(10)) ;
console.log("-") ;
/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(5)) ;
console.log(showTeamPosition(4)) ;
console.log(showTeamPosition(10)) ;
console.log(showTeamPosition(3)) ;
console.log(showTeamPosition(1)) ;
console.log(showTeamPosition(2)) ;
console.log("-") ;
/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var counter = 20 ;
while (counter <= 30) {
    console.log(`Número => ${counter}`) ;
    counter++ ;
}
console.log("-") ;
/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
// ?

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
// ?