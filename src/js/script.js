alert("Seja Bem-vindo à Vinheria Agnello");

var email = "";
var senha = "";
var nome = "";

while (email === "" || senha === "" || nome === "") {
    email = prompt("Digite seu email para login");
    if (email === "") {
        alert("Campo de email não pode ser vazio!");
        continue;
    }

    senha = prompt("Digite sua senha para login");
    if (senha === "") {
        alert("Campo de senha não pode ser vazio!");
    }

    nome = prompt("Digite seu nome completo");
    if (nome === "") {
        alert("Campo de nome não pode ser vazio!");
    }
}

alert("Cadastro realizado! Veja os detalhes no console.");

console.log("Olá " + nome);
console.log("Cadastro realizado com sucesso!");
console.log("Seja Bem-vindo à Vinheria Agnello!");

var nomeVinho = prompt("Digite o nome do vinho:");
alert("Esse vinho irá aparecer no console");    
console.log("Nome do vinho: " + nomeVinho);


var tipoVinho = prompt("Digite o tipo do vinho (Tinto, Rosé ou Branco):");
alert("Esse vinho irá aparecer no console");
console.log("Tipo do vinho: " + tipoVinho);


var safraVinho = prompt("Digite a safra do vinho:");
alert("Essa safra irá aparecer no console");
console.log("Safra do vinho: " + safraVinho);


var qntEstoque = prompt("Digite a quantidade em estoque:");        
alert("Essa quantidade irá aparecer no console");
console.log("Quantidade em estoque: " + qntEstoque);


// Espera o DOM carregar antes de manipular os elementos
window.onload = function () {
    document.getElementById("person-display").textContent = nome
    document.getElementById("email-display").textContent = email;
    document.getElementById("name-display").textContent = nomeVinho;
    document.getElementById("type-display").textContent = tipoVinho;
    document.getElementById("safra-display").textContent = safraVinho;
    document.getElementById("qnt-display").textContent = qntEstoque;
    document.getElementById("status-display").textContent = "Disponível"; 
    document.getElementById("class-display").textContent = "Premium"; 
};
