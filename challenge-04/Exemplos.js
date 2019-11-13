var isTruthy = function(arg) {
    return !!arg ;
} ;

console.log(isTruthy()) ;
console.log(isTruthy(undefined)) ;
console.log(isTruthy(null)) ;
console.log(isTruthy(false)) ;
console.log(isTruthy(0)) ;
console.log(isTruthy("")) ;
console.log(isTruthy(-0)) ;
console.log(isTruthy(NaN)) ;

console.log('-------------------') ;

console.log(isTruthy(10)) ;
console.log(isTruthy([])) ;
console.log(isTruthy({})) ;
console.log(isTruthy(function myFunction() {})) ;
console.log(isTruthy("0")) ;
console.log(isTruthy("Ricardo")) ;
console.log(isTruthy(true)) ;
console.log(isTruthy("Curso Javascript Ninja")) ;
console.log(isTruthy(1 === 1)) ;
console.log(isTruthy({nome: "Ricardo"})) ;

console.log('-------------------') ;

var carro = {
    marca: "Ford",
    modelo: "Fusion",
    placa: "ASE-3456",
    ano: 2010,
    cor: "Prata",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
} ;
console.log(carro) ;

console.log('-------------------') ;

carro.mudarCor = function(arg) {
    carro.cor = arg ;
}

console.log(carro) ;

console.log('-------------------') ;

carro.mudarCor("Preto") ;

console.log('-------------------') ;

carro.obterCor = function() {
    return carro.cor ;
}

console.log(carro.obterCor()) ;

console.log('-------------------') ;

carro.obterModelo = function() {
    return carro.modelo ;
}

console.log("Modelo: ", carro.obterModelo()) ;

console.log('-------------------') ;

carro.obterMarca = function() {
    return carro.marca ;
}

console.log("Marca: ", carro.obterMarca()) ;

console.log('-------------------') ;

carro.obterMarcaModelo = function() {
    return `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}.` ;
}

console.log(carro.obterMarcaModelo()) ;

console.log('-------------------') ;

carro.addPessoas = function(arg) {
    var result ;
    var qdePessoas = carro.quantidadePessoas + arg ;

    if (carro.quantidadePessoas === carro.assentos && qdePessoas >= carro.assentos) {
        result = "O carro já está lotado!" ;

    } else if (qdePessoas > carro.assentos) {
        var qdeLugaresFaltantes = carro.assentos - carro.quantidadePessoas ;
        result = `Só ${qdeLugaresFaltantes == 1 ? "cabe" : "cabem"} mais ${qdeLugaresFaltantes} ${qdeLugaresFaltantes === 1 ? "pessoa" : "pessoas"}!` ;

    } else {
        carro.quantidadePessoas = qdePessoas ;
        result = `Já temos ${carro.quantidadePessoas} no carro!` ;    
    }
    return result ;
}

console.log('-------------------') ;

console.log(carro.addPessoas(1)) ;
console.log(carro.addPessoas(1)) ;
console.log(carro.addPessoas(6)) ;

console.log('-------------------') ;

carro.obterCor()

console.log('-------------------') ;

carro.mudarCor("vermelho") ;

console.log('-------------------') ;

carro.obterCor() // retorn é "Vermelho"

console.log('-------------------') ;

carro.mudarCor("verde musgo") ; // carro.cor: verde musgo 

console.log('-------------------') ;

console.log(carro.obterMarcaModelo()) ;

console.log('-------------------') ;

carro.quantidadePessoas = 0 ;
console.log(carro.addPessoas(2)) ;

console.log('-------------------') ;

console.log(carro.addPessoas(4)) ;

console.log('-------------------') ;

console.log(carro.addPessoas(3)) ;

console.log('-------------------') ;

console.log(carro.addPessoas(-10)) ;
console.log(carro.addPessoas(5)) ;
console.log('-------------------') ;

console.log('-------------------') ;
console.log('-------------------') ;
console.log(carro) ;