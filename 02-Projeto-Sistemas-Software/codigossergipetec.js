const prompt = require('prompt-sync')();

// var number1  =  prompt('Digite um numero: ');
// var number2 = prompt('Digite um numero: ');
// let soma = Number(number1) + Number(number2)
// console.log("A soma é: " +soma)

// console.log("---------------------")
// let number4 = prompt('Digite um numero');
// let number5 = prompt('Digite um numero');
// let soma2 = number4*number5
// console.log("a multiplicação é: "+soma2)
// console.log("---------------------")
// let number6 = prompt('Digite um numero');
// let number7 = prompt('Digite um numero');
// let soma3 = number6/number7
// console.log("a divisão é: "+soma3)
// console.log("----------------------")
// let number9 = prompt('Digite um numero')
// let number10 = prompt('Digite um numero')
// let soma4 = number9-number10
// console.log("a subtração é: "+soma4)
// let Nome = prompt ("Digite seu nome:")
// let salario  =  Number(prompt("Digite aqui seu salario"))
// let mesestrabalhados = Number(prompt("Digite seus meses trabalhados"))
// let decimo13 = salario/12*mesestrabalhados
// alert( Nome+" seu decimo terceiro é: R$"+decimo13 +", Parabéns" )
// salario = 500
// quinze = 15/100*salario+salario
// dez = 10/100*salario+salario
// cinco = 5/100*salario+salario

// if (salario<=500) {
//     alert("parabens seu reajuste é de 15% sendo ele: " + quinze)
// }
// else if (salario>500 &&salario <=1000) {
//     alert("parabens seu reajuste é de 10% sendo ele: "+ dez)
// }
// else if (salario>1000) {
//     alert("parabens seu reajuste é de 5% sendo ele: "+ cinco)
// }
// let idade = prompt("digite aqui sua idade")
// if (idade<12){
//     alert("Assista conteúdo infantil") 
// }
// else if (idade>=12 && idade<=17){
//     alert("Assista conteúdo Teen")
// }
// else if (idade>=18 && idade<=60){
//     alert("Assista conteúdo Adulto")
// }
// else {
//     alert("Assista conteúdo Sênior")
// }
// let pontos = prompt("Digite seus pontos")
// if (pontos<=1000){
//  alert("Seu Nível é Novato!! Bônus de +100XP")
// }
// else if(pontos>=1001 && pontos<=5000){
//     alert("Seu Nível é Aprendiz!! Bônus de +500XP")
// }
// else if(pontos>=5001 && pontos<=10000){
//     alert("Seu Nível é Expert!! Bônus de +1000XP")
// }
// else {
//     alert("Seu Nível é Mestre!! Bônus de +2000XP")
// }

// let valorbasico = 25;
// let valorpremium = 40;
// let valorultra = 60;
// let telas34 = 5;
// let telasmaisde4 = 7.50; 

// let tipoassinatura = prompt("Digite a sua assinatura: ")
// let quantitelas = prompt ("digite a quantidade de telas que deseja: ")
// if (tipoassinatura == "basico") {
//     if(quantitelas >=1 && quantitelas <=2){
//         alert("Seu plano terá o valor de R$"+valorbasico)
//     }
//     else if(quantitelas >=3 && quantitelas <=4){
//         alert("Seu plano terá o valor de "+(valorbasico+telas34)+" R$")
//     }
//     else if (valorbasico >4) {
//         alert("seu plano tera o valor de"+ (valorbasico+telasmaisde4))
//     }
// }

// else if (tipoassinatura == "premium") {
//     if(quantitelas >=1 && quantitelas <=2){
//         alert("Seu plano terá o valor de R$"+valorpremium)
//     }
//     else if(quantitelas >=3 && quantitelas <=4){
//         alert("Seu plano terá o valor de "+(valorpremium+telas34)+" R$")
//     }
//     else if (valorpremium >4) {
//         alert("seu plano tera o valor de"+ (valorpremium+telasmaisde4))
//     }
// }
// else if (tipoassinatura == "ultra") {
//     if(quantitelas >=1 && quantitelas <=2){
//         alert("Seu plano terá o valor de R$"+valorultra)
//     }
//     else if(quantitelas >=3 && quantitelas <=4){
//         alert("Seu plano terá o valor de "+(valorultra+telas34)+" R$")
//     }
//     else if (valorultra >4) {
//         alert("seu plano tera o valor de"+ (valorultra+telasmaisde4))
//     }
// }

// let daysOfWeek = ["Caio", "Samuel"];
// console.log(daysOfWeek[1])
// console.log(daysOfWeek.length)
// let listdiver = ["Caio",1,2.5,"Escola",false]
// console.log(listdiver[3])
// let nomedoaluno = prompt("Digite o nome do novo aluno: ")
// daysOfWeek.push(nomedoaluno)
// console.log("os alunos da escola são: "+daysOfWeek)

// let daysOfWeek = ["Caio", "Samuel"];
// console.log(daysOfWeek[1])
// console.log(daysOfWeek.length)
// let listdiver = ["Caio",1,2.5,"Escola",false]
// console.log(listdiver[3])
// let nomedoaluno = prompt("Digite o nome do novo aluno: ")
// daysOfWeek.push("Davy" , "Wesley" , "Guilherme")
// daysOfWeek.unshift(nomedoaluno)
// daysOfWeek.pop ()
// console.log("os alunos da escola são: "+daysOfWeek)

// let daysOfWeek = ["caio", "Samuel", 0,70];
// let nomedoaluno =prompt ("Digite o nome do novo aluno:")
// daysOfWeek.unshift("Caique", "lyan", "Clara", 80 )
// daysOfWeek.push(nomedoaluno)
// daysOfWeek.unshift("Richard")
// daysOfWeek.shift()
// daysOfWeek.sort()
// daysOfWeek.reverse()
// console.log("os alunos da escola são: " +daysOfWeek)
// console.log(daysOfWeek.indexOf("Samuel"))
// const alunos = ["Ana", "Bruno", "Carlos", "Diana"];
// for (const aluno of alunos){
//     console.log("Olá, "+aluno+"!");
// }
// let number = Number(prompt("Digite o número que deseja somar aos anteriores: "))
// let numerofinal =0
// while (number != 0){
//     numerofinal = numerofinal+number
// number = Number(prompt("Digite o número que deseja somar aos anteriores: "))

// }
// console.log("o número final é: " +numerofinal)
// for (let i=1; i<11; i+=2){
//     console.log(i)
// }
// function saudar(){
// alert("Seja Bem-vindo ao Sistema!")
// }
// saudar()
// funciton dobrarNumero(numero) {
// return numero * 2;
// }

// let resultado = 
// dobrarNumero(5); console.log(resultado);


// console.log(dobrarNumero(7))
// function cumprimentar (nome){
//     alert("Oi "+nome+" Tenha um exelente dia!")
// }
// let nomedousuario = prompt("Digite o seu nome:")
// cumprimentar(nomedousuario)
// function contagemRegressiva(numero){
//     alert(numero)
//     if (numero ===0){
//     alert("Chegou")
//     }
//     contagemRegressiva(numero-1)
// }
// contagemRegressiva(5)*/  