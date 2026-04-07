// Declarações e Variaveis
//var,let e const
// var xpto=10;
// console.log(xpto);
// var xpto=20;
// console.log(xpto);
//var - pode redeclarar e acessar fora do escopo
//let não pode redeclara e não consegue acessar fora do escopo
// if(true){
//     var nome="Fiap";
// }
//   console.log(nome);

//const
// const taxaJuros =0.85;
// taxaJuros =0.50;
// console.log(taxaJuros);

// var exemplo1="Ola dev var";
// console.log(exemplo1);

// let exemplo2="Ola dev let";
// console.log(exemplo2);

// const exemplo3="ola dev const";
// console.log(typeof exemplo3);

// let exemplo4=20;
// console.log(typeof exemplo4);
// let exemplo5=true;
// console.log(typeof exemplo5);

// let exemplo6={nome:"fiap"};
// console.log(exemplo6);

// let exemplo7=["Java","Python","C#"];
// console.log(typeof exemplo7);
// //variavel indefinida
// let exemplo8;
// console.log(exemplo8);
// //variavel vazia
// let exemplo9=null;
// console.log(exemplo9)

// OPERADORES ARITMÉTICOS

// const valor1 = 20;
// const valor2 = 10;

// console.log(valor1 + valor2);
// console.log(valor1 - valor2);
// console.log(valor1 / valor2);
// console.log(valor1 * valor2);

// // OPERADORES LÓGICOS

// console.log(valor1 < valor2);
// console.log(valor1 > 10 && valor2 != 20);
// console.log(valor2 < 5 || valor1 < 50);


// //OPERADORES DE COMPARACAO
// console.log(valor1 < valor2);
// console.log(valor1 >= valor2);
// console.log(valor1 <= valor2);
// console.log(valor1 != valor2);
// console.log(valor1 == valor2);
// console.log(valor1 === valor2);
// console.log("O valor é:", valor2);


// console.log("AAAAAAAAAAAAAAA");


// exercicio 1

// const p = 100;
// const v = 20;

// const precoFinal = p - v;

// console.log("O preço final com desconto é:", precoFinal)

// const token = 7777;
// const logado = 1;
// const transacaoAutorizado = logado === 1 && token >=10;


// console.log("O usuário pode fazer transação: ", transacaoAutorizado)

// ESTRUTURA CONDICINAL

// if(true){
//     console.log("É verdadeiro")
// }

//if//eslse

//let nome = "Fiapinho"

// if(nome=="Fiap"){
//     console.log("Nome Verdadeiro")
// }else{
//     console.log("Nome errado")
// }

//if else en

// let idade = 45;

// if(idade <=13){
//     console.log("É uma criança");
// }else if(idade > 13 && idade <=18){
//     console.log("É um adolecente");
// }else if(idade > 18 && idade <= 59){
//     console.log("É um adulto");
// }else{
//     console.log("É um idoso");
// }

//Swith case

// const time = "corithians";

// switch(time){
//     case "santos":
//         console.log("Time de velho");
//         break
//     case "corithians":
//         console.log("TIME PERFEITO")
//         break
//     case "sao paulo":
//         console.log("bambi")
//         break
//     case "palmeiras":
//         console.log("sem mundial")
//         break
//     default:
//         console.log("Tao ruim quanto a seleção brasileira")
// //         break    
// // }


// //ternaria 
// // let salario=100;
// // let resultado = salario ==100 ? "Salario Certo" : "Salario errado";
// // console.log(resultado);

// // let usuario= "fiap";
// // let usuarioLogado = usuario == "fiap" ? "Logado com sucesso" : "Usuário inválido"
// // console.log(usuarioLogado)


// // function verificarParImpar(numero){
// //     return numero % 2 === 0 ? "PAR":"IMPAR";
// // }

// // console.log(verificarParImpar(10))

// // ESTRUTURA DE REPETIÇÃO(LAÇO DE REPETIÇÃO)

// //for - Estrutura de repetição mais utilizada quando sabemos previamente quantas vezes o codigo vai ser executado

// //declarção, operacao, incremento 
// for(let i = 1; i <= 5; i++){
//     console.log("Numero: ", i)
// }

// // for par array

// const linguagens = ["Java", "Python", "C#", "PHP"];

// for(let i = 0; i < linguagens.length; i++){
//     console.log("Linguagem:", i , ":", linguagens[i])

// } 

// const tecnologias = ["JS", "HTML", "CSS"]

// for(const tech of tecnologias){
//     console.log("Estudando", tech)
// }

// const carros = {marca:"Volks", modelo:"Fusca", ano:1980};

// for(let dados in carros){
//     console.log(dados, ":", carros[dados])
// }


// //while - Diferente do for usamos o whle quando não sabemos a quantidade de vezes que o código vai executar


// let i = 1;

// while(i<=5){
//     console.log("Contagem:",i);
//     i++;
// }

//declaração de variavel indefinida

// let numero;

// while(numero !== "0"){
//     numero = prompt("Digite um número(ou 0 para sair): ")
//     console.log("eu sei o que voce digitou:", numero)
// }

// console.log("Fim do Programa")


//do while ("Eecuta ao menos uma vez")

// let contador = 10;
// do{
//     console.log("vai executar pelo menos uma vez")
//     contador++;
// }while(contador<=5);



//declaração da variavel undefined
let palpite;

//gerar um numero aleatorio entre 1 e 10

const sorteio = Math.floor(Math.random() * 10);

do{
    palpite = parseInt(prompt("Digite um número entre 1 e 10: "));

    if(isNaN(palpite)){
        alert("saindo do jogo")
        break;
    }

    if(palpite != sorteio){
        alert("Você Perdeu R$100,0")
    }    
}while(palpite != sorteio)
    if(palpite == sorteio){
        alert("Parabens, você acertou e ganhou R$100,00")
    }

