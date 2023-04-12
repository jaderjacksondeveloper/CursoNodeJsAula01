

//ESSE COMANDO É O TEU CONHECIDO ESCREVAL UTILIZADO NO PORTUGOL
console.log("SEJA BEM VINDO AO CURSO DEV");

// O COMANDO ABAIXO CRIA UMA VARIÁVEL E JÁ ATRIBUI UM VALOR A ELA, NO CASO O VALOR É A FRASE (" SE FOSSE FÁCIL TODO MUNDO ERA RICO")

var frase = "SEJA BEM VINDO AO FINANCIAMENTO DE VEICULOS";

// A LINHA ABAIXO IMPRIME UMA FRASE E CONCATENAR (JUNTA) COM O VALOR DA VARIÁVEL
console.log("SHOPING DO AUTOMOVÉL: " + frase );


// ABAIXO ESTÃO SENDO CRIADAS DUAS VARIÁVEIS, CARRO E VALOR

var VALORCARRO = 54500;
console.log("VALOR DO VEICULO: " + VALORCARRO) ;
var VALORREPASSADOCLIENTE = 55000;
console.log("VALOR REPASSADO PELO CLIENTE: " + VALORREPASSADOCLIENTE) ;

//Essa linha só pode ser criada após a criação do arquivo troco.js que está la dentro da pasta modules
//tudo foi atribuido para a variavél trocodocliente, assim fazendo a chamada a variável ja se consegue ter o acesso ao caminho

var trocodoclient = require("./modules/troco");

// FIM DA LINHA DE LIGAÇÃO COM O TROCO


var valorfinal = trocodoclient(VALORCARRO,VALORREPASSADOCLIENTE);

//impressão
console.log("A DEVOLVER: " + valorfinal) ;
