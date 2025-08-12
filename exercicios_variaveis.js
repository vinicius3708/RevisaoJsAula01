/*
===========================================================
Exercícios Práticos - Variáveis (var, let, const)
===========================================================
*/

// 1. Declare uma variável com `var` e atribua uma string com seu nome. Exiba no console.
var nome = "Vinicius";
console.log("Tipo de variavel",typeof nome); //"string"
console.log("Meu nome e:", nome)
// 2. Declare uma variável com `let` contendo um número e depois altere esse número para outro valor.
let numero = 10; // Declarando a variavel com valor inicial
console.log(numero); // Vai mostrando 10

numero = 25; // Alterando o valor
console.log(numero); // Vai mostrar 25
// 3. Declare uma constante `const` com um array vazio. Adicione três elementos a esse array e exiba.
const lista = []; // Criando a constante com array vazio

lista.push("Maça");
lista.push("Banana");
lista.push("Laranja");

console.log(lista); // Vai mostrar: [ 'Maça', 'Banana', 'Laranja' ]
// 4. Escreva um bloco `if` que declare uma variável `var` dentro dele. Exiba essa variável fora do bloco.
if (true) {
    var mensagem = "Olá, mundo!";
}

console.log(mensagem); // Vai mostrar: Olá, mundo!
// 5. Escreva um bloco `if` que declare uma variável `let` dentro dele. Tente exibir essa variável fora do bloco (comente a linha que causa erro).
if (true) {
    let saudacao = "Olá, JavaScript!";
    console.log(saudacao); // Funciona: "Olá, JavaScript!"
}

// console.log(saudacao); // Erro: saudacao is  not defined
// 6. Tente redeclarar uma variável usando `var` no mesmo escopo. Faça o mesmo com `let` e observe o erro.
// Usando var
var nome = "Vinicius";
var nome = "Lucena"; // Permitido 
console.log(nome); // Mostra: Lucena

// Usando let
let idade = 21;
// let idade  = 25; // Erro: Identifier 'idade' has already been declared
console.log(idade);
// 7. Declare uma variável com `const` que contém um objeto com duas propriedades. Altere uma dessas propriedades e exiba o objeto.
const pessoa = {
    nome: "Vinicius",
    idade: 21
};

pessoa.idade = 21; // Alterando a propriedade 

console.log(pessoa); // Saída: { nome: 'Vinicius', idade: 21 }
// 8. Declare uma variável com `let` sem inicializá-la. Depois atribua um valor e exiba.
let cor; // Declarada sem valor
cor = "Verde"; // Atribuindo valor depois 
console.log(cor); // Saída: Verde
// 9. Demonstre hoisting declarando uma variável com `var` depois de usá-la (exiba antes da declaração).
console.log(numero); // Saida: undefined (não dá erro, mas ainda não tem valor)

var numero = 10;

console.log(numero); // Saída: 10
// 10. Crie uma função que declare uma variável `var` dentro dela e tente acessar essa variável fora da função (explique o resultado).
function minhaFuncao() {
    var mensagem = "Olá, escopo de função!";
    console.log(mensagem); // Funciona aqui
}

minhaFuncao ();

console.log(mensagem); // Erro: mensagem is not defined