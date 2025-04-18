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

// Classificação da safra
var classificacaoSafra = "";
if (safraVinho >= 2020) {
    classificacaoSafra = "Vinho jovem";
} else if (safraVinho >= 2015) {
    classificacaoSafra = "Vinho amadurecido";
} else {
    classificacaoSafra = "Vinho antigo";
}
console.log("Classificação da safra: " + classificacaoSafra);
alert("Classificação da safra: " + classificacaoSafra);

var qntEstoque = prompt("Digite a quantidade em estoque:");
alert("Essa quantidade irá aparecer no console");
console.log("Quantidade em estoque: " + qntEstoque);

if (qntEstoque < 5) {
    alert("ESTOQUE BAIXO!");
    console.log("ESTOQUE BAIXO!");
}

// Espera o DOM carregar antes de manipular os elementos
window.onload = function () {
    document.getElementById("person-display").textContent = nome;
    document.getElementById("email-display").textContent = email;
    document.getElementById("name-display").textContent = nomeVinho;
    document.getElementById("type-display").textContent = tipoVinho;
    document.getElementById("safra-display").textContent = safraVinho;
    document.getElementById("qnt-display").textContent = qntEstoque;
    document.getElementById("status-display").textContent = qntEstoque < 5 ? "ESTOQUE BAIXO" : "Disponível";
    document.getElementById("class-display").textContent = classificacaoSafra;
};
