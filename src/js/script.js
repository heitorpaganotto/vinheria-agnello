alert("Seja Bem-vindo à Vinheria Agnello");


var email = "";
var senha = "";


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
//a 

alert("Cadastro realizado! Veja os detalhes no console.");

console.log ("Olá " + nome);
console.log ("Cadastro realizado com sucesso!");
console.log ("Seja Bem-vindo à Vinheria Agnello!");

var NomeVinho = prompt("Digite o nome do vinho:");
    alert("Esse vinho irá aparecer no console");    
    console.log("Nome do vinho: " + NomeVinho);

var TipoVinho = prompt("Digite o tipo do vinho (Tinto, Rosé ou Branco):");
    alert("Esse vinho irá aparecer no console");
    console.log("Tipo do vinho: " + TipoVinho);

var SafraVinho = prompt("Digite a safra do vinho:");
    alert("Essa safra irá aparecer no console");
    console.log("Safra do vinho: " + SafraVinho);

var qntEstoquee = prompt("Digite a quantidade em estoque:");        
    alert("Essa quantidade irá aparecer no console");
    console.log("Quantidade em estoque: " + qntEstoquee);



document.getElementById("email-display").textContent = email;