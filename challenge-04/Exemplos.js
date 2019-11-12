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
    marca: "",
    modelo: "",
    placa: "",
    ano: 0,
    cor: "",
    quantasPortas: 0,
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
