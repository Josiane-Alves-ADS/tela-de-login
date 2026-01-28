const formulario = document.getElementById("meuFormulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email != "" && senha != "") {
        alert("Aguarde, estamos efetuando o seu login!"); 
    } else {
        alert("Por favor, verifique os campos: usuário e senha.");
    }
});