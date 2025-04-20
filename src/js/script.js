// Exibe uma mensagem de boas-vindas ao usuário
alert("Seja Bem-vindo à Vinheria Agnello");

// Declaração de variáveis para armazenar os dados do usuário
var email = "";
var senha = "";
var nome = "";

// Loop para garantir que os campos de email, senha e nome sejam preenchidos
while (email === "" || senha === "" || nome === "") {
    // Solicita o email do usuário
    email = prompt("Digite seu email para login");
    if (email === "") {
        alert("Campo de email não pode ser vazio!");
        continue; // Retorna ao início do loop se o email estiver vazio
    }

    // Solicita a senha do usuário
    senha = prompt("Digite sua senha para login");
    if (senha === "") {
        alert("Campo de senha não pode ser vazio!");
    }

    // Solicita o nome completo do usuário
    nome = prompt("Digite seu nome completo");
    if (nome === "") {
        alert("Campo de nome não pode ser vazio!");
    }
}

// Confirmação de cadastro e exibição de detalhes no console
alert("Cadastro realizado! Veja os detalhes no console.");

// Exibe mensagens de boas-vindas e confirmação no console
console.log("Olá " + nome);
console.log("Cadastro realizado com sucesso!");
console.log("Seja Bem-vindo à Vinheria Agnello!");

// Solicita informações sobre o vinho
var nomeVinho = prompt("Digite o nome do vinho:");
alert("Esse vinho irá aparecer no console");
console.log("Nome do vinho: " + nomeVinho);

var tipoVinho = prompt("Digite o tipo do vinho (Tinto, Rosé ou Branco):");
alert("Esse vinho irá aparecer no console");
console.log("Tipo do vinho: " + tipoVinho);

var safraVinho = prompt("Digite a safra do vinho:");
alert("Essa safra irá aparecer no console");
console.log("Safra do vinho: " + safraVinho);

// Classifica a safra do vinho com base no ano
var classificacaoSafra = "";
if (safraVinho >= 2020) {
    classificacaoSafra = "Vinho jovem"; // Safras recentes
} else if (safraVinho >= 2015) {
    classificacaoSafra = "Vinho amadurecido"; // Safras intermediárias
} else {
    classificacaoSafra = "Vinho antigo"; // Safras mais antigas
}
console.log("Classificação da safra: " + classificacaoSafra);
alert("Classificação da safra: " + classificacaoSafra);

// Solicita a quantidade em estoque do vinho
var qntEstoque = prompt("Digite a quantidade em estoque:");
alert("Essa quantidade irá aparecer no console");
console.log("Quantidade em estoque: " + qntEstoque);

// Verifica se o estoque está baixo
if (qntEstoque < 5) {
    alert("ESTOQUE BAIXO!");
    console.log("ESTOQUE BAIXO!");
}

// Espera o DOM carregar antes de manipular os elementos da página
window.onload = function () {
    // Atualiza os elementos HTML com os dados fornecidos pelo usuário
    document.getElementById("person-display").textContent = nome;
    document.getElementById("email-display").textContent = email;
    document.getElementById("name-display").textContent = nomeVinho;
    document.getElementById("type-display").textContent = tipoVinho;
    document.getElementById("safra-display").textContent = safraVinho;
    document.getElementById("qnt-display").textContent = qntEstoque;
    document.getElementById("status-display").textContent = qntEstoque < 5 ? "ESTOQUE BAIXO" : "Disponível";
    document.getElementById("class-display").textContent = classificacaoSafra;
};